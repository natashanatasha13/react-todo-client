import React from "react";
import { Props } from "../store/types/typesProps";
const InputForLogAndReg = (props: Props) => {
  const { placeholder, className, func } = props;

  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      onKeyDown={func}
      onKeyUp={func}
    ></input>
  );
};

export default InputForLogAndReg;
