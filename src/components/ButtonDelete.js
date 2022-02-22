import React from "react";
import { STATUSES } from "./Main";
class ButtonDelete extends React.Component {
  render() {
    const { deleteTodo } = this.props;
    const change = () => {
      deleteTodo(this.props.todoId);
    };
    return (
      <span
        className={this.props.className}
        onClick={change}
        todoId={this.props.todoId}
        status={this.props.status}
      ></span>
    );
  }
}

export default ButtonDelete;
