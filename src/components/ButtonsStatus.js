import React from "react";
import { STATUSES } from "./Main";

class ButtonStatus extends React.Component {
  handleChange = () => {
    const { todoId, status, changeStatus } = this.props;
    changeStatus(todoId, status ? STATUSES.done : STATUSES.active);
  };
  render() {
    const { status } = this.props;
    return (
      <span
        className={`to-change ${status ? `to-change` : `to-change-done`}`}
        status={status}
        onClick={this.handleChange}
      ></span>
    );
  }
}

export default ButtonStatus;
