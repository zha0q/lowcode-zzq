export interface ITextType {
  text: string;
  color: string;
  fontSize: number;
  align: string;
  lineHeight: string;
}

export interface ITextSchema {
  editData: any;
  config: any;
}

const TextSchema: ITextSchema = {
  editData: [
    {
      key: 'text',
      name: '文字',
      type: 'Expression',
    },
    {
      key: 'color',
      name: '标题颜色',
      type: 'Color',
    },
    {
      key: 'fontSize',
      name: '字体大小',
      type: 'Number',
    },
    {
      key: 'align',
      name: '对齐方式',
      type: 'Select',
      range: [
        {
          key: 'left',
          text: '左对齐',
        },
        {
          key: 'center',
          text: '居中对齐',
        },
        {
          key: 'right',
          text: '右对齐',
        },
      ],
    },
    {
      key: 'lineHeight',
      name: '行高',
      type: 'Number',
    },
  ],
  config: {
    text: '文本',
    color: 'rgba(255,255,255,1)',
    fontSize: 14,
    align: 'center',
    lineHeight: 2,
  },
};


export default TextSchema;
