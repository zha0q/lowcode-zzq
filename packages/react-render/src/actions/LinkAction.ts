import { registerAction, RendererAction } from "./Actions";

export class LinkAction implements RendererAction {
  async run(
    action: any,
    renderer: any,
    event: any
  ) {
    if (!renderer.props.env?.jumpTo) {
      throw new Error('env.jumpTo is required!');
    }

    renderer.props.env.jumpTo(
      action.args?.to,
      {
        actionType: action.actionType,
        type: 'button',
        ...action.args
      },
      action.data ?? {}
    );
  }
}

console.log(1)

registerAction('openlink', new LinkAction());
