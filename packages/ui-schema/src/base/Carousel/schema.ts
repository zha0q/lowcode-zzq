const CarouselSchema: any = {
    type: 'Carousel',
    schema:
    [
      {
        fieldKey: 'autoplay',
        title: '自动播放',
        type: 'boolean',
        ui: {
            type: 'switch',
            theme: 'antd'
          }
      },
      {
        fieldKey: 'urls',
        title: '轮播图地址',
        type: 'array',
        items: {
            type: 'string',
            ui: {
                type: 'text',
                theme: 'antd'
              }
        },
      },
    ],
    default: {
      autoplay: true,
      urls: [],
      componentType: 'base',
      type: 'Carousel',
      layout: {}
    },
  }
  export default CarouselSchema;
  