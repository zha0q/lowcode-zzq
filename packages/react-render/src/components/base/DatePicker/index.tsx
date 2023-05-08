import { DatePicker as AntdDatePicker } from 'antd';
import React from 'react';

const DatePicker = React.forwardRef(
  (props: any, ref: React.Ref<any>) => {
    const { layout, picker } =
      props.schema;
    const { $ } = props;

    const handleChange = (e: any) => {
      $.dispatchEvent(e, $.renderer, {});
    };
    return (
      <AntdDatePicker
        ref={ref}
        style={layout}
        picker={picker}
        onChange={handleChange}
      />
    );
  },
);

export default DatePicker;
