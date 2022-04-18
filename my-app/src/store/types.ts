export interface IAddUser {
  login?: string | any;
  password?: string | any;
  payload?: string | any;
}

interface ActionTypeRegistrate {
  type: "REGISTRATE";
  login?: string | any;
  password?: string | any;
  payload?: string | any;
}
interface ActionTypeAddUser {
  type: "ADD_USER";
  login?: string | any;
  password?: string | any;
  payload?: string | any;
}

interface ActionTypeGetLogin {
  type: "GET_LOGIN";
  login?: string | any;
  password?: string | any;
  payload?: string | any;
}

interface ActionTypeGetPassword {
  type: "GET_PASSWORD";
  login?: string | any;
  password?: string | any;
  payload?: string | any;
}
interface ActionTypeGetNewPassword {
  type: "GET_NEW_PASSWORD";
  login?: string | any;
  password?: string | any;
  payload?: string | any;
}
interface ActionTypeGetNewLogin {
  type: "GET_NEW_LOGIN";
  login?: string | any;
  password?: string | any;
  payload?: string | any;
}

export type Action =
  | ActionTypeGetNewPassword
  | ActionTypeGetNewLogin
  | ActionTypeRegistrate
  | ActionTypeAddUser
  | ActionTypeGetLogin
  | ActionTypeGetPassword;

export type addUserType = {
  usersList: any;
  id: number;
  inputLoginValue: string;
  inputPasswordValue: string;
  link: string;
};
