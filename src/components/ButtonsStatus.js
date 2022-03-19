import React from "react";
import { STATUSES } from "./Main";
import { connect } from "react-redux";
import { changeCounterPlus } from "../store/actions";

class ButtonStatus extends React.Component {
  render() {
    const { todoid, status, changeStatus } = this.props;

    const change = async () => {
      await changeStatus(todoid, status ? STATUSES.done : STATUSES.active);
    };

    return (
      <span
        className={`to-change ${status ? `to-change` : `to-change-done`}`}
        todoid={todoid}
        status={status}
        onClick={change}
      ></span>
    );
  }
}

export default ButtonStatus;
