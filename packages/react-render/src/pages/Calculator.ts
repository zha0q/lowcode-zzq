import { IMaterialsMapValue } from '@/store/RefContext';
import {
  findNearestDomId,
  isMouseInDom,
  isSecondElementHigher,
  getNextElementPosition,
  isMouseXInDomXPlusFive,
} from './utils';

export type IAxis = 'x' | 'y';

interface ILayoutInfo {
  parentNodeId: string;
  childNodeId: string;
  parentNodeRect: DOMRect;
  childNodeRect: DOMRect;
  axis: IAxis;
}

export class Calculator {
  private containerNodeRectMap = new Map<string, DOMRect>();
  private containerNodeComputedStyleMap = new Map<
    string,
    CSSStyleDeclaration
  >();
  private baseNodeRectMap = new Map<string, DOMRect>();
  private baseNodeComputedStyleMap = new Map<string, CSSStyleDeclaration>();

  constructor() {}

  load(materialsMap: Map<string, IMaterialsMapValue>) {
    this.containerNodeRectMap.clear();
    this.containerNodeComputedStyleMap.clear();
    this.baseNodeRectMap.clear();
    this.baseNodeComputedStyleMap.clear();
    materialsMap.forEach((materials, id) => {
      if (materials.type === 'base') {
        this.baseNodeRectMap.set(id, materials.ref.getBoundingClientRect());
        this.baseNodeComputedStyleMap.set(
          id,
          window.getComputedStyle(materials.ref),
        );
      } else {
        this.containerNodeRectMap.set(
          id,
          materials.ref.getBoundingClientRect(),
        );
        this.containerNodeComputedStyleMap.set(
          id,
          window.getComputedStyle(materials.ref),
        );
      }
    });
  }

  calcu(mousePosition: { x: number; y: number }): ILayoutInfo | undefined {
    let parentNodeId = '';
    let childNodeId = '';
    let parentNodeRect = undefined;
    let childNodeRect = undefined;

    try {
      [parentNodeId, parentNodeRect] = Array.from(
        this.containerNodeRectMap.entries(),
      )
        .filter(([, rect]) => isMouseInDom(mousePosition, rect))
        .filter(
          ([id]) =>
            this.containerNodeComputedStyleMap.get(id)?.display !== 'none',
        )
        .reduce(([resultId, resultRect], [id, rect]) => {
          const resultStyle = this.containerNodeComputedStyleMap.get(
            resultId,
          ) as CSSStyleDeclaration;
          const currStyle = this.containerNodeComputedStyleMap.get(
            id,
          ) as CSSStyleDeclaration;
          if (isSecondElementHigher(resultStyle, currStyle, resultId, id))
            return [id, rect];
          else return [resultId, resultRect];
        });
    } catch {
      return;
    }

    const childDomRectList = Array.from(this.baseNodeRectMap.entries())
      .concat(Array.from(this.containerNodeRectMap.entries()))
      .filter(([id]) => id !== parentNodeId)
      .filter(([id]) => id.includes(parentNodeId));

    [childNodeId, childNodeRect] =
      childDomRectList.length &&
      !isMouseXInDomXPlusFive(mousePosition, parentNodeRect)
        ? findNearestDomId(mousePosition, childDomRectList)
        : [
            '',
            new DOMRect(
              parentNodeRect.x,
              parentNodeRect.y,
              1,
              parentNodeRect.height,
            ),
          ];

    const axis =
      childDomRectList.length &&
      !isMouseXInDomXPlusFive(mousePosition, parentNodeRect)
        ? getNextElementPosition(
            this.containerNodeComputedStyleMap.get(parentNodeId) as any,
            this.baseNodeComputedStyleMap.get(childNodeId) ??
              (this.containerNodeComputedStyleMap.get(childNodeId) as any),
          )
        : 'x';

    return {
      parentNodeId,
      childNodeId,
      parentNodeRect,
      childNodeRect,
      axis,
    };
  }

  click(mousePosition: { x: number; y: number }) {
    console.log(
      Array.from(this.baseNodeRectMap.entries())
        .concat(Array.from(this.containerNodeRectMap.entries()))
        .filter(([, rect]) => isMouseInDom(mousePosition, rect)),
    );
    return Array.from(this.baseNodeRectMap.entries())
      .concat(Array.from(this.containerNodeRectMap.entries()))
      .filter(([, rect]) => isMouseInDom(mousePosition, rect))
      .reduce(([resultId, resultRect], [id, rect]) => {
        const resultStyle =
          this.containerNodeComputedStyleMap.get(resultId) ??
          (this.baseNodeComputedStyleMap.get(resultId) as CSSStyleDeclaration);
        const currStyle =
          this.containerNodeComputedStyleMap.get(id) ??
          (this.baseNodeComputedStyleMap.get(id) as CSSStyleDeclaration);
        if (isSecondElementHigher(resultStyle, currStyle, resultId, id))
          return [id, rect];
        else return [resultId, resultRect];
      })[0];
  }
}
