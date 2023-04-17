const TextSchema: any = {
  type: 'text',
  schema: [
    {
      fieldKey: 'text',
      title: '文字',
      type: 'string',
    },
    {
      fieldKey: 'color',
      title: '颜色',
      type: 'color',
    },
    {
      fieldKey: 'fontSize',
      title: '字体大小',
      type: 'number',
    },
    {
      fieldKey: 'align',
      title: '对齐方式',
      type: 'string',
      ui: {
        type: 'select',
        theme: 'antd',
        options: [
          {
            label: '左对齐',
            value: 'left',
          },
          {
            label: '居中对齐',
            value: 'center',
          },
          {
            label: '右对齐',
            value: 'right',
          },
        ],
      },
    },
    {
      fieldKey: 'lineHeight',
      title: '行高',
      type: 'number',
    },
  ],
};

export default TextSchema;
