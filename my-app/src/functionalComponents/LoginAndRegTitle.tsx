import React from "react";

const Title = (props: any) => {
  const { className, text } = props;
  return <p className={className}>{text}</p>;
};

export default Title;
