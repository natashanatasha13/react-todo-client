import React from "react";

interface inputProps {
  addTodo: (event: any) => void;
  placeholder: string;
}
const Input = (props: inputProps) => {
  const { addTodo, placeholder } = props;

  const handleRenderLi = (event: any) => {
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
