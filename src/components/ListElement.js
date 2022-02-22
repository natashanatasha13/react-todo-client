import React from "react";
import ButtonDelete from "./ButtonDelete";
import ButtonStatus from "./ButtonsStatus";
import { STATUSES } from "./Main";
class ListElement extends React.Component {
  render() {
    const changeStatus = this.props.changeStatus;
    const deleteTodo = this.props.deleteTodo;

    return (
      <li
        className="list"
        todoid={this.props.todoid}
        status={this.props.status}
      >
        {this.props.textContent}
        <ButtonStatus
          changeStatus={changeStatus}
          className="to_change_done"
          todoid={this.props.todoid}
          status={this.props.status}
        />
        <ButtonDelete
          deleteTodo={deleteTodo}
          className="cross "
          todoid={this.props.todoid}
          status={this.props.status}
        />
      </li>
    );
  }
}

export default ListElement;
