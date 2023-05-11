const CalendarSchema: any = {
    type: 'Calendar',
    schema:
    [
      {
        fieldKey: 'fullscreen',
        title: '放大',
        type: 'boolean',
        ui: {
            type: 'switch',
            theme: 'antd'
          }
      },
    ],
    default: {
      fullscreen: false,
      componentType: 'base',
      type: 'Calendar',
      layout: {}
    },
  }
  export default CalendarSchema;
  