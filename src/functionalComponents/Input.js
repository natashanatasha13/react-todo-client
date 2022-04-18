import React from "react";

const Input = (props) => {
  const { addTodo, placeholder } = props;

  const handleRenderLi = (event) => {
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
      onKeyDown={handleRenderLi}
    ></input>
  );
};

export default Input;
