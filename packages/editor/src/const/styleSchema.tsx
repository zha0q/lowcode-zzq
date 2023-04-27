export default {
  type: 'object',
  ui: {},
  theme: 'antd',
  schema: [
    // 布局栏
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
        type: 'unitInput',
        theme: 'customTheme',
        _options: ['px', '%'],
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
        type: 'unitInput',
        theme: 'customTheme',
        _options: ['px', '%'],
        containerStyle: {
          width: '60%',
          marginLeft: '20%',
        },
      },
      fieldKey: 'height',
    },

    // 文字
    {
      type: 'null',
      title: '文字',
      ui: {
        type: 'null',
        title: {
          fontSize: '16px',
        },
      },
      fieldKey: 'null2',
    },

    {
      type: 'string',
      title: '字号',
      ui: {
        type: 'unitInput',
        theme: 'customTheme',
        _options: ['px'],
        containerStyle: {
          width: '40%',
        },
      },
      fieldKey: 'font-size',
    },
    {
      type: 'string',
      title: '行高',
      ui: {
        type: 'unitInput',
        theme: 'customTheme',
        _options: ['px'],
        containerStyle: {
          width: '60%',
          marginLeft: '20%',
        },
      },
      fieldKey: 'line-height',
    },

    {
      type: 'string',
      title: '字重',
      ui: {
        type: 'select',
        options: [
          {
            value: '100',
            label: '100 Thin',
          },
          {
            value: '200',
            label: '200 Extra Light',
          },
          {
            value: '300',
            label: '300 Light',
          },
          {
            value: '400',
            label: '400 Normal',
          },
          {
            value: '500',
            label: '500 Medium',
          },
          {
            value: '600',
            label: '600 Semi Bold',
          },
          {
            value: '700',
            label: '700 Bold',
          },
          {
            value: '800',
            label: '800 Extra Bold',
          },
          { value: '900', label: '900 Black' },
        ],
        style: {
          width: '100%',
        },
      },
      fieldKey: 'font-weight',
    },

    {
      type: 'string',
      title: '字体',
      ui: {
        type: 'select',
        options: [
          {
            value: 'Georgia, serif',
            label: 'Georgia, serif',
          },
          {
            value: '"Gill Sans", sans-seri',
            label: '"Gill Sans", sans-seri',
          },
          {
            value: 'sans-serif',
            label: 'sans-serif',
          },
        ],
        style: {
          width: '100%',
        },
      },
      fieldKey: 'font-family',
    },
    {
      type: 'string',
      title: '文字颜色',
      ui: {
        type: 'colorPicker',
        style: {
          width: '100%',
        },
      },
      fieldKey: 'color',
    },
    {
      type: 'string',
      title: '对齐',
      ui: {
        type: 'radio',
        theme: 'antd',
        buttonStyle: 'solid',
        options: [
          {
            label: '左对齐',
            value: 'left',
          },
          {
            label: '居中',
            value: 'center',
          },
          {
            label: '右对齐',
            value: 'right',
          },
          {
            label: '两端对齐',
            value: 'justify',
          },
        ],
      },
      fieldKey: 'text-align',
    },
    {
      type: 'number',
      title: '透明度',
      ui: {
        type: 'slider',
        min: 0,
        max: 1,
        step: 0.01,
      },
      fieldKey: 'opacity',
    },

    // 背景
    {
      type: 'null',
      title: '背景',
      ui: {
        type: 'null',
        title: {
          fontSize: '16px',
        },
      },
      fieldKey: 'null3',
    },
    {
      type: 'string',
      title: '背景颜色',
      ui: {
        type: 'colorPicker',
        style: {
          width: '100%',
        },
      },
      fieldKey: 'background-color',
    },

    {
      type: 'string',
      title: '背景图片',
      ui: {
        type: 'urlInput',
        theme: 'customTheme',
        style: {
          width: '100%',
        },
      },
      fieldKey: 'background-image',
    },
    {
      type: 'string',
      title: '尺寸',
      ui: {
        type: 'radio',
        theme: 'antd',
        buttonStyle: 'solid',
        options: [
          {
            label: '默认',
            value: 'auto',
          },
          {
            label: '等比填充',
            value: 'contain',
          },
          {
            label: '等比覆盖',
            value: 'cover',
          },
        ],
      },
      fieldKey: 'background-size',
    },
    {
      type: 'string',
      title: '重复',
      ui: {
        type: 'radio',
        theme: 'antd',
        buttonStyle: 'solid',
        options: [
          {
            label: '水平垂直重复',
            value: 'repeat',
          },
          {
            label: '水平重复',
            value: 'repeat-x',
          },
          {
            label: '垂直重复',
            value: 'repeat-y',
          },
          {
            label: '不重复',
            value: 'no-repeat',
          },
        ],
      },
      fieldKey: 'background-repeat',
    },
    {
      type: 'number',
      title: '透明度',
      ui: {
        type: 'slider',
        min: 0,
        max: 1,
        step: 0.01,
      },
      fieldKey: 'opacity',
    },

    // 位置
    {
      type: 'null',
      title: '位置',
      ui: {
        type: 'null',
        title: {
          fontSize: '16px',
        },
      },
      fieldKey: 'null4',
    },
    {
      type: 'string',
      title: '定位',
      ui: {
        type: 'radio',
        theme: 'antd',
        buttonStyle: 'solid',
        options: [
          {
            label: 'static',
            value: 'static',
          },
          {
            label: 'relative',
            value: 'relative',
          },
          {
            label: 'absolute',
            value: 'absolute',
          },
          {
            label: 'fixed',
            value: 'fixed',
          },
          {
            label: 'sticky',
            value: 'sticky',
          },
        ],
      },
      fieldKey: 'position',
    },
    {
      type: 'string',
      title: 'top',
      ui: {
        type: 'unitInput',
        theme: 'customTheme',
        _options: ['px', '%'],
        containerStyle: {
          width: '40%',
        },
        vcontrol: ({ formData }: any) => {
          return formData.position && formData.position !== 'static';
        },
      },
      fieldKey: 'top',
    },
    {
      type: 'string',
      title: 'left',
      ui: {
        type: 'unitInput',
        theme: 'customTheme',
        _options: ['px', '%'],
        containerStyle: {
          width: '60%',
          marginLeft: '20%',
        },
        vcontrol: ({ formData }: any) => {
          return formData.position && formData.position !== 'static';
        },
      },
      fieldKey: 'left',
    },
    {
      type: 'string',
      title: 'bottom',
      ui: {
        type: 'unitInput',
        theme: 'customTheme',
        _options: ['px', '%'],
        containerStyle: {
          width: '40%',
        },
        vcontrol: ({ formData }: any) => {
          return formData.position && formData.position !== 'static';
        },
      },
      fieldKey: 'bottom',
    },
    {
      type: 'string',
      title: 'right',
      ui: {
        type: 'unitInput',
        theme: 'customTheme',
        _options: ['px', '%'],
        containerStyle: {
          width: '60%',
          marginLeft: '20%',
        },
        vcontrol: ({ formData }: any) => {
          return formData.position && formData.position !== 'static';
        },
      },
      fieldKey: 'right',
    },
    {
      type: 'number',
      title: 'zIndex',
      ui: {
        type: 'number',
        style: {
          width: '100%',
        },
        vcontrol: ({ formData }: any) => {
          return formData.position && formData.position !== 'static';
        },
      },
      fieldKey: 'z-index',
    },
    {
      type: 'string',
      title: '浮动',
      ui: {
        type: 'radio',
        theme: 'antd',
        buttonStyle: 'solid',
        options: [
          {
            label: '不浮动',
            value: 'none',
          },
          {
            label: '左浮动',
            value: 'left',
          },
          {
            label: '右浮动',
            value: 'right',
          },
        ],
      },
      fieldKey: 'float',
    },
    {
      type: 'string',
      title: '清除浮动',
      ui: {
        type: 'radio',
        theme: 'antd',
        buttonStyle: 'solid',
        options: [
          {
            label: '不清除',
            value: 'none',
          },
          {
            label: '左清除',
            value: 'left',
          },
          {
            label: '右清除',
            value: 'right',
          },
          {
            label: '两边清除',
            value: 'both',
          },
        ],
      },
      fieldKey: 'clear',
    },

    // 背景
    {
      type: 'null',
      title: '边框',
      ui: {
        type: 'null',
        title: {
          fontSize: '16px',
        },
      },
      fieldKey: 'null5',
    },
    {
      type: 'string',
      title: '圆角',
      ui: {
        type: 'unitInput',
        theme: 'customTheme',
        _options: ['px'],
        containerStyle: {
          width: '100%',
        },
      },
      fieldKey: 'border-radius',
    },
    {
      type: 'string',
      title: '边框',
      ui: {
        type: 'position',
        theme: 'customTheme',
      },
      fieldKey: 'border-width',
    },
    {
      type: 'string',
      title: '边框颜色',
      ui: {
        type: 'colorPicker',
        style: {
          width: '100%',
        },
      },
      fieldKey: 'border-color',
    },
  ],
};
