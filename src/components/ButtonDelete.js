import React from "react";
class ButtonDelete extends React.Component {
  handleChange = () => {
    const { deleteTodo, todoId } = this.props;
    deleteTodo(todoId);
  };
  render() {
    const { className, status } = this.props;

    return (
      <span
        className={className}
        onClick={this.handleChange}
        status={status}
      ></span>
    );
  }
}

export default ButtonDelete;
