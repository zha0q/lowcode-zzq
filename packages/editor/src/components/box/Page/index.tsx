import React from 'react';

const Page = React.forwardRef((props: any, ref: React.Ref<HTMLDivElement>) => {
  return (
    <div ref={ref} style={{ height: '100%', width: '100%' }}>
      {props.children}
    </div>
  );
});

export default Page;
