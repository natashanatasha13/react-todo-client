import React from "react";
const click = () => {
  console.log("click");
};
class Title extends React.Component {
  render() {
    const { textContent } = this.props;
    return (
      <h1 onClick={click} className="title">
        {textContent}
      </h1>
    );
  }
}

export default Title;
