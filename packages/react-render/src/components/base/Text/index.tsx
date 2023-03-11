import { parseString } from "@/renderer/utils";

export default function (props: any) {
  const { id, route, layout, content, ctx } = props;
  return <div style={{
    position: 'absolute',
    height: layout.h,
    width: layout.w,
    top: layout.y,
    left: layout.x
  }}>{parseString(content, ctx.getValue(route))}</div>
}
