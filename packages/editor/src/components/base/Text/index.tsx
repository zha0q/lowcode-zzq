import React, { memo } from 'react';

const Text = React.forwardRef(
  (props: any, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { $ } = props;
    const { align, text, fontSize, color, lineHeight, layout } = props.schema;
    return (
      <div
        ref={ref}
        style={{
          position: layout.position,
          height: layout.h,
          width: layout.w,
          top: layout.y,
          left: layout.x,
          color,
          textAlign: align,
          fontSize,
          lineHeight,
        }}
      >
        {$.parseTemplate(text)}
      </div>
    );
  },
);

export default Text;
