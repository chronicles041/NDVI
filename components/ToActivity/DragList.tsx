import React, { useEffect } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "./DragableElements";
import { on } from "cluster";

const testActivities = [
  {
    id: 1,
    title: "Just a test Title Created by blinkrup",
    priority: 1,
    assigned_date: "2022-05-17",
    end_date: "2022-05-31",
    project: 1,
    task_assigned_to: [2126, 2165],
    farms: [3111, 3119],
    assigned_by: 1,
    type: 1,
    visits: 1,
    last_visit: "2022-05-12",
    status: 1,
    remarks: "Description added",
  },
  {
    id: 2,
    title: "Just a test Title Created by blinkrup",
    priority: 1,
    assigned_date: "2022-05-17",
    end_date: "2022-05-31",
    project: 1,
    task_assigned_to: [2126, 2165],
    farms: [3111, 3119],
    assigned_by: 1,
    type: 1,
    visits: 1,
    last_visit: "2022-05-12",
    status: 2,
    remarks: "Description added",
  },
  {
    id: 3,
    title: "Just a test Title Created by blinkrup",
    priority: 1,
    assigned_date: "2022-05-17",
    end_date: "2022-05-31",
    project: 1,
    task_assigned_to: [2126, 2165],
    farms: [3111, 3119],
    assigned_by: 1,
    type: 1,
    visits: 1,
    last_visit: "2022-05-12",
    status: 3,
    remarks: "Description added",
  },
];
const DragDropContextContainer = styled.div`
  padding: 20px;
  //   border: 4px solid indianred;
  border-radius: 6px;
`;

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
`;

// fake data generator
const getItems = (prefix) => {
  //  let tempArray =  Array.from({ length: count }, (v, k) => k).map((k) => {
  //     const randomId = Math.floor(Math.random() * 1000);

  //     return {
  //       id: `item-${randomId}`,
  //       prefix,
  //       content: `item ${randomId}`,
  //     };
  //   });

  let tempArray = testActivities.map((k) => {
    const randomId = Math.floor(Math.random() * 1000);
    return {
      id: `item-${k.id}`,
      prefix: k.status,
      content: `item ${k.id}`,
    };
  });
  console.log("***Data View", tempArray);
  return tempArray;
};

const removeFromList = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list, index, element) => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

// const lists = [
//   { status: 1, name: "todo" },
//   { status: 2, name: "inProgress" },
//   { status: 3, name: "done" },
// ];

const lists = ["todo", "inProgress", "done"];

const generateLists = () => {
  let todoList = testActivities
    .filter((l) => l.status === 1)
    .map((v) => {
      return {
        id: `item-${v.id}`,
        prefix: v.id,
        content: `item ${v.id}`,
      };
    });
  let onProcessList = testActivities
    .filter((l) => l.status === 2)
    .map((v) => {
      return {
        id: `item-${v.id}`,
        prefix: v.id,
        content: `item ${v.id}`,
      };
    });

  let completedList = testActivities
    .filter((l) => l.status === 3)
    .map((v) => {
      return {
        id: `item-${v.id}`,
        prefix: v.id,
        content: `item ${v.id}`,
      };
    });
  let tempList = {
    todo: todoList,
    inProgress: onProcessList,
    done: completedList,
  };

  console.log(
    "***List",
    // lists,
    // todoList,
    // onProcessList,
    // completedList,
    // lists.reduce(
    //   (acc, listKey) => ({ ...acc, [listKey.status]: getItems(listKey.name) }),
    //   {}
    // ),
    tempList
  );

  return tempList;
  //   return lists.reduce(
  //     (acc, listKey) => ({ ...acc, [listKey]: getItems(listKey) }),
  //     {}
  //   );
};

function DragList() {
  const [elements, setElements] = React.useState(generateLists());

  useEffect(() => {
    setElements(generateLists());
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...elements };

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setElements(listCopy);
  };

  return (
    <DragDropContextContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <ListGrid>
          {lists.map((listKey) => (
            <DraggableElement
              elements={elements[listKey]}
              key={listKey}
              prefix={listKey}
            />
          ))}
        </ListGrid>
      </DragDropContext>
    </DragDropContextContainer>
  );
}

export default DragList;