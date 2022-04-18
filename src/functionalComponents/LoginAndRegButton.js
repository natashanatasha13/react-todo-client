import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { className, link, text, linkFuncLogin, linkFuncEnter, func } = props;
  return (
    <div className={className} onClick={func}>
      <Link to={link} onMouseDown={linkFuncLogin} onMouseUp={linkFuncEnter}>
        {text}
      </Link>
    </div>
  );
};

export default Button;
