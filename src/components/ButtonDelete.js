import React from "react";
import { STATUSES } from "./Main";
class ButtonDelete extends React.Component {
  constructor(props) {
    super(props);
  }

  change = () => {
    const { deleteTodo } = this.props;
    deleteTodo(this.props.todoid);
  };
  render() {
    return (
      <span
        className={this.props.className}
        onClick={this.change}
        todoid={this.props.todoid}
        status={this.props.status}
      ></span>
    );
  }
}

export default ButtonDelete;
