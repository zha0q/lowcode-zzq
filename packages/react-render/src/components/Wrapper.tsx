import React, { useEffect } from 'react';

function applyFirstChildStylesToParent(parent: HTMLElement) {
  const firstChild = parent.firstElementChild as HTMLElement;
  if (firstChild) {
    const styles = window.getComputedStyle(firstChild);
    console.log(firstChild, parent);
    for (let i = 0; i < styles.length; i++) {
      const propName = styles[i];
      parent.style[propName as any] = styles[propName as any];
    }
  }
  firstChild.style.visibility = 'visible';
}

export default React.forwardRef(
  (props, ref: React.ForwardedRef<HTMLDivElement>) => {
    // 因为父组件挂载完成 在 子组件挂载完成之后 所以这里 能够获取到子组件

    useEffect(() => {
      applyFirstChildStylesToParent((ref as any)?.current);
    }, []);

    return (
      <div ref={ref} style={{ visibility: 'hidden' }}>
        {props.children}
      </div>
    );
  },
);
