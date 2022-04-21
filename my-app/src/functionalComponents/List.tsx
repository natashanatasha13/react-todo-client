import React from "react";
import ListElement from "./ListElement";

interface listProps {
  filteredTodos: any[];
  changeStatus: any;
  deleteTodo: any;
  setCounter: (filterValue: any) => void;
}

const List = (props: listProps) => {
  const { filteredTodos, changeStatus, deleteTodo, setCounter } = props;

  return (
    <ul>
      {filteredTodos.map((element: any) => (
        <ListElement
          key={element.id}
          textContent={element.value}
          changeStatus={changeStatus}
          todoId={element.id}
          status={element.status}
          deleteTodo={deleteTodo}
          // setCounter={setCounter}
        />
      ))}
    </ul>
  );
};

export default List;
