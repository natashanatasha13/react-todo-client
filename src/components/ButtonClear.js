import React from "react";
class ButtonClear extends React.Component {
  render() {
    const { removeCompleted } = this.props;
    const removeAllCompleted = () => {
      removeCompleted();
    };
    return (
      <div
        className={this.props.className}
        id={this.props.id}
        onClick={removeAllCompleted}
      >
        {this.props.textContent}{" "}
      </div>
    );
  }
}

export default ButtonClear;
