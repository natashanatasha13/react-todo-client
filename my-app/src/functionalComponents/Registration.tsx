import { useSelector, useDispatch } from "react-redux";
import Button from "./LoginAndRegButton";
import Title from "./LoginAndRegTitle";
import InputForLogAndReg from "./LoginAndRegInput";
import { registrateUser, newPassword, newLogin } from "../store/actions";
import { FC, ReactElement } from "react";

const Registration: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const inputLoginValue = useSelector(
    (state: any) => state.addUser.inputLoginValue
  );
  const inputPasswordValue = useSelector(
    (state: any) => state.addUser.inputLoginValue
  );
  const handleNewUser = (event: any) => {
    const loginValue = event.target.value;
    console.log(loginValue);
    dispatch(newLogin(loginValue));
    console.log(inputLoginValue);
  };
  const handleNewUserPass = (event: any) => {
    const passValue = event.target.value;
    dispatch(newPassword(passValue));
  };
  const handleRegistrate = () => {
    console.log(inputLoginValue);
    dispatch(registrateUser(inputLoginValue, inputPasswordValue));
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
