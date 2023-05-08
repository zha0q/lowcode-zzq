import { Line as AntdChartLine } from '@ant-design/charts';
import React from 'react';

const Line = React.forwardRef((props: any, ref: React.Ref<any>) => {
  const { layout, data, xField, yField } = props.schema;

  return (
    <AntdChartLine
      ref={ref}
      xField={xField}
      yField={yField}
      data={data}
      style={layout}
    />
  );
});

export default Line;
