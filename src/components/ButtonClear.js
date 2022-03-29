import React from "react";
class ButtonClear extends React.Component {
  removeAllCompleted = () => {
    const { removeCompleted } = this.props;
    removeCompleted();
  };
  render() {
    const { textContent, className, id } = this.props;

    return (
      <div className={className} id={id} onClick={this.removeAllCompleted}>
        {textContent}
      </div>
    );
  }
}

export default ButtonClear;
