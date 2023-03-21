import { parseString } from '@/renderer/utils';
import { Button as AntdButton } from 'antd';

const Button = (props: any) => {
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
console.log('buttonrerender')
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
      onClick={handleClick}
    >
      {$.parseTemplate(label)}
    </AntdButton>
  );
};

export default Button;
