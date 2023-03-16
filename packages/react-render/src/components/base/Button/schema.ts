const ButtonSchema: any = {
  type: 'button',
  schema:
  [
    {
      fieldKey: 'block',
      title: '按钮宽度调为父级宽度',
      type: 'boolean',
    },
    {
      fieldKey: 'label',
      title: '按钮文案',
      type: 'string',
    },
    {
      fieldKey: 'type',
      title: '按钮类型',
      type: 'string',
      ui: {
        type: 'select',
        theme: 'antd',
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
        type: 'select',
        theme: 'antd',
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
    },
    {
      fieldKey: 'loadingOn',
      title: '显示按钮 loading 效果表达式',
      type: 'string',
    },
  ]
}
export default ButtonSchema;
