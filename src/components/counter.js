import React from "react";
class Counter extends React.Component {
  render() {
    const { textContent } = this.props;
    return <span className={"items"}>{textContent} </span>;
  }
}

export default Counter;
