import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "./LoginAndRegButton";
import Title from "./LoginAndRegTitle";
import InputForLogAndReg from "./LoginAndRegInput";
import { registrateUser, newLogin, newPassword } from "../store/actions";

const Registration = (props) => {
  const dispatch = useDispatch();
  const inputLoginValue = useSelector((state) => state.addUser.inputLoginValue);
  const inputPasswordValue = useSelector(
    (state) => state.addUser.inputPasswordValue
  );
  const handleRegistrate = () => {
    dispatch(registrateUser(inputLoginValue, inputPasswordValue));
  };
  const handleNewUser = (event) => {
    const loginValue = event.target.value;
    dispatch(newLogin(loginValue));
  };
  const handleNewUserPass = (event) => {
    const passValue = event.target.value;
    dispatch(newPassword(passValue));
  };

  return (
    <div className="registration">
      <Title className="login_title" text="Registrate" />

      <InputForLogAndReg
        placeholder="Create youre login"
        className="registrationInput"
        func={handleNewUser}
      />

      <InputForLogAndReg
        placeholder="Create youre password"
        className="registrationInput"
        func={handleNewUserPass}
      />
      <Button
        className="button_submit"
        func={handleRegistrate}
        link={"#"}
        text="Submit"
      />
    </div>
  );
};

export default Registration;
