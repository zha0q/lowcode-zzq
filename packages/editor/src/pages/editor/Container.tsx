import { useDrop } from 'react-dnd';
// import { ItemTypes } from './ItemTypes';

const style = {
  width: '100%'
};
const Container = (props: any) => {
  const { Content } = props;
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // accept: ItemTypes.BOX,
    accept: 'BOX',
    drop: () => ({ name: 'Dustbin' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  let backgroundColor = '#222';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }
  return (
    <div ref={drop} role={'Dustbin'} style={{ ...style, backgroundColor }}>
      {isActive ? 'Release to drop' : 'Drag a box here'}
      {/* {Content} */}
    </div>
  );
};

export default Container;
