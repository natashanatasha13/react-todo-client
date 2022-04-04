import React from "react";

class Title extends React.Component {
  render() {
    const { className, text } = this.props;
    return <p className={className}>{text}</p>;
  }
}

export default Title;
