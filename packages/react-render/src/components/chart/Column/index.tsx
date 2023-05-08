import { Column as AntdChartColumn } from '@ant-design/charts';
import React from 'react';

const Column = React.forwardRef((props: any, ref: React.Ref<any>) => {
  const { layout, data, xField, yField } = props.schema;

  return (
    <AntdChartColumn
      ref={ref}
      xField={xField}
      yField={yField}
      data={data}
      style={layout}
    />
  );
});

export default Column;
