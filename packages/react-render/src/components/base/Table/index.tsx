import { Table as AntdTable } from 'antd';
import React from 'react';

const { Column: AntdColumn } = AntdTable;

const Table = React.forwardRef((props: any, ref: React.Ref<any>) => {
  const { layout, dataSource, columns } = props.schema;

  return (
    <AntdTable
      ref={ref}
      dataSource={dataSource.map((v) => JSON.parse(v))}
      style={layout}
    >
      {columns.map((column: string) => {
        const _column: { title: string; dataIndex: string } =
          JSON.parse(column);
        return (
          <AntdColumn
            title={_column.title}
            dataIndex={_column.dataIndex}
            key={_column.dataIndex}
          />
        );
      })}
    </AntdTable>
  );
});

export default Table;
