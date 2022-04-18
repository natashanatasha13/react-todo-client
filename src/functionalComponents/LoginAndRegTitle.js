import React from "react";

const Title = (props) => {
  const { className, text } = props;
  return <p className={className}>{text}</p>;
};

export default Title;
