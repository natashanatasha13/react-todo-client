import React from "react";
import { useDispatch, useSelector } from "react-redux";
import InputForLogAndReg from "./LoginAndRegInput";
import Title from "./LoginAndRegTitle";
import { newLogin, newPassword, getTodos } from "../store/actions";
import Button from "./LoginAndRegButton";

const Login = () => {
  const dispatch = useDispatch();
  const inputLoginValue = useSelector((state) => state.addUser.inputLoginValue);
  const inputPasswordValue = useSelector(
    (state) => state.addUser.inputPasswordValue
  );
  const id = useSelector((state) => state.addUser.id);
  const link = useSelector((state) => state.addUser.link);

  const handleUserLogin = (event) => {
    const loginValue = event.target.value;
    dispatch(newLogin(loginValue));
  };
  const handleUserPass = (event) => {
    const passValue = event.target.value;
    dispatch(newPassword(passValue));
  };

  const handleEnter = () => {
    dispatch(getTodos(id, inputLoginValue, inputPasswordValue));
  };

  return (
    <div className="registration">
      <Title
        className="login_title"
        text={" If it's your first time here you have to registrate down below"}
      />
      <InputForLogAndReg
        placeholder="Login"
        className="registrationInput"
        func={handleUserLogin}
      />
      <InputForLogAndReg
        placeholder="Password"
        className="registrationInput"
        func={handleUserPass}
      />
      <Button
        className="button_submit"
        link={link}
        linkFuncLogin={handleEnter}
        linkFuncEnter={handleEnter}
        text="Sign In"
      />
    </div>
  );
};

export default Login;
