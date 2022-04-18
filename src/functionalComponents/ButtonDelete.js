import React from "react";
const ButtonDelete = (props) => {
  const { deleteTodo, todoId, className, status } = props;

  const handleChange = () => {
    deleteTodo(todoId);
  };

  return (
    <span className={className} onClick={handleChange} status={status}></span>
  );
};

export default ButtonDelete;
