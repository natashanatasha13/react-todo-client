import React from "react";
import List from "./List";

class Input extends React.Component {
  renderLI = (e) => {
    if (e.key === "Enter") {
      const { addTodo } = this.props;
      addTodo(e);

      e.target.value = "";
    }
  };

  render() {
    return (
      <input
        type="text"
        className="new-todo"
        placeholder={this.props.placeholder}
        //onChange={this.textHandler}
        onKeyDown={this.renderLI}
      ></input>
    );
  }
}

export default Input;
