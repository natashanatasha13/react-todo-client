import React from "react";
class ButtonClear extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const removeAllCompleted = () => {
      const removeCompleted = this.props.removeCompleted;
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
