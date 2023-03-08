export default function (props: any) {
  const {content, key} = props;
  console.log(content);
  return <div key={content} data-grid={{x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4}}>{content}</div>
}
