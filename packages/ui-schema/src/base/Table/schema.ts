const TableSchema: any = {
  type: 'Table',
  schema: [
    {
      fieldKey: 'dataSource',
      title: '数据源',
      type: 'array',
      ui: {
        type: 'array',
        theme: 'antd',
      },
      items: {
        type: 'string',
        title: '数据',
        ui: {
          type: 'text',
          style: {
            width: '100%',
          },
        },
      },
    },
    {
      fieldKey: 'columns',
      title: '列表格描述',
      type: 'array',
      ui: {
        type: 'array',
        theme: 'antd',
      },
      items: {
        type: 'string',
        title: '列',
        ui: {
          type: 'text',
          style: {
            width: '100%',
          },
        },
      },
    },
  ],
  default: {
    componentType: 'base',
    type: 'Table',
    dataSource: [
      `{"key":"1","name":"胡彦斌","age":32,"address":"西湖区湖底公园1号"}`,
      `{"key":"2","name":"胡彦祖","age":42,"address":"西湖区湖底公园1号"}`,
    ],
    columns: [
      `{"title":"住址","dataIndex":"address","key":"address"}`,
      `{"title":"姓名","dataIndex":"name","key":"name"}`,
      `{"title":"年龄","dataIndex":"age","key":"age"}`,
    ],
    layout: {},
  },
};
export default TableSchema;
