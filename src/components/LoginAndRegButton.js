import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registrateUser } from "../store/actions";

class Button extends React.Component {
  registrate = () => {
    const { registrateUser, inputLoginValue, inputPasswordValue } = this.props;
    registrateUser(inputLoginValue, inputPasswordValue);
  };
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

const mapStateToProps = (state) => ({
  inputLoginValue: state.addUser.inputLoginValue,
  inputPasswordValue: state.addUser.inputPasswordValue,
});
const mapDispatchToProps = {
  registrateUser: registrateUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Button);
