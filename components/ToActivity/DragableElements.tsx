import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import React from "react";
import styled from "styled-components";

const ColumnHeader = styled.div`
  text-transform: uppercase;
  margin-bottom: 20px;
  padding: 10px;
  //   background:#007691;
  color: white;
`;

const DroppableStyles = styled.div`
  padding: 10px;
  margin-bottom:10px;
  border-radius: 6px;
  &:hover {
    //   background:#007691;
    background: RGBA(0,118,145,0.1);
  }
`;

const BodyStyles = styled.div`
  padding: 10px;
  border-radius: 6px;
  //   width: 200px;
  height: 650px;
  //    background: red;
  overflow: scroll;
`;

const DraggableElement = ({ prefix, elements }) => (
  <DroppableStyles>
    <ColumnHeader>
      <div className="flex-1 ">
        <button
          className={`text-center   font-bold tracking-tight text-gray-700 capitalize block w-full border-b-2 border-primary py-2 px-4  relative after:absolute  after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:scale-x-100  `}
        >
          {prefix}
          <span className=" bg-red-400 shadow-md text-white text-xs font-normal p-3 ml-3 items-center justify-center text-center rounded-full w-16 h-5 py-2">
            {elements.length}
          </span>
        </button>
      </div>
    </ColumnHeader>
    <BodyStyles>
      <Droppable droppableId={`${prefix}`}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {elements.map((item, index) => (
              <ListItem key={item.id} item={item} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </BodyStyles>
  </DroppableStyles>
);

export default DraggableElement;
