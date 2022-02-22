import React from "react";
import { STATUSES } from "./Main";
class ButtonStatus extends React.Component {
  constructor(props) {
    super(props);
  }

  change = () => {
    const { changeStatus } = this.props;
    changeStatus(
      this.props.todoid,
      this.props.status ? STATUSES.done : STATUSES.active
    );
  };
  render() {
    return (
      <span
        className={`to_change ${
          this.props.status ? `to_change_active` : `to_change_done`
        }`}
        todoid={this.props.todoid}
        status={this.props.status}
        onClick={this.change}
      ></span>
    );
  }
}

export default ButtonStatus;
