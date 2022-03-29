import React from "react";

class Title extends React.Component {
  render() {
    const { textContent } = this.props;
    return <h1 className="title">{textContent}</h1>;
  }
}

export default Title;
