import React from "react";
class ButtonDelete extends React.Component {
  change = () => {
    const { deleteTodo, todoId } = this.props;
    deleteTodo(todoId);
  };
  render() {
    const { className, status } = this.props;

    return (
      <span className={className} onClick={this.change} status={status}></span>
    );
  }
}

export default ButtonDelete;
