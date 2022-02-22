import React from "react";
class Button extends React.Component {
  render() {
    const { setCurrentFilter, setCounter } = this.props;
    const changeFilter = () => {
      setCurrentFilter(this.props.status);
      setCounter(this.props.filterValue);
    };
    return (
      <div className={this.props.className} onClick={changeFilter}>
        {this.props.textContent}{" "}
      </div>
    );
  }
}

export default Button;
