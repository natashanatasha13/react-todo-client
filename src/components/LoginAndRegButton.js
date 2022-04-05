import React from "react";
import { Link } from "react-router-dom";

class Button extends React.Component {
  render() {
    const { className, link, text, linkFuncLogin, linkFuncEnter, func } =
      this.props;
    return (
      <div className={className} onClick={func}>
        <Link to={link} onMouseDown={linkFuncLogin} onMouseUp={linkFuncEnter}>
          {text}
        </Link>
      </div>
    );
  }
}

export default Button;
