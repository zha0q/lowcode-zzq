import { memo } from 'react';

const Text = (props: any) => {
  const { $ } = props;
  const { align, text, fontSize, color, lineHeight, layout } = props.schema;
  return (
    <div
      style={{
        position: 'absolute',
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
};

export default Text;
