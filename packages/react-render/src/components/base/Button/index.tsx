import { parseString } from '@/renderer/utils';
import { Button as AntdButton } from 'antd';
import { memo } from 'react';

const Button = memo(
  (props: any) => {
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
    return (
      <AntdButton
        style={{
          position: 'absolute',
          height: layout.h,
          width: layout.w,
          top: layout.y,
          left: layout.x,
        }}
        block={block}
        type={level}
        size={size}
        loading={loadingOn ? $.parseTemplate(loadingOn) : loading}
        onClick={onEvent?.click}
      >
        {$.parseTemplate(label)}
      </AntdButton>
    );
  },
  (prev: any, curr: any) => {
    return prev.schema === curr.schema;
  },
);

export default Button;
