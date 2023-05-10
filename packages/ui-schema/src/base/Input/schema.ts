const InputSchema: any = {
    type: 'Input',
    schema:
    [
        {
            fieldKey: 'allowClear',
            title: '是否显示清空',
            type: 'boolean',
            ui: {
                type: 'switch',
                theme: 'antd'
            }
        },
        {
            fieldKey: 'bordered',
            title: '边框',
            type: 'boolean',
            ui: {
                type: 'switch',
                theme: 'antd'
            }
        },
        {
            fieldKey: 'disabled',
            title: '禁用',
            type: 'boolean',
            ui: {
                type: 'switch',
                theme: 'antd'
            }
        },
        {
            fieldKey: 'showCount',
            title: '显示字数',
            type: 'string',
            ui: {
                type: 'text',
                theme: 'antd'
            }
        },
        {
            fieldKey: 'defaultValue',
            title: '默认值',
            type: 'string',
            ui: {
                type: 'text',
                theme: 'antd'
            }
        },
        {
            fieldKey: 'maxLength',
            title: '限制字数',
            type: 'number',
            ui: {
                type: 'number',
                theme: 'antd'
            }
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
        type: 'Input',
        layout: {},
        allowClear: false,
        bordered: true,
        defaultValue: '',
        disabled: false,
        maxLength: 1000,
        showCount: false,
        size: 'middle',
    },
  }
  export default InputSchema;
  