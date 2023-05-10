const DatePickerSchema: any = {
    type: 'DatePicker',
    schema:
    [
      {
        fieldKey: 'picker',
        title: '选择类型',
        type: 'string',
        ui: {
            type: 'radio',
            theme: 'antd',
            buttonStyle: 'solid',
            options: [
              {
                label: '日',
                value: 'date',
              },
              {
                label: '周',
                value: 'week',
              },
              {
                label: '月',
                value: 'month',
              },
              {
                label: '季',
                value: 'quarter',
              },
              {
                label: '年',
                value: 'year',
              },
            ],
          },
      },
    ],
    default: {
      componentType: 'base',
      type: 'DatePicker',
      layout: {},
      fullscreen: false,
    },
  }
  export default DatePickerSchema;
  