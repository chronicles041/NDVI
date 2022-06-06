import { Draggable } from "react-beautiful-dnd";
import React, { useMemo } from "react";
import styled, { css } from "styled-components";
import ToIcon, { IconSize, IconTypes } from "../ToIcons";
import ToModal from "../ToModal";
import DetailView from "../ToActivity/DeatilView";
import FieldVisitView from "../ToActivity/FieldVisit";

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
            <div className="flex flex-col px-4 py-4 bg-[#eaffb1d6] shadow-sm rounded-lg gap-y-1 ">
              <button className=" bg-red-600 shadow-md text-white text-xs font-normal flex flex-row items-center justify-center text-center rounded-full w-16 h-5 py-2">
                {item.priority_name}
              </button>
              <h5 className="text-lg font-bold tracking-tight text-gray-900 ">
                {item.title}
              </h5>
              <p className="text-normal font-normal text-gray-700">
                {item.remarks}
              </p>
              <div className="flex justify-end items-end gap-x-2">
                <ToIcon
                  type={IconTypes.Time}
                  size={IconSize.XXSM}
                  style={""}
                ></ToIcon>
                <span className="text-xs text-secondary font-normal">
                  {item.time_duration} Days
                </span>
              </div>
              <div className=" flex relative flex-row mt-3 justify-center items-center">
                <div className="flex-1 relative  ">
                  <img
                    src="https://cdn.vectorstock.com/i/1000x1000/91/23/man-avatar-icon-flat-vector-18149123.webp"
                    className="w-8 rounded-full ring-1 ring-secondary ring-offset-2  float-left "
                    data-toggle="tooltip"
                    title={`Assigned By ${item.assigned_by_username}`}
                  />
                  <img
                    src="https://cdn.vectorstock.com/i/1000x1000/23/96/man-avatar-icon-flat-vector-19152396.webp"
                    // src="https://cdn.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.webp"
                    className="w-8 rounded-full ring-1 ring-secondary ring-offset-2  float-left absolute left-6"
                    data-toggle="tooltip"
                    // title={item.task_assigned_to_username}
                    title={`Assigned To ${item.task_assigned_to_username}`}
                  />
                </div>
                <div className=" flex flex-row gap-x-3 items-center justify-center">
                  <button>
                    <ToIcon
                      type={
                        item.status === 4
                          ? IconTypes.Start
                          : item.status === 1
                          ? IconTypes.Process
                          : IconTypes.Done
                      }
                      size={IconSize.XSM}
                      style={""}
                    />
                  </button>
                  <DetailView detailData={item} />
                  <FieldVisitView detailData={item}/>

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
