import { memo } from 'react';

const Text = memo(
  (props: any) => {
    const { $ } = props;
    const { align, text, fontSize, color, lineHeight, layout } = props.schema;
    console.log('textrerender');
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
  },
  (prev: any, curr: any) => {
    console.log('text', prev.schema === curr.schema)
    return prev.schema === curr.schema;
  },
);

export default Text;
