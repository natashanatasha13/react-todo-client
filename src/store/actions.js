import {
  PLUS_COUNTER,
  MINUS_COUNTER,
  ALL,
  ADD_TODO,
  CHANGE_TODO,
  FILTER,
} from "./types";

export const changeCounterPlus = (value) => {
  return {
    type: PLUS_COUNTER,
    payload: value,
  };
};
export const changeCounterMinus = (value) => {
  return {
    type: MINUS_COUNTER,
    payload: value,
  };
};

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
