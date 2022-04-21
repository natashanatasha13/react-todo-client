import React from "react";

interface counterProps {
  className?: string;
  textContent?: string;
}

const Counter = (props: counterProps) => {
  const { textContent } = props;
  return <span className="items">{textContent} </span>;
};

export default Counter;
