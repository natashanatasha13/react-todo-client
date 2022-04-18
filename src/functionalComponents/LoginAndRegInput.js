import React from "react";

const InputForLogAndReg = (props) => {
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
