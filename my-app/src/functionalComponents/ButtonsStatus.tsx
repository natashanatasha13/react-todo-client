import React from "react";
import { STATUSES } from "./Main";

interface buttonStatusProps {
  todoId?: number;
  status?: string;
  changeStatus?: any;
}

const ButtonStatus = (props: buttonStatusProps) => {
  const { todoId, status, changeStatus } = props;

  const handleChange = () => {
    changeStatus(todoId, status ? STATUSES.done : STATUSES.active);
  };
  return (
    <span
      className={`to-change ${status ? `to-change` : `to-change-done`}`}
      //status={status}
      onClick={handleChange}
    ></span>
  );
};

export default ButtonStatus;
