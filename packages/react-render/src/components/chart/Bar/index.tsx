import { Bar as AntdChartBar } from '@ant-design/charts';
import React from 'react';

const Bar = React.forwardRef((props: any, ref: React.Ref<any>) => {
  const { layout, data, xField, yField } = props.schema;

  return (
    <AntdChartBar
      ref={ref}
      xField={xField}
      yField={yField}
      data={data}
      style={layout}
    />
  );
});

export default Bar;
