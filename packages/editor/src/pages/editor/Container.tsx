import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default React.forwardRef((props: any, ref) => {
  const { Content } = props;

  return <Content ref={ref}>
      <Droppable droppableId="droppable1">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          // style={getListStyle(snapshot.isDraggingOver)}
          >
            {[{ content: '123', id: '1' }].map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  // style={getItemStyle(
                  //   snapshot.isDragging,
                  //   provided.draggableProps.style
                  // )}
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
  </Content>
})
