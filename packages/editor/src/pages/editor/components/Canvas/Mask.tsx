import { useEffect, useRef } from 'react';
import { IAxis } from '.';
import styles from './Mask.less';

// 传入当前鼠标xy坐标 拖拽物料rect 以及容器rect、当前容器类型（）

// 物料初始化时将自己的ref、id、父组件id、是否为容器组件传到全局ctx
// 开始拖拽时 将画布中全部物料计算位置
// 正常盒模型/flex布局情况下 要放置位置要考虑到容器类型/加起来是否会换行？换行提示线要换轴

// 定位的元素 只可以被作为容器元素计算
// 先计算容器 再计算子元素插入

// 传入值只有 容器rect 以及 要被插在后面的元素 以及 xy轴

type IMaskDrawInfo = {
  childNodeRect: any;
  axis: IAxis;
};

const Mask = ({ info, hover }: { info: IMaskDrawInfo; hover: boolean }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasCtx = useRef<CanvasRenderingContext2D>();

  const paint = () => {
    if(!info) return;
    const { childNodeRect, axis } = info;

    let strokeRect: [number, number, number, number] = [0, 0, 0, 0];

    // 根据轴 分别绘制
    switch (axis) {
      case 'x':
        strokeRect = [
          childNodeRect.x + childNodeRect.width,
          childNodeRect.y + 4,
          3,
          childNodeRect.height,
        ];
        break;
      case 'y':
        strokeRect = [
          childNodeRect.x,
          childNodeRect.y + childNodeRect.height,
          childNodeRect.width,
          3,
        ];
        break;
      default:
    }

    // 清除
    (canvasCtx.current as CanvasRenderingContext2D).clearRect(
      0,
      0,
      canvasRef?.current?.width || 0,
      canvasRef?.current?.height || 0,
    );
    // 绘制
    if (hover) {
      (canvasCtx.current as CanvasRenderingContext2D).fillStyle = '#006DFE';
      canvasCtx?.current?.fillRect(...strokeRect);
    }
  };

  const repaint = () => paint();

  useEffect(() => {
    // 设置canvasContext
    canvasCtx.current = (canvasRef.current as any).getContext('2d');

    const wrapperRect = (
      wrapperRef.current as HTMLDivElement
    ).getBoundingClientRect();
    (canvasRef.current as HTMLCanvasElement).height = wrapperRect.height;
    (canvasRef.current as HTMLCanvasElement).width = wrapperRect.width;

    paint();
  }, []);

  // CanvasRenderingContext2D.clearRect()
  // CanvasRenderingContext2D.strokeRect()
  useEffect(() => {
    repaint();
  }, [info, hover]);

  return (
    <div ref={wrapperRef} className={styles.Mask}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Mask;
