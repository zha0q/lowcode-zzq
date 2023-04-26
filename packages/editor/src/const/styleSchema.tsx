export default {
  type: 'object',
  ui: {},
  theme: 'antd',
  schema: [
    {
      type: 'null',
      title: '布局',
      ui: {
        type: 'null',
        title: {
          fontSize: '16px',
        },
      },
      fieldKey: 'null1',
    },
    {
      type: 'string',
      title: '布局模式',
      ui: {
        type: 'radio',
        theme: 'antd',
        buttonStyle: 'solid',
        options: [
          {
            label: '内联',
            value: 'inline',
          },
          {
            label: '弹性',
            value: 'flex',
          },
          {
            label: '块级',
            value: 'block',
          },
          {
            label: '内联块',
            value: 'inline-block',
          },
          {
            label: '隐藏',
            value: 'none',
          },
        ],
      },
      fieldKey: 'display',
    },
    {
      type: 'string',
      title: '主轴方向',
      ui: {
        type: 'radio',
        theme: 'antd',
        buttonStyle: 'solid',
        options: [
          {
            label: '横轴正',
            value: 'row',
          },
          {
            label: '横轴负',
            value: 'row-reverse',
          },
          {
            label: '纵轴正',
            value: 'column',
          },
          {
            label: '纵轴负',
            value: 'column-reverse',
          },
        ],
        vcontrol: ({ formData }: any) => {
          return formData.display === 'flex';
        },
      },
      fieldKey: 'flex-direction',
    },
    {
      type: 'string',
      title: '主轴排列',
      ui: {
        type: 'radio',
        theme: 'antd',
        buttonStyle: 'solid',
        options: [
          {
            label: '左对齐',
            value: 'flex-start',
          },
          {
            label: '右对齐',
            value: 'flex-end',
          },
          {
            label: '居中',
            value: 'center',
          },
          {
            label: '两端对齐',
            value: 'space-between',
          },
          {
            label: '平分',
            value: 'space-around',
          },
        ],
        vcontrol: ({ formData }: any) => {
          return formData.display === 'flex';
        },
      },
      fieldKey: 'justify-content',
    },
    {
      type: 'string',
      title: '布局模式',
      ui: {
        type: 'radio',
        theme: 'antd',
        buttonStyle: 'solid',
        options: [
          {
            label: '左对齐',
            value: 'flex-start',
          },
          {
            label: '右对齐',
            value: 'flex-end',
          },
          {
            label: '居中',
            value: 'center',
          },
          {
            label: '两端对齐',
            value: 'baseline',
          },
          {
            label: '平分',
            value: 'stretch',
          },
        ],
        vcontrol: ({ formData }: any) => {
          return formData.display === 'flex';
        },
      },
      fieldKey: 'align-items',
    },
    {
      type: 'string',
      title: '布局模式',
      ui: {
        type: 'radio',
        theme: 'antd',
        buttonStyle: 'solid',
        options: [
          {
            label: '不换行',
            value: 'no-wrap',
          },
          {
            label: '正换行',
            value: 'wrap',
          },
          {
            label: '逆换行',
            value: 'warp-reverse',
          },
        ],
        vcontrol: ({ formData }: any) => {
          return formData.display === 'flex';
        },
      },
      fieldKey: 'flex-wrap',
    },

    {
      type: 'string',
      title: '内边距',
      ui: {
        type: 'position',
        theme: 'customTheme',
      },
      fieldKey: 'padding',
    },
    {
      type: 'string',
      title: '外边距',
      ui: {
        type: 'position',
        theme: 'customTheme',
      },
      fieldKey: 'margin',
    },
    {
      type: 'string',
      title: '宽度',
      ui: {
        type: 'text',
        containerStyle: {
          width: '40%',
        },
      },
      fieldKey: 'width',
    },
    {
      type: 'string',
      title: '高度',
      ui: {
        type: 'text',
        containerStyle: {
          width: '60%',
          marginLeft: '20%',
        },
      },
      fieldKey: 'height',
    },
  ],
};
