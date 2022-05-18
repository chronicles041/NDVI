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
            <div className="flex flex-col px-6 py-5 bg-[#eaffb1] shadow-md rounded-lg gap-y-4 ">
              <button className=" bg-indigo-600 text-white text-sm font-medium rounded-full w-24 py-1">
                High
              </button>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
                New Plantation Monitoring
              </h5>
              <p className="font-normal text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex justify-end items-end gap-x-2">
                <ToIcon
                  type={IconTypes.Time}
                  size={IconSize.XSM}
                  style={""}
                ></ToIcon>
                <span className="text-lg text-secondary font-base">3hrs</span>
              </div>
              <div className=" flex flex-row relative mt-7">
                <div className="flex-1 items-start justify-start">
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    className="w-10 rounded-full ring-1 ring-secondary ring-offset-2  float-left "
                  />
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    className="w-10 rounded-full ring-1 ring-secondary ring-offset-2  float-left absolute left-6"
                  />
                  <img
                    src="https://source.unsplash.com/ILip77SbmOE/900x900"
                    className="w-10 rounded-full ring-1 ring-secondary ring-offset-2  float-left absolute left-12"
                  ></img>
                </div>
                <div className="flex-1 flex-row absolute right-0">
                  <button className="mr-4">
                    <ToIcon
                      type={IconTypes.Done}
                      size={IconSize.XSM}
                      style={""}
                    ></ToIcon>
                  </button>
                  <button className="">
                    <ToIcon
                      type={IconTypes.Edit}
                      size={IconSize.SM}
                      style={""}
                    ></ToIcon>
                  </button>
                </div>
              </div>
              <ToModal
                iconType={IconTypes.Activity}
                iconSize={IconSize.XSM}
                onOpen={() => null}
                title={"Task Detail"}
              >
                Hello
              </ToModal>
            </div>
          </DragItem>
        );
      }}
    </Draggable>
  );
};

export default ListItem;
