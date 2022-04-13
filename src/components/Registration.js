import React from "react";
import { connect } from "react-redux";
import Button from "./LoginAndRegButton";
import Title from "./LoginAndRegTitle";
import InputForLogAndReg from "./LoginAndRegInput";
import { registrateUser, newLogin, newPassword } from "../store/actions";

class Registration extends React.Component {
  handleRegistrate = () => {
    const { registrateUser, inputLoginValue, inputPasswordValue } = this.props;
    registrateUser(inputLoginValue, inputPasswordValue);
  };
  handleNewUser = (event) => {
    const { newLogin } = this.props;
    const loginValue = event.target.value;
    newLogin(loginValue);
  };
  handleNewUserPass = (event) => {
    const { newPassword } = this.props;
    const passValue = event.target.value;
    newPassword(passValue);
  };
  render() {
    return (
      <div className="registration">
        <Title className="login_title" text="Registrate" />

        <InputForLogAndReg
          placeholder="Create youre login"
          className="registrationInput"
          func={this.handleNewUser}
        />

        <InputForLogAndReg
          placeholder="Create youre password"
          className="registrationInput"
          func={this.handleNewUserPass}
        />
        <Button
          className="button_submit"
          func={this.handleRegistrate}
          link={"#"}
          text="Submit"
        />
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
  newPassword: newPassword,
  newLogin: newLogin,
};
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
