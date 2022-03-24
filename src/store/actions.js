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

export const getTodos = () => {
  return { type: GET_TODOS };
};
export const addTodos = (value, filter) => {
  return { type: ADD_TODOS, payload: value, filter: filter };
};
export const setCounter = (filterValue) => {
  return { type: SET_COUNTER, filterValue: filterValue };
};

export const changeStatus = (id, status, filter) => {
  return { type: CHANGE_STATUS, id: id, status: status, filter: filter };
};
export const deleteTodo = (id, filter) => {
  return { type: DELETE_TODO, id: id, filter: filter };
};
export const removeCompleted = (element, filter) => {
  return { type: REMOVE_COMPLETED, element: element, filter: filter };
};
export const getTodoSucceeded = (data) => {
  return { type: GET_TODOS_SUCCEEDED, payload: data };
};

export const getTodoError = () => {
  return { type: GET_TODOS_FAILED };
};
