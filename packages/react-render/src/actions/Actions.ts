export interface RendererAction {
  // 运行这个 Action，每个类型的 Action 都只有一个实例，run 函数是个可重入的函数
  run: (action: any, renderer: any, event: any) => Promise<any>;
}

// 存储 Action 和类型的映射关系，用于后续查找
const ActionTypeMap: { [key: string]: RendererAction } = {};

// 注册 Action
export const registerAction = (type: string, action: RendererAction) => {
  ActionTypeMap[type] = action;
};

// 通过类型获取 Action 实例
export const getActionByType = (type: string) => {
  return ActionTypeMap[type];
};


export interface ListenerAction {
  actionType: string; // 动作类型 逻辑动作|自定义（脚本支撑）|reload|url|ajax|dialog|drawer 其他扩充的组件动作
  description?: string; // 事件描述，actionType: broadcast
  componentId?: string; // 组件ID，用于直接执行指定组件的动作，指定多个组件时使用英文逗号分隔
  args?: Record<string, any>; // 动作配置，可以配置数据映射
  data?: Record<string, any> | null; // 动作数据参数，可以配置数据映射
  dataMergeMode?: 'merge' | 'override'; // 参数模式，合并或者覆盖
  outputVar?: string; // 输出数据变量名
  preventDefault?: boolean; // 阻止原有组件的动作行为
  stopPropagation?: boolean; // 阻止后续的事件处理器执行
  expression?: string | any; // 执行条件
  execOn?: string; // 执行条件，1.9.0废弃
}

export interface ListenerContext extends React.Component<any> {
  [propName: string]: any;
}

export const runActions = async (actions: any, renderer: any, event: any) => {
  if (!Array.isArray(actions)) {
    actions = [actions];
  }

  for (const actionConfig of actions) {
    let actionInstrance = getActionByType(actionConfig.actionType);

    if (
      actionConfig.actionType === 'url' ||
      actionConfig.actionType === 'link' ||
      actionConfig.actionType === 'jump'
    ) {
      // 打开页面动作
      actionInstrance = getActionByType('openlink');
    }

    // 这些节点的子节点运行逻辑由节点内部实现
    await runAction(actionInstrance, actionConfig, renderer, event);
    if (event?.stoped) {
      break;
    }
  }
};

export const runAction = async (
  actionInstrance: RendererAction,
  actionConfig: any,
  renderer: any,
  event: any,
) => {
  console.log(actionInstrance)
  const actionResult = await actionInstrance.run(
    {
      ...actionConfig,
    },
    renderer,
    event,
  );
  return actionResult;
};
