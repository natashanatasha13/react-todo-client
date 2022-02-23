import React from "react";
import { STATUSES } from "./Main";
class ButtonStatus extends React.Component {
  render() {
    const { todoId, status, changeStatus } = this.props;
    const change = () => {
      changeStatus(todoId, status ? STATUSES.done : STATUSES.active);
    };
    return (
      <span
        className={`to-change ${status ? `to-change` : `to-change-done`}`}
        todoId={todoId}
        status={status}
        onClick={change}
      ></span>
    );
  }
}

export default ButtonStatus;
