import React from 'react';

const Page = React.forwardRef((props: any, ref: React.Ref<HTMLDivElement>) => {
  const { layout } = props.schema;
  return (
    <div ref={ref} style={{ width: layout?.w, height: layout?.h, marginBottom: '100px' }}>
      {props.children}
    </div>
  );
});

export default Page;
