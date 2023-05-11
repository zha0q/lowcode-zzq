const CarouselSchema: any = {
  type: 'Carousel',
  schema: [
    {
      fieldKey: 'autoplay',
      title: '自动播放',
      type: 'boolean',
      ui: {
        type: 'switch',
        theme: 'antd',
      },
    },
    {
      fieldKey: 'urls',
      title: '轮播图地址',
      type: 'array',
      ui: {
        type: 'array',
        theme: 'antd',
      },
      items: {
        type: 'string',
        title: 'url',
        ui: {
          type: 'text',
          style: {
            width: '100%',
          },
        },
      },
    },
  ],
  default: {
    autoplay: true,
    urls: [
      'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_conf2023/img/kv.deaeefb.png',
    ],
    componentType: 'base',
    type: 'Carousel',
    layout: {},
  },
};
export default CarouselSchema;
