import React from "react";
import ButtonDelete from "./ButtonDelete";
import ButtonStatus from "./ButtonsStatus";
import { STATUSES } from "./Main";
class ListElement extends React.Component {
  render() {
    const { todoid, status, textContent, deleteTodo, changeStatus } =
      this.props;

    return (
      <li className="list" todoid={todoid} status={status}>
        {textContent}
        <ButtonStatus
          changeStatus={changeStatus}
          className="to-change-done"
          todoid={todoid}
          status={status}
        />
        <ButtonDelete
          deleteTodo={deleteTodo}
          className="cross "
          todoid={todoid}
          status={status}
        />
      </li>
    );
  }
}

export default ListElement;
