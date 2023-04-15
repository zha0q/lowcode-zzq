// import Wrapper from '@/components/Wrapper';
import Wrapper from '@/components/Wrapper';
import { Button as AntdButton } from 'antd';
import React from 'react';

const Button = React.forwardRef((props: any, ref) => {
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
    // <Wrapper ref={ref}>
      <AntdButton
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
    // </Wrapper>
  );
});

export default Button;
