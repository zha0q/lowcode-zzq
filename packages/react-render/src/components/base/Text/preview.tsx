
const Text = (props: any) => {
  const { align, text, fontSize, color, lineHeight, layout } = props;
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
      {text}
    </div>
  );
};

export default Text;
