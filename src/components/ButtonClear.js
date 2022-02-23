import React from "react";
class ButtonClear extends React.Component {
  render() {
    const { textContent, className, id, removeCompleted } = this.props;
    const removeAllCompleted = () => {
      removeCompleted();
    };
    return (
      <div className={className} id={id} onClick={removeAllCompleted}>
        {textContent}
      </div>
    );
  }
}

export default ButtonClear;
