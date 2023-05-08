import { Select as AntdSelect } from 'antd';
import React from 'react';

const Select = React.forwardRef(
  (props: any, ref: React.Ref<any>) => {
    const { layout, allowClear, bordered, defaultValue, disabled, maxLength, options, size, value } =
      props.schema;
    const { $ } = props;

    const handleChange = (e: any) => {
      $.dispatchEvent(e, $.renderer, {});
    };
    return (
      <AntdSelect
        ref={ref}
        style={layout}
        allowClear={allowClear}
        bordered={bordered}
        defaultValue={defaultValue}
        maxLength={maxLength}
        options={options}
        size={size}
        value={value} 
        disabled={disabled}
        onChange={handleChange}
      />
    );
  },
);

export default Select;
