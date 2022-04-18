import React from "react";
const Counter = (props) => {
  const { textContent } = props;
  return <span className="items">{textContent} </span>;
};

export default Counter;
