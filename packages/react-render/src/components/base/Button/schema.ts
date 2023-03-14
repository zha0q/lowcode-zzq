export interface IButtonType {
  editData: any;
  config: any;
}

const ButtonSchema: IButtonType = {
  editData: [
    {
      key: 'block',
      name: '按钮宽度调为父级宽度',
      type: 'Boolean',
    },
    {
      key: 'label',
      name: '按钮文案',
      type: 'String',
    },
    {
      key: 'level',
      name: '按钮类型',
      type: 'Select',
      range: ['primary', 'ghost', 'dashed', 'link', 'text', 'default'],
    },
    {
      key: 'size',
      name: '按钮大小',
      type: 'Select',
      range: ['large', 'middle', 'small'],
    },
    {
      key: 'loading',
      name: '显示按钮 loading 效果',
      type: 'Boolean',
    },
    {
      key: 'loadingOn',
      name: '显示按钮 loading 效果表达式',
      type: 'Expression',
    }
  ],
  config: {
    block: false,
    label: '发送 Ajax 请求',
    level: 'primary',
    size: 'middle',
    loading: true,
    loadingOn: '${loading}',
  },
};

export default ButtonSchema;
