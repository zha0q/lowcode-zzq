import { Switch as AntdSwitch } from 'antd';
import React from 'react';

const Switch = React.forwardRef((props: any, ref: React.Ref<any>) => {
  const { layout, defaultChecked, size, disabled } = props.schema;

  const { $ } = props;

  const handleChange = (e: any) => {
    $.dispatchEvent(e, $.renderer, {});
  };

  return (
    <AntdSwitch
      ref={ref}
      style={layout}
      defaultChecked={defaultChecked}
      size={size}
      disabled={disabled}
      onChange={handleChange}
    />
  );
});

export default Switch;
