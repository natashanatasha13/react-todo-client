import React from "react";
import { connect } from "react-redux";
import InputForLogAndReg from "./LoginAndRegInput";
import Title from "./LoginAndRegTitle";
import { newLogin, newPassword, getTodos } from "../store/actions";
import Button from "./LoginAndRegButton";

class Login extends React.Component {
  handleUserLogin = (event) => {
    const { newLogin } = this.props;
    const loginValue = event.target.value;
    newLogin(loginValue);
  };
  handleUserPass = (event) => {
    const { newPassword } = this.props;
    const passValue = event.target.value;
    newPassword(passValue);
  };

  handleEnter = () => {
    const { id, getTodos, inputLoginValue, inputPasswordValue } = this.props;
    getTodos(id, inputLoginValue, inputPasswordValue);
  };

  render() {
    const { link } = this.props;
    return (
      <div className="registration">
        <Title
          className="login_title"
          text={
            " If it's your first time here you have to registrate down below"
          }
        />
        <InputForLogAndReg
          placeholder="Login"
          className="registrationInput"
          func={this.handleUserLogin}
        />
        <InputForLogAndReg
          placeholder="Password"
          className="registrationInput"
          func={this.handleUserPass}
        />
        <Button
          className="button_submit"
          link={link}
          linkFuncLogin={this.handleEnter}
          linkFuncEnter={this.handleEnter}
          text="Sign In"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.addUser.id,
  inputLoginValue: state.addUser.inputLoginValue,
  inputPasswordValue: state.addUser.inputPasswordValue,
  link: state.addUser.link,
});

const mapDispatchToProps = {
  newLogin: newLogin,
  newPassword: newPassword,
  getTodos: getTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
