import { IMaterialsMapValue } from '@/store/RefContext';
import {
  findNearestDomId,
  isMouseInDom,
  isSecondElementHigher,
  getNextElementPosition,
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
          if (isSecondElementHigher(resultStyle, currStyle))
            return [resultId, resultRect];
          else return [id, rect];
        });
    } catch {
      return;
    }

    [childNodeId, childNodeRect] = findNearestDomId(
      mousePosition,
      Array.from(this.baseNodeRectMap.entries())
        .concat(Array.from(this.containerNodeRectMap.entries()))
        .filter(([id]) => id !== parentNodeId)
        .filter(([id]) => id.includes(parentNodeId)),
    );

    return {
      parentNodeId,
      childNodeId,
      parentNodeRect,
      childNodeRect,
      axis: getNextElementPosition(
        this.containerNodeComputedStyleMap.get(parentNodeId) as any,
        this.baseNodeComputedStyleMap.get(childNodeId) ?? this.containerNodeComputedStyleMap.get(childNodeId) as any,
      ),
    };
  }
}
