import { Area as AntdChartArea } from '@ant-design/charts';
import React from 'react';

const Area = React.forwardRef((props: any, ref: React.Ref<any>) => {
  const { layout, data, xField, yField } = props.schema;

  return (
    <AntdChartArea
      ref={ref}
      xField={xField}
      yField={yField}
      data={data}
      style={layout}
    />
  );
});

export default Area;
