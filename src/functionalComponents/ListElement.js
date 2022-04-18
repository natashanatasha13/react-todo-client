import React from "react";
import ButtonDelete from "./ButtonDelete";
import ButtonStatus from "./ButtonsStatus";

const ListElement = (props) => {
  const { todoId, status, textContent, deleteTodo, changeStatus } = props;

  return (
    <li className="list" status={status}>
      {textContent}
      <ButtonStatus
        changeStatus={changeStatus}
        className="to-change-done"
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
