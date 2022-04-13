import React from "react";

class Input extends React.Component {
  value = this.value;
  handleRenderLi = (event) => {
    const { addTodo } = this.props;
    if (event.key === "Enter") {
      addTodo(event);
      event.target.value = "";
    }
  };
  render() {
    const { placeholder } = this.props;

    return (
      <input
        type="text"
        className="new-todo"
        placeholder={placeholder}
        onKeyDown={this.handleRenderLi}
      ></input>
    );
  }
}

export default Input;
