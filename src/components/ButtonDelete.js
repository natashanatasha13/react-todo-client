import React from "react";
import { STATUSES } from "./Main";
class ButtonDelete extends React.Component {
  render() {
    const { className, status, todoid, deleteTodo } = this.props;

    const change = () => {
      deleteTodo(todoid);
    };
    return (
      <span
        className={className}
        onClick={change}
        todoid={todoid}
        status={status}
      ></span>
    );
  }
}

export default ButtonDelete;
