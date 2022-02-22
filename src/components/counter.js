import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <span className={"items"}>{this.props.textContent} </span>;
  }
}

export default Counter;
