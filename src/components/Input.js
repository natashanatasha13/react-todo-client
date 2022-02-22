import React from "react";
import List from "./List";

class Input extends React.Component {
  renderLI = (event) => {
    if (event.key === "Enter") {
      const { addTodo } = this.props;
      addTodo(event);

      event.target.value = "";
    }
  };

  render() {
    return (
      <input
        type="text"
        className="new-todo"
        placeholder={this.props.placeholder}
        onKeyDown={this.renderLI}
      ></input>
    );
  }
}

export default Input;
