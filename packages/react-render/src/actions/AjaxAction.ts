import { Api, ApiObject, fetcherResult } from '../types';
import { normalizeApiResponseData } from '../utils/api';
import { RendererEvent } from '../renderer/event';
import { message } from 'antd';
import {
  RendererAction,
  ListenerAction,
  ListenerContext,
  registerAction,
} from '../actions/Actions';

export interface IAjaxAction extends ListenerAction {
  action: 'ajax';
  args: {
    api: Api;
    messages?: {
      success: string;
      failed: string;
    };
    options?: Record<string, any>;
    [propName: string]: any;
  };
}

/**
 * 发送请求动作
 *
 * @export
 * @class AjaxAction
 * @implements {Action}
 */
export class AjaxAction implements RendererAction {
  fetcherType: string;
  constructor(fetcherType: string = 'ajax') {
    this.fetcherType = fetcherType;
  }

  async run(
    action: IAjaxAction,
    renderer: ListenerContext,
    event: RendererEvent<any>,
  ) {
    if (!renderer.props.env?.fetcher) {
      throw new Error('env.fetcher is required!');
    }
    if (this.fetcherType === 'download' && action.actionType === 'download') {
      if ((action as any).args?.api) {
        (action as any).args.api.responseType = 'blob';
      }
    }

    // return fetch(action.args?.api);

    const env = event.context.env;
    // console.log(env.fetcher);
    try {
      const result = await fetch(
        action.args?.api,
        action.data ?? {},
        action.args?.options ?? {},
      );
      console.log(result);
      const responseData =
        result?.data || result.ok
          ? normalizeApiResponseData(result.data)
          : null;

      // 记录请求返回的数据
      event.setData(
        Object.assign(event.data, {
          ...responseData, // 兼容历史配置
          responseData: responseData,
          [action.outputVar || 'responseResult']: {
            ...responseData,
            responseData,
            responseStatus: result.status,
            responseMsg: result.msg,
          },
        }),
      );

      if (!action.args?.options?.silent) {
        if (!result.ok) {
          // throw new ServerError(
          //   (action.args?.api as ApiObject)?.messages?.failed ??
          //     action.args?.messages?.failed ??
          //     result.msg,
          //   result,
          // );
        } else {
          const msg =
            (action.args?.api as ApiObject)?.messages?.success ??
            action.args?.messages?.success ??
            result.msg ??
            result.defaultMsg;
          msg &&
            env.notify(
              'success',
              msg,
              result.msgTimeout !== undefined
                ? {
                    closeButton: true,
                    timeout: result.msgTimeout,
                  }
                : undefined,
            );
        }
      }

      return result.data;
    } catch (e) {
      if (!action.args?.options?.silent) {
        if (e.type === 'ServerError') {
          // const result = (e as ServerError).response;
          // env.notify(
          //   'error',
          //   e.message,
          //   result.msgTimeout !== undefined
          //     ? {
          //         closeButton: true,
          //         timeout: result.msgTimeout,
          //       }
          //     : undefined,
          // );
        } else {
          console.error('error', e.message);
          // env.notify('error', e.message);
        }
      }

      // 不阻塞后面执行
      // throw e;
    }
  }
}

registerAction('ajax', new AjaxAction());

registerAction('download', new AjaxAction('download'));
