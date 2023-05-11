const InputSchema: any = {
  type: 'Switch',
  schema: [
    {
      fieldKey: 'disabled',
      title: '禁用',
      type: 'boolean',
      ui: {
        type: 'switch',
        theme: 'antd',
      },
    },
    {
      fieldKey: 'defaultChecked',
      title: '默认值',
      type: 'boolean',
      ui: {
        type: 'switch',
        theme: 'antd',
      },
    },
    {
      fieldKey: 'size',
      type: 'string',
      title: '尺寸',
      ui: {
        type: 'radio',
        theme: 'antd',
        buttonStyle: 'solid',
        options: [
          {
            label: '大',
            value: 'large',
          },
          {
            label: '中',
            value: 'middle',
          },
          {
            label: '小',
            value: 'small',
          },
        ],
      },
    },
  ],
  default: {
    componentType: 'base',
    type: 'Switch',
    layout: {},
    defaultChecked: false,
    disabled: false,
    size: 'middle',
  },
};
export default InputSchema;
