import {
  ALL,
  ADD_TODO,
  ADD_TODOS,
  CHANGE_TODO,
  FILTER,
  GET_TODOS,
  GET_TODOS_SUCCEEDED,
  GET_TODOS_FAILED,
  CHANGE_STATUS,
  SET_COUNTER,
  DELETE_TODO,
  REMOVE_COMPLETED,
  REGISTRATE,
  ADD_USER,
  LOGIN,
  GET_ID,
  GET_LOGIN,
  GET_NEW_LOGIN,
  GET_PASSWORD,
  GET_NEW_PASSWORD,
  CLEAR_ALL,
  CLEAR,
  TODOS_CLEAR,
} from "./constants";

export const changeCounterAll = (value: any) => {
  return {
    type: ALL,
    payload: value,
  };
};

export const addTodo = (value: any) => {
  return {
    type: ADD_TODO,
    payload: value,
  };
};
export const changeTodo = (value: any) => {
  return {
    type: CHANGE_TODO,
    payload: value,
  };
};

export const changeFilter = (value: any) => {
  return {
    type: FILTER,
    payload: value,
  };
};

export const getTodos = (userId: any, login: string, password: string) => {
  return { type: GET_TODOS, userId: userId, login: login, password: password };
};
export const addTodos = (value: any, filter: string, userId: number) => {
  return { type: ADD_TODOS, payload: value, filter: filter, userId: userId };
};
export const setCounter = (filterValue: string) => {
  return { type: SET_COUNTER, filterValue: filterValue };
};

export const changeStatus = (
  id: number,
  status: string,
  filter: string,
  userId: number
) => {
  return {
    type: CHANGE_STATUS,
    id: id,
    status: status,
    filter: filter,
    userId: userId,
  };
};
export const deleteTodo = (id: number, filter: string, userId: number) => {
  return { type: DELETE_TODO, id: id, filter: filter, userId: userId };
};
export const removeCompleted = (element: any, filter: string) => {
  return {
    type: REMOVE_COMPLETED,
    element: element,
    filter: filter,
  };
};
export const getTodoSucceeded = (data: any) => {
  return { type: GET_TODOS_SUCCEEDED, payload: data };
};
export const TodoClear = () => {
  return { type: TODOS_CLEAR };
};
export const getTodoError = () => {
  return { type: GET_TODOS_FAILED };
};

export const addUser = (login?: string, password?: string) => {
  return { type: ADD_USER, login: login, password: password };
};
export const getId = (id: number) => {
  return { type: GET_ID, id: id };
};
export const registrateUser = (login: string, password: string) => {
  return { type: REGISTRATE, login: login, password: password };
};
export const loginUser = (login: string, password: string) => {
  return { type: LOGIN, login: login, password: password };
};
export const newLogin = (login: string) => {
  return { type: GET_NEW_LOGIN, login: login };
};
export const newPassword = (password: string) => {
  return { type: GET_NEW_PASSWORD, password: password };
};
export const getLogin = (login: string) => {
  return { type: GET_LOGIN, login: login };
};

export const getPassword = (password: string) => {
  return { type: GET_PASSWORD, password: password };
};
export const clearAll = () => {
  return { type: CLEAR_ALL };
};

export const clearAllWatcher = () => {
  return { type: CLEAR };
};
