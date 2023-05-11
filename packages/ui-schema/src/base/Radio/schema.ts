const InputSchema: any = {
    type: 'Radio',
    schema:
    [
        {
            fieldKey: 'checked',
            title: '是否选中',
            type: 'boolean',
            ui: {
                type: 'switch',
                theme: 'antd'
            }
        },
        {
            fieldKey: 'checked',
            title: '默认选中',
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
            fieldKey: 'label',
            title: '标签',
            type: 'string',
            ui: {
                type: 'text',
                theme: 'antd'
            }
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
  