import React from "react";
import ButtonDelete from "./ButtonDelete";
import ButtonStatus from "./ButtonsStatus";
import { STATUSES } from "./Main";
class ListElement extends React.Component {
  render() {
    const { deleteTodo, changeStatus } = this.props;

    return (
      <li
        className="list"
        todoId={this.props.todoId}
        status={this.props.status}
      >
        {this.props.textContent}
        <ButtonStatus
          changeStatus={changeStatus}
          className="to-change-done"
          todoId={this.props.todoId}
          status={this.props.status}
        />
        <ButtonDelete
          deleteTodo={deleteTodo}
          className="cross "
          todoId={this.props.todoId}
          status={this.props.status}
        />
      </li>
    );
  }
}

export default ListElement;
