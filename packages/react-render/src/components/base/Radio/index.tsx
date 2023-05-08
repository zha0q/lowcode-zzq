import { Radio as AntdRadio } from 'antd';
import React from 'react';

const Radio = React.forwardRef(
  (props: any, ref: React.Ref<any>) => {
    const { layout, checked, defaultChecked, disabled, label } =
      props.schema;
    const { $ } = props;

    const handleChange = (e: any) => {
      $.dispatchEvent(e, $.renderer, {});
    };
    return (
      <AntdRadio
        ref={ref}
        style={layout}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={handleChange}
      >
        {$.parseTemplate(label)}
      </AntdRadio>
    );
  },
);

export default Radio;
