import { Carousel as AntdCarousel } from 'antd';
import React from 'react';

const Carousel = React.forwardRef((props: any, ref: React.Ref<any>) => {
  const { layout, autoplay, urls } = props.schema;
  const { $ } = props;

  const handleChange = (e: any) => {
    $.dispatchEvent(e, $.renderer, {});
  };
  return (
    <AntdCarousel
      ref={ref}
      style={layout}
      autoplay={autoplay}
      afterChange={handleChange}
    >
      {urls.map((url: string) => {
        return <div style={{ backgroundImage: `url(${url})` }}></div>;
      })}
    </AntdCarousel>
  );
});

export default Carousel;
