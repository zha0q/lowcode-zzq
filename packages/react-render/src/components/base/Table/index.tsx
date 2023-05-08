import { Table as AntdTable } from 'antd';
import React from 'react';

const { Column: AntdColumn } = AntdTable;

const Table = React.forwardRef((props: any, ref: React.Ref<any>) => {
  const { layout, dataSource, columns } = props.schema;

  return (
    <AntdTable ref={ref} dataSource={dataSource} style={layout}>
      {columns.map((column: { title: string; dataIndex: string }) => {
        return (
          <AntdColumn
            title={column.title}
            dataIndex={column.dataIndex}
            key={column.dataIndex}
          />
        );
      })}
    </AntdTable>
  );
});

export default Table;
