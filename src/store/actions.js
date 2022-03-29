import { ALL, ADD_TODO, CHANGE_TODO, FILTER } from "./constants";

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
