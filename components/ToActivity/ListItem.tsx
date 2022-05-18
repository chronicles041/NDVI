import { Draggable } from "react-beautiful-dnd";
import React, { useMemo } from "react";
import styled, { css } from "styled-components";
import ToIcon, { IconSize, IconTypes } from "../ToIcons";
import ToModal from "../ToModal";

const DragItem = styled.div`
  //   padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  margin: 0 0 8px 0;
  display: grid;
  grid-gap: 20px;
  flex-direction: column;
`;

// const lorem = new LoremIpsum();

const ListItem = ({ item, index }) => {
  //   const randomHeader = useMemo(() => lorem.generateWords(5), []);
  const randomHeader = "Some Random Title";

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <DragItem
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="flex flex-col px-4 py-4 bg-[#eaffb1] shadow-sm rounded-lg gap-y-1 ">
              <button className=" bg-indigo-600 text-white text-xs font-normal flex flex-row items-center justify-center text-center rounded-full w-16 h-5 py-2">
                High
              </button>
              <h5 className="text-lg font-bold tracking-tight text-gray-900 ">
                New Plantation Monitoring
              </h5>
              <p className="text-normal font-normal text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex justify-end items-end gap-x-2">
                <ToIcon
                  type={IconTypes.Time}
                  size={IconSize.XXSM}
                  style={""}
                ></ToIcon>
                <span className="text-xs text-secondary font-normal">3hrs</span>
              </div>
              <div className=" flex relative flex-row mt-3 justify-center items-center">
                <div className="flex-1 relative  ">
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    className="w-8 rounded-full ring-1 ring-secondary ring-offset-2  float-left "
                  />
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    className="w-8 rounded-full ring-1 ring-secondary ring-offset-2  float-left absolute left-6"
                  />
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    className="w-8 rounded-full ring-1 ring-secondary ring-offset-2  float-left absolute left-12"
                  ></img>
                </div>
                <div className=" flex flex-row gap-x-3 items-center justify-center">
                  <button>
                    <ToIcon type={IconTypes.Done} size={IconSize.XSM} style={""} >
                    </ToIcon>
                  </button>
                  <ToModal
                    iconType={IconTypes.Edit}
                    iconSize={IconSize.XSM}
                    onOpen={() => null}
                    type={1}
                    title={"dasd"}
                  ></ToModal>
                </div>
              </div>
            </div>
          </DragItem>
        );
      }}
    </Draggable>
  );
};

export default ListItem;
