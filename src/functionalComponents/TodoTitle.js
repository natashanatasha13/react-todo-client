import React from "react";

const Title = (props) => {
  const { textContent } = props;
  return <h1 className="title">{textContent}</h1>;
};

export default Title;
