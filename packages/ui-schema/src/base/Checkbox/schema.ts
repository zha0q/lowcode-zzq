const CheckboxSchema: any = {
    type: 'Checkbox',
    schema:
    [
      {
        fieldKey: 'autoFocus',
        title: '自动聚焦',
        type: 'boolean',
        ui: {
            type: 'switch',
            theme: 'antd'
          }
      },
      {
        fieldKey: 'checked',
        title: '选中',
        type: 'boolean',
        ui: {
            type: 'switch',
            theme: 'antd'
          }
      },
      {
        fieldKey: 'defaultChecked',
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
        autoFocus: false, checked: false, defaultChecked: false, disabled: false, label: 'Checkbox',
        componentType: 'base',
      type: 'Checkbox',
      layout: {},
    },
  }
  export default CheckboxSchema;
  