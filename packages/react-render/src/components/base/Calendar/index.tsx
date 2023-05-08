import { Calendar as AntdCalendar } from 'antd';
import React from 'react';

const Input = React.forwardRef((props: any, ref: React.Ref<any>) => {
  const { fullscreen, layout } = props.schema;
  const { $ } = props;

  const handleChange = (e: any) => {
    $.dispatchEvent(e, $.renderer, {});
  };
  return (
    <div ref={ref} style={layout}>
      <AntdCalendar fullscreen={fullscreen} onPanelChange={handleChange} />
    </div>
  );
});

export default Input;
