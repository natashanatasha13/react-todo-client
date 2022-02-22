import React from "react";
const click = () => {
  console.log("click");
};
class Title extends React.Component {
  render() {
    return (
      <h1 onClick={click} className="title">
        {this.props.textContent}{" "}
      </h1>
    );
  }
}

export default Title;
