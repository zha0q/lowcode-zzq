export function isMouseInDom(
  mousePosition: { x: number; y: number },
  rect: DOMRect,
): boolean {
  return (
    mousePosition.x >= rect.left && // check if mouse x position is greater than or equal to the left edge of the DOM element
    mousePosition.x <= rect.right && // check if mouse x position is less than or equal to the right edge of the DOM element
    mousePosition.y >= rect.top && // check if mouse y position is greater than or equal to the top edge of the DOM element
    mousePosition.y <= rect.bottom // check if mouse y position is less than or equal to the bottom edge of the DOM element
  );
}

export function isSecondElementHigher(
  firstElementStyle: CSSStyleDeclaration,
  secondElementStyle: CSSStyleDeclaration,
): boolean {
  const firstElementZIndex = parseInt(firstElementStyle.zIndex);
  const secondElementZIndex = parseInt(secondElementStyle.zIndex);
  if (secondElementZIndex > firstElementZIndex) {
    return true;
  }
  if (secondElementZIndex === firstElementZIndex) {
    const firstElementPosition = firstElementStyle.position;
    const secondElementPosition = secondElementStyle.position;
    if (secondElementPosition === 'static') {
      return false;
    }
    if (firstElementPosition === 'static') {
      return true;
    }
    if (
      secondElementPosition === 'relative' &&
      firstElementPosition !== 'relative'
    ) {
      return true;
    }
    if (
      secondElementPosition === 'absolute' &&
      firstElementPosition !== 'absolute' &&
      firstElementPosition !== 'relative'
    ) {
      return true;
    }
  }
  return false;
}

export function findNearestDomId(
  mousePosition: { x: number; y: number },
  domRectList: [id: string, rect: DOMRect][],
): [id: string, rect: DOMRect] {
  let nearestDom;
  let minDistance = Number.MAX_VALUE;
  for (const [id, rect] of domRectList) {
    const distance = Math.sqrt(
      Math.pow(rect.right - mousePosition.x, 2) +
      Math.pow(rect.bottom - mousePosition.y, 2),
    );
    if (distance < minDistance) {
      minDistance = distance;
      nearestDom = [id, rect];
    }
  }
  return nearestDom as any;
}

/**
 * 判断子元素的下一个元素会在子元素的右边还是下边
 * @param parentStyle 父级dom元素的CSSStyleDeclaration
 * @param childStyle 子元素的CSSStyleDeclaration
 * @returns 'x'或者'y'
 */
export function getNextElementPosition(
  parentStyle: CSSStyleDeclaration,
  childStyle: CSSStyleDeclaration,
): 'x' | 'y' {
  const parentDisplay = parentStyle.display;
  const childDisplay = childStyle.display;
  if (parentDisplay === 'flex' || parentDisplay === 'inline-flex') {
    const parentFlexDirection = parentStyle.flexDirection;
    if (
      parentFlexDirection === 'row' ||
      parentFlexDirection === 'row-reverse'
    ) {
      return 'x';
    } else {
      return 'y';
    }
  } else if (parentDisplay === 'grid' || parentDisplay === 'inline-grid') {
    const parentGridTemplateColumns = parentStyle.gridTemplateColumns;
    const parentGridTemplateRows = parentStyle.gridTemplateRows;
    if (
      parentGridTemplateColumns !== 'none' &&
      parentGridTemplateColumns !== 'initial' &&
      parentGridTemplateColumns !== 'inherit'
    ) {
      return 'x';
    } else if (
      parentGridTemplateRows !== 'none' &&
      parentGridTemplateRows !== 'initial' &&
      parentGridTemplateRows !== 'inherit'
    ) {
      return 'y';
    } else {
      return 'x';
    }
  } else {
    if (childDisplay === 'inline' || childDisplay === 'inline-block') {
      return 'x';
    } else {
      return 'y';
    }
  }
}

export function isMouseXInDomXPlusFive(
  mousePosition: { x: number; y: number },
  rect: DOMRect,
): boolean {
  return (
    mousePosition.x >= rect.x && // check if mouse x position is greater than or equal to the left edge of the DOM element plus 5
    mousePosition.x <= rect.x + 8
  );
}
