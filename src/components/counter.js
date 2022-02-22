import React from "react";
class Counter extends React.Component {
  render() {
    return <span className={"items"}>{this.props.textContent} </span>;
  }
}

export default Counter;
