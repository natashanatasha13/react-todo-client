import React from "react";
import List from "./List";

class Input extends React.Component {
  render() {
    const { addTodo, placeholder } = this.props;

    const renderLI = (event) => {
      if (event.key === "Enter") {
        addTodo(event);

        event.target.value = "";
      }
    };

    return (
      <input
        type="text"
        className="new-todo"
        placeholder={placeholder}
        onKeyDown={renderLI}
      ></input>
    );
  }
}

export default Input;
