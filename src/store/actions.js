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

export const changeCounterAll = (value) => {
  return {
    type: ALL,
    payload: value,
  };
};

export const addTodo = (value) => {
  return {
    type: ADD_TODO,
    payload: value,
  };
};
export const changeTodo = (value) => {
  return {
    type: CHANGE_TODO,
    payload: value,
  };
};

export const changeFilter = (value) => {
  return {
    type: FILTER,
    payload: value,
  };
};

export const getTodos = (userId, login, password) => {
  return { type: GET_TODOS, userId: userId, login: login, password: password };
};
export const addTodos = (value, filter, userId) => {
  return { type: ADD_TODOS, payload: value, filter: filter, userId: userId };
};
export const setCounter = (filterValue) => {
  return { type: SET_COUNTER, filterValue: filterValue };
};

export const changeStatus = (id, status, filter, userId) => {
  return {
    type: CHANGE_STATUS,
    id: id,
    status: status,
    filter: filter,
    userId: userId,
  };
};
export const deleteTodo = (id, filter, userId) => {
  return { type: DELETE_TODO, id: id, filter: filter, userId: userId };
};
export const removeCompleted = (element, filter) => {
  return {
    type: REMOVE_COMPLETED,
    element: element,
    filter: filter,
  };
};
export const getTodoSucceeded = (data) => {
  return { type: GET_TODOS_SUCCEEDED, payload: data };
};
export const TodoClear = () => {
  return { type: TODOS_CLEAR };
};
export const getTodoError = () => {
  return { type: GET_TODOS_FAILED };
};

export const addUser = (login, password) => {
  return { type: ADD_USER, login: login, password: password };
};
export const registrateUser = (login, password) => {
  return { type: REGISTRATE, login: login, password: password };
};

export const loginUser = (login, password) => {
  return { type: LOGIN, login: login, password: password };
};

export const getId = (id) => {
  return { type: GET_ID, id: id };
};
export const getLogin = (login) => {
  return { type: GET_LOGIN, payload: login };
};
export const newLogin = (login) => {
  return { type: GET_NEW_LOGIN, payload: login };
};

export const getPassword = (password) => {
  return { type: GET_PASSWORD, payload: password };
};
export const newPassword = (password) => {
  return { type: GET_NEW_PASSWORD, payload: password };
};

export const clearAll = () => {
  return { type: CLEAR_ALL };
};

export const clearAllWatcher = () => {
  return { type: CLEAR };
};
