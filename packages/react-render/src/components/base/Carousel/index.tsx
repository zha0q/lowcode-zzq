import { Carousel as AntdCarousel } from 'antd';
import React from 'react';

const Carousel = React.forwardRef((props: any, ref: React.Ref<any>) => {
  const { layout, autoplay, urls } = props.schema;
  const { $ } = props;

  const handleChange = (e: any) => {
    $.dispatchEvent(e, $.renderer, {});
  };
  return (
    <div ref={ref} style={layout}>
      <AntdCarousel
        style={layout}
        autoplay={autoplay}
        afterChange={handleChange}
      >
        {urls.map((url: string) => {
          return (
            <div>
              <div
                key={url}
                style={{
                  ...layout,
                  backgroundImage: `url(${url})`,
                }}
              ></div>
            </div>
          );
        })}
      </AntdCarousel>
    </div>
  );
});

export default Carousel;
