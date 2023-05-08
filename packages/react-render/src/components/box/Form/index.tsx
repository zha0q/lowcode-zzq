import { Form as AntdForm } from 'antd';
import React from 'react';

const Form = React.forwardRef((props: any, ref: React.Ref<any>) => {
  const { layout, name, labelCol, wrapperCol, initialValues } = props.schema;

  const { $ } = props;

  const handleFinish = (e: any) => {
    $.dispatchEvent(e, $.renderer, {});
  };

  return (
    <AntdForm
      ref={ref}
      name={name}
      style={layout}
      labelCol={{ span: labelCol }}
      wrapperCol={{ span: wrapperCol }}
      initialValues={initialValues}
      onFinish={handleFinish}
      autoComplete="off"
    >
      {props.children}
    </AntdForm>
  );
});

export default Form;
