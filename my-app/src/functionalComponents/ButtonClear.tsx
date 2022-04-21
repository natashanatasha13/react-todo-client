import React from "react";

interface ButtonClearProps {
  textContent?: string;
  className?: string | any;
  id?: number | any;
  text?: string;
  removeCompleted?: any;
}

const ButtonClear = (props: ButtonClearProps) => {
  const { removeCompleted, textContent, className, id } = props;

  const handleRemoveAllCompleted = () => {
    removeCompleted();
  };

  return (
    <div className={className} id={id} onClick={handleRemoveAllCompleted}>
      {textContent}
    </div>
  );
};

export default ButtonClear;
