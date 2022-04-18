import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import Button from "./LoginAndRegButton";
import Title from "./LoginAndRegTitle";
import InputForLogAndReg from "./LoginAndRegInput";
import { registrateUser } from "../store/actions";
import { GET_NEW_LOGIN } from "../store/constants";
import { Action } from "../store/types";
import { FC, ReactElement, Dispatch } from "react";

const Registration: FC = (): ReactElement => {
  const inputLoginValue = useSelector(
    (state: RootStateOrAny) => state.addUser.inputLoginValue
  );
  const handleNewUser = (event: any) => {
    const loginValue = event.target.value;

    // dispatch({ type: GET_NEW_LOGIN, login: loginValue });
  };
  const handleNewUserPass = (event: any) => {
    const passValue = event.target.value;
    // dispatch(newPassword(passValue));
  };
  const handleRegistrate = () => {
    console.log(inputLoginValue);
    // dispatch(registrateUser(inputLoginValue, inputPasswordValue));
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
