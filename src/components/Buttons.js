import React from "react";
class Button extends React.Component {
  handleChangeFilter = () => {
    const { status, filterValue, setCurrentFilter, setCounter } = this.props;
    setCurrentFilter(status);
    setCounter(filterValue);
  };
  render() {
    const { textContent, className } = this.props;

    return (
      <div className={className} onClick={this.handleChangeFilter}>
        {textContent}
      </div>
    );
  }
}

export default Button;
