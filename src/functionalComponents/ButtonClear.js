import React from "react";
const ButtonClear = (props) => {
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
