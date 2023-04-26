import React from 'react';

const Text = React.forwardRef(
  (props: any, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { $ } = props;
    const { text, layout } = props.schema;

    return (
      <div ref={ref} style={layout}>
        {$.parseTemplate(text)}
      </div>
    );
  },
);

export default Text;
