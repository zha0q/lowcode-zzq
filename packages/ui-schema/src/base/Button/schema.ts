const ButtonSchema: any = {
  type: 'Button',
  schema:
  [
    {
      fieldKey: 'block',
      title: '按钮宽度调为父级宽度',
      type: 'boolean',
      ui: {
        type: 'switch',
        theme: 'antd'
      }
    },
    {
      fieldKey: 'label',
      title: '按钮文案',
      type: 'string',
      ui: {
        type: 'text',
        theme: 'antd'
      }
    },
    {
      fieldKey: 'level',
      title: '按钮类型',
      type: 'string',
      ui: {
        type: 'radio',
        theme: 'antd',
        buttonStyle: 'solid',
        options: [
          {
            label: 'default',
            value: 'default',
          },
          {
            label: 'primary',
            value: 'primary',
          },
          {
            label: 'ghost',
            value: 'ghost',
          },
          {
            label: 'dashed',
            value: 'dashed',
          },
          {
            label: 'link',
            value: 'link',
          },
          {
            label: 'text',
            value: 'text',
          },
        ],
      },
    },
    {
      fieldKey: 'size',
      title: '按钮大小',
      type: 'string',
      ui: {
        type: 'radio',
        theme: 'antd',
        buttonStyle: 'solid',
        options: [
          {
            label: 'large',
            value: 'large',
          },
          {
            label: 'middle',
            value: 'middle',
          },
          {
            label: 'small',
            value: 'small',
          },
        ],
      },
    },
    {
      fieldKey: 'loading',
      title: '显示按钮 loading 效果',
      type: 'boolean',
      ui: {
        type: 'switch',
        theme: 'antd'
      }
    },
    {
      fieldKey: 'loadingOn',
      title: '显示按钮 loading 效果表达式',
      type: 'string',
      ui: {
        type: 'text',
        theme: 'antd'
      }
    },
  ],
  default: {
    componentType: 'base',
    type: 'Button',
    id: 'button_0c45',
    path: 'node_1234/node_22/button_0c45',
    label: '按钮',
    layout: {},
  },
}
export default ButtonSchema;
