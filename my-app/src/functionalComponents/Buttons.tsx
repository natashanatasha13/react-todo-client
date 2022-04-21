import React from "react";

interface ButtonProps {
  status?: any;
  filterValue?: number;
  setCurrentFilter?: any;
  setCounter: (filterValue: any) => void;
  textContent?: string;
  className?: string;
}

const Button = (props: ButtonProps) => {
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
