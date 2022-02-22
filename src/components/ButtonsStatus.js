import React from "react";
import { STATUSES } from "./Main";
class ButtonStatus extends React.Component {
  render() {
    const { changeStatus } = this.props;
    const change = () => {
      changeStatus(
        this.props.todoId,
        this.props.status ? STATUSES.done : STATUSES.active
      );
    };
    return (
      <span
        className={`to-change ${
          this.props.status ? `to-change` : `to-change-done`
        }`}
        todoId={this.props.todoId}
        status={this.props.status}
        onClick={change}
      ></span>
    );
  }
}

export default ButtonStatus;
