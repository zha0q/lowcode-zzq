import { Button as AntdButton } from 'antd';
import React from 'react';

const Button = React.forwardRef(
  (props: any, ref: React.Ref<HTMLButtonElement>) => {
    const {
      block,
      label,
      level,
      size,
      confirm,
      confirmText,
      loading,
      loadingOn,
      layout,
      onEvent,
    } = props.schema;
    const { $ } = props;

    const handleClick = (e: any) => {
      $.dispatchEvent(e, $.renderer, {});
    };
    return (
      <AntdButton
        ref={ref}
        style={{
          position: layout.position,
          height: layout.h,
          width: layout.w,
          top: layout.y,
          left: layout.x,
        }}
        block={block}
        type={level}
        size={size}
        loading={loadingOn ? $.parseTemplate(loadingOn) : loading}
        onClick={handleClick}
      >
        {$.parseTemplate(label)}
      </AntdButton>
    );
  },
);

export default Button;
