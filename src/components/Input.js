import React from "react";

class Input extends React.Component {
  renderLi = (event) => {
    if (event.key === "Enter") {
      this.props.addTodo(event);
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
        onKeyDown={this.renderLi}
      ></input>
    );
  }
}

export default Input;
