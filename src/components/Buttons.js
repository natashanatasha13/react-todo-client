import React from "react";
class Button extends React.Component {
  render() {
    const {
      textContent,
      status,
      filterValue,
      className,
      setCurrentFilter,
      setCounter,
    } = this.props;
    const changeFilter = () => {
      setCurrentFilter(status);
      setCounter(filterValue);
    };
    return (
      <div className={className} onClick={changeFilter}>
        {textContent}
      </div>
    );
  }
}

export default Button;
