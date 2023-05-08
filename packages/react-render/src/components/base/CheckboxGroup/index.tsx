import { Checkbox as AntdCheckbox } from 'antd';
import React from 'react';

const CheckboxGroup = React.forwardRef(
  (props: any, ref: React.Ref<HTMLInputElement>) => {
    const { layout, defaultValue, disabled, name, options, value } =
      props.schema;
    const { $ } = props;

    const handleChange = (e: any) => {
      $.dispatchEvent(e, $.renderer, {});
    };
    return (
      <AntdCheckbox.Group
        ref={ref}
        style={layout}
        defaultValue={defaultValue}
        name={name}
        options={options}
        value={value}
        disabled={disabled}
        onChange={handleChange}
      />
    );
  },
);

export default CheckboxGroup;
