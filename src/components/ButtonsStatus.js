import React from "react";
import { STATUSES } from "./Main";

class ButtonStatus extends React.Component {
  change = async () => {
    const { todoId, status, changeStatus } = this.props;
    await changeStatus(todoId, status ? STATUSES.done : STATUSES.active);
  };
  render() {
    const { status } = this.props;
    return (
      <span
        className={`to-change ${
          this.props.status ? `to-change` : `to-change-done`
        }`}
        status={status}
        onClick={this.change}
      ></span>
    );
  }
}

export default ButtonStatus;
