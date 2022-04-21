import React from "react";
import ButtonDelete from "./ButtonDelete";
import ButtonStatus from "./ButtonsStatus";

interface listElementProps {
  todoId: number;
  status: string;
  textContent: string;
  deleteTodo: () => void;
  changeStatus: () => void;
}

const ListElement = (props: listElementProps) => {
  const { todoId, status, textContent, deleteTodo, changeStatus } = props;

  return (
    <li className="list">
      {textContent}
      <ButtonStatus
        changeStatus={changeStatus}
        todoId={todoId}
        status={status}
      />
      <ButtonDelete
        deleteTodo={deleteTodo}
        className="cross "
        todoId={todoId}
        status={status}
      />
    </li>
  );
};

export default ListElement;
