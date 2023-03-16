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
  console.log(actionInstrance, ActionTypeMap)
  const actionResult = await actionInstrance.run(
    {
      ...actionConfig,
    },
    renderer,
    event,
  );
  return actionResult;
};
