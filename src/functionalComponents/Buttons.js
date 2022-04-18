import React from "react";
const Button = (props) => {
  const {
    status,
    filterValue,
    setCurrentFilter,
    setCounter,
    textContent,
    className,
  } = props;

  const handleChangeFilter = () => {
    setCurrentFilter(status);
    setCounter(filterValue);
  };

  return (
    <div className={className} onClick={handleChangeFilter}>
      {textContent}
    </div>
  );
};

export default Button;
