import React from "react";

interface ButtonDeleteProps {
  deleteTodo?: any;
  todoId?: number;
  className?: string;
  status?: string;
}
const ButtonDelete = (props: ButtonDeleteProps) => {
  const { deleteTodo, todoId, className, status } = props;

  const handleChange = () => {
    deleteTodo(todoId);
  };

  return (
    <span
      className={className}
      onClick={handleChange} /*status={status}*/
    ></span>
  );
};

export default ButtonDelete;
