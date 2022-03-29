import React from "react";
class Button extends React.Component {
  changeFilter = () => {
    const { status, filterValue, setCurrentFilter, setCounter } = this.props;
    setCurrentFilter(status);
    setCounter(filterValue);
  };
  render() {
    const { textContent, className } = this.props;

    return (
      <div className={className} onClick={this.changeFilter}>
        {textContent}
      </div>
    );
  }
}

export default Button;
