import { runActions } from '@/actions/Actions';
import debounce from 'lodash/debounce';

let rendererEventListeners: any = [];

// 将事件上下文转成事件对象
export type RendererEvent<T, P = any> = {
  context: T;
  type: string;
  prevented?: boolean; // 阻止原有动作执行
  stoped?: boolean; // 阻止后续动作执行
  data?: P;
  preventDefault: () => void;
  stopPropagation: () => void;
  setData: (data: P) => void;
};

export function createRendererEvent(type: string, context: any): any {
  const rendererEvent = {
    context,
    type,
    prevented: false,
    stoped: false,
    preventDefault() {
      rendererEvent.prevented = true;
    },

    stopPropagation() {
      rendererEvent.stoped = true;
    },

    get data() {
      return rendererEvent.context.data;
    },

    setData(data: any) {
      rendererEvent.context.data = data;
    },
  };
  return rendererEvent;
}

export const bindEvent = (renderer: any) => {
  const listeners: any = renderer.props.schema?.onEvent;
  if (listeners) {
    // 暂存
    for (let key of Object.keys(listeners)) {
      const listener = rendererEventListeners.find(
        (item: any) => item.renderer === renderer && item.type === key,
      );
      // 防抖走到这里，cancel掉可能的实例，去掉队列中的旧listener，重新放入一个新的任务
      if (listener?.executing) {
        listener?.debounceInstance?.cancel?.();
        rendererEventListeners = rendererEventListeners.filter(
          (item: any) =>
            !(
              item.renderer === listener.renderer && item.type === listener.type
            ),
        );
        rendererEventListeners.push({
          renderer,
          type: key,
          debounce: listener.debounce || null,
          weight: listener.weight || 0,
          actions: listener.actions,
        });
      }
      if (!listener) {
        rendererEventListeners.push({
          renderer,
          type: key,
          debounce: listeners[key].debounce || null,
          weight: listeners[key].weight || 0,
          actions: listeners[key].actions,
        });
      }
    }
  }
  return () => {
    rendererEventListeners.filter((_renderer: any) => {
      return _renderer !== renderer;
    });
  };
};

export async function dispatchEvent(
  e: string | React.MouseEvent<any>,
  renderer: any,
  data: any,
): Promise<any> {
  let unbindEvent: (() => void) | null | undefined = null;
  const eventName = typeof e === 'string' ? e : e.type;

  unbindEvent = bindEvent(renderer);

  renderer?.props?.env?.beforeDispatchEvent?.(e, renderer, data);

  // 没有可处理的监听
  if (!rendererEventListeners.length) {
    return Promise.resolve();
  }
  // 如果是广播动作，就直接复用
  const rendererEvent = createRendererEvent(eventName, {
    env: renderer?.props?.env,
    nativeEvent: e,
    data,
  });
  // 过滤&排序
  const listeners = rendererEventListeners
    .filter(
      (item: any) => item.type === eventName && item.renderer === renderer,
    )
    .sort((prev: any, next: any) => next.weight - prev.weight);
  let executedCount = 0;
  const checkExecuted = () => {
    executedCount++;
    if (executedCount === listeners.length) {
      unbindEvent?.();
    }
  };
  for (let listener of listeners) {
    const {
      wait = 1000,
      trailing = true,
      leading = false,
      maxWait = 10000,
    } = listener?.debounce || {};
    if (listener?.debounce) {
      const debounced = debounce(
        async () => {
          await runActions(listener.actions, listener.renderer, rendererEvent);
          checkExecuted();
        },
        wait,
        {
          trailing,
          leading,
          maxWait,
        },
      );
      rendererEventListeners.forEach((item: any) => {
        // 找到事件队列中正在执行的事件加上标识，下次待执行队列就会把这个事件过滤掉
        if (
          item.renderer === listener.renderer &&
          listener.type === item.type
        ) {
          item.executing = true;
          item.debounceInstance = debounced;
        }
      });
      debounced();
    } else {
      await runActions(listener.actions, listener.renderer, rendererEvent);
      checkExecuted();
    }

    // 停止后续监听器执行
    if (rendererEvent.stoped) {
      break;
    }
  }
  return Promise.resolve(rendererEvent);
}
