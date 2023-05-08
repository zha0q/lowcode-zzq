import { Form as AntdForm } from 'antd';
import React from 'react';

const { Item: AntdFormItem } = AntdForm;

const FormItem = React.forwardRef((props: any, ref: React.Ref<any>) => {
  const { layout, label, name, rules } = props.schema;

  return (
    <div style={layout} ref={ref}>
      <AntdFormItem name={name} label={label} rules={rules}>
        {props.children}
      </AntdFormItem>
    </div>
  );
});

export default FormItem;
