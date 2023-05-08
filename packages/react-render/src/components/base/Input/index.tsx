import { Input as AntdInput } from 'antd';
import React from 'react';

const Input = React.forwardRef((props: any, ref: React.Ref<any>) => {
  const {
    layout,
    allowClear,
    bordered,
    defaultValue,
    disabled,
    maxLength,
    showCount,
    size,
    value,
  } = props.schema;
  const { $ } = props;

  const handleChange = (e: any) => {
    $.dispatchEvent(e, $.renderer, {});
  };
  return (
    <AntdInput
      ref={ref}
      style={layout}
      allowClear={allowClear}
      bordered={bordered}
      defaultValue={defaultValue}
      maxLength={maxLength}
      showCount={showCount}
      size={size}
      value={value}
      disabled={disabled}
      onChange={handleChange}
    />
  );
});

export default Input;
