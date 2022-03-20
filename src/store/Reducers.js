import { STATUSES } from "../components/Main";
import { ADD_TODO, ALL, CHANGE_TODO, FILTER } from "./constants";

const defaultState = {
  todoList: [],
  currentFilter: STATUSES.all,
  counter: 0,
};
export const counter = (state = defaultState, action) => {
  switch (action.type) {
    case ALL: {
      return { ...state, counter: action.payload };
    }
    default:
      return state;
  }
};

export const todos = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return { ...state, todoList: state.todoList.concat(action.payload) };
    }
    case CHANGE_TODO: {
      return { ...state, todoList: action.payload };
    }
    default:
      return state;
  }
};
export const filter = (state = defaultState, action) => {
  switch (action.type) {
    case FILTER: {
      return { ...state, currentFilter: action.payload };
    }

    default:
      return state;
  }
};
