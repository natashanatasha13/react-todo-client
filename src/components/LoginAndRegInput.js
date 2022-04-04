import React from "react";

class InputForLogAndReg extends React.Component {
  render() {
    const { placeholder, className, func } = this.props;

    return (
      <input
        type="text"
        className={className}
        placeholder={placeholder}
        onKeyDown={func}
        onKeyUp={func}
      ></input>
    );
  }
}

export default InputForLogAndReg;
