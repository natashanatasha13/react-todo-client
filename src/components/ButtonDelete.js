import React from "react";
import { STATUSES } from "./Main";
class ButtonDelete extends React.Component {
  render() {
    const { className, status, todoId, deleteTodo } = this.props;
    const change = () => {
      deleteTodo(todoId);
    };
    return (
      <span
        className={className}
        onClick={change}
        todoId={todoId}
        status={status}
      ></span>
    );
  }
}

export default ButtonDelete;
