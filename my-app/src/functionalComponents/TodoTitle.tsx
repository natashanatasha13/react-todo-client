import React from "react";
interface titleProps {
  className?: string;
  textContent?: string;
}

const Title = (props: titleProps) => {
  const { textContent } = props;
  return <h1 className="title">{textContent}</h1>;
};

export default Title;
