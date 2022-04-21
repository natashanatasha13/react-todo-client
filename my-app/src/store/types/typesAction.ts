interface ActionTypeRegistrate {
  type: "REGISTRATE";
  login?: string | any;
  password?: string | any;
  payload?: string | any;
  userId?: number;
  filter?: any;
  status?: string | any;
  element?: any;
  filterValue?: any;
}
interface ActionTypeAddUser {
  type: "ADD_USER";
  login?: string | any;
  password?: string | any;
  payload?: string | any;
  userId?: number;
  filter?: any;
  status?: string | any;
  element?: any;
  filterValue?: any;
}

interface ActionTypeGetLogin {
  type: "GET_LOGIN";
  login?: string | any;
  password?: string | any;
  payload?: string | any;
  userId?: number;
  filter?: any;
  status?: string | any;
  element?: any;
  filterValue?: any;
}

interface ActionTypeGetPassword {
  type: "GET_PASSWORD";
  login?: string | any;
  password?: string | any;
  payload?: string | any;
  userId?: number;
  filter?: any;
  status?: string | any;
  element?: any;
  filterValue?: any;
}
interface ActionTypeGetNewPassword {
  type: "GET_NEW_PASSWORD";
  login?: string | any;
  password?: string | any;
  payload?: string | any;
  userId?: number;
  filter?: any;
  status?: string | any;
  element?: any;
  filterValue?: any;
}
interface ActionTypeGetNewLogin {
  type: "GET_NEW_LOGIN";
  login?: string | any;
  password?: string | any;
  payload?: string | any;
  userId?: number;
  filter?: any;
  status?: string | any;
  filterValue?: any;
}
interface ActionTypeGetUsersSucceeded {
  type: "GET_USERS_SUCCEEDED";
  login?: string | any;
  password?: string | any;
  payload?: string | any;
  userId?: number;
  filter?: any;
  status?: string | any;
  element?: any;
  filterValue?: any;
}
interface ActionTypeGetId {
  type: "GET_ID";
  login?: string | any;
  password?: string | any;
  payload?: string | any;
  id: number | any;
  userId?: number;
  filter?: any;
  status?: string | any;
  element?: any;
  filterValue?: any;
}
interface ActionTypeClearAll {
  type: "CLEAR_ALL";
  login?: string | any;
  password?: string | any;
  payload?: string | any;
  id: number | any;
  userId?: number;
  filter?: any;
  status?: string | any;
  element?: any;
  filterValue?: any;
}
interface ActionTypeAll {
  type: "ALL";
  login?: string | any;
  password?: string | any;
  payload?: string | any;
  id: number | any;
  userId?: number;
  filter?: any;
  status?: string | any;
  element?: any;
  filterValue?: any;
}

interface ActionTypeAddTodo {
  type: "ADD_TODO";
  login?: string | any;
  password?: string | any;
  payload?: string | any;
  id: number | any;
  userId?: number;
  filter?: any;
  status?: string | any;
  element?: any;
  filterValue?: any;
}

interface ActionTypeGetTodoSucceeded {
  type: "GET_TODOS_SUCCEEDED";
  login?: string | any;
  password?: string | any;
  payload?: string | any;
  id: number | any;
  userId?: number;
  filter?: any;
  status?: string | any;
  element?: any;
  filterValue?: any;
}
interface ActionTypeGetTodoSucceeded {
  type: "GET_TODOS_SUCCEEDED";
  login?: string | any;
  password?: string | any;
  payload?: string | any;
  id: number | any;
  userId?: number;
  filter?: any;
  status?: string | any;
  element?: any;
  filterValue?: any;
}
interface ActionTypeGetTodoClear {
  type: "TODOS_CLEAR";
  login?: string | any;
  password?: string | any;
  payload?: string | any;
  id: number | any;
  userId?: number;
  filter?: any;
  status?: string | any;
  element?: any;
  filterValue?: any;
}
interface ActionTypeGetDeleteTodo {
  type: "DELETE_TODO";
  login?: string | any;
  password?: string | any;
  payload?: string | any;
  id?: number;
  userId?: number;
  filter?: any;
  status?: string | any;
  element?: any;
  filterValue?: any;
}
interface ActionTypes {
  type: any;
  login?: string | any;
  password?: string | any;
  payload?: string | any;
  id: number | any;
  userId?: number;
  filter?: any;
  status?: string | any;
  element?: any;
  filterValue?: any;
}
export type Action = ActionTypes;

export type addUserType = {
  usersList: any;
  id: number;
  inputLoginValue: string;
  inputPasswordValue: string;
  link: string;
};
