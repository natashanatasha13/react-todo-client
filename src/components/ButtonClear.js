import React from "react";
class ButtonClear extends React.Component {
  handleRemoveAllCompleted = () => {
    const { removeCompleted } = this.props;
    removeCompleted();
  };
  render() {
    const { textContent, className, id } = this.props;

    return (
      <div
        className={className}
        id={id}
        onClick={this.handleRemoveAllCompleted}
      >
        {textContent}
      </div>
    );
  }
}

export default ButtonClear;
