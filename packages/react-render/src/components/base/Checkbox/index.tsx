import { Checkbox as AntdCheckbox } from 'antd';
import React from 'react';

const Checkbox = React.forwardRef(
  (props: any, ref: React.Ref<HTMLInputElement>) => {
    const { layout, autoFocus, checked, defaultChecked, disabled, label } =
      props.schema;
    const { $ } = props;

    const handleChange = (e: any) => {
      $.dispatchEvent(e, $.renderer, {});
    };
    return (
      <AntdCheckbox
        ref={ref}
        style={layout}
        autoFocus={autoFocus}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={handleChange}
      >
        {$.parseTemplate(label)}
      </AntdCheckbox>
    );
  },
);

export default Checkbox;
