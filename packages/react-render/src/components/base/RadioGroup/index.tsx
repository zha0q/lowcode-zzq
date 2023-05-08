import { Radio as AntdRadio } from 'antd';
import React from 'react';

const RadioGroup = React.forwardRef(
  (props: any, ref: React.Ref<any>) => {
    const { layout, buttonStyle, defaultValue, disabled, name, options, optionsType, size, value } =
      props.schema;
    const { $ } = props;

    const handleChange = (e: any) => {
      $.dispatchEvent(e, $.renderer, {});
    };
    return (
      <AntdRadio.Group
        ref={ref}
        style={layout}
        buttonStyle={buttonStyle}
        defaultValue={defaultValue}
        disabled={disabled}
        name={name}
        options={options}
        optionType={optionsType}
        size={size}
        value={value}
        onChange={handleChange}
      />
    );
  },
);

export default RadioGroup;
