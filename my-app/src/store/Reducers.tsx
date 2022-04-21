import {
  ADD_USER,
  GET_LOGIN,
  GET_PASSWORD,
  GET_USERS_SUCCEEDED,
  GET_ID,
  CLEAR_ALL,
  ALL,
  ADD_TODO,
  GET_TODOS_SUCCEEDED,
  TODOS_CLEAR,
  FILTER,
} from "./constants";
import { Action } from "./types/typesAction";
import { STATUSES } from "../functionalComponents/Main";

const defaultState = {
  todoList: [],
  currentFilter: STATUSES.all,
  counter: 0,
  link: "#",
};
const defaultUserState = {
  usersList: [],
  id: 0,
  inputLoginValue: "",
  inputPasswordValue: "",
  link: "#",
};

export const filter = (state = defaultState, action: Action) => {
  switch (action.type) {
    case FILTER: {
      return { ...state, currentFilter: action.payload };
    }
    default:
      return state;
  }
};

export const counter = (state = defaultState, action: Action) => {
  switch (action.type) {
    case ALL: {
      return { ...state, counter: action.payload };
    }
    default:
      return state;
  }
};

export const todos = (state = defaultState, action: Action) => {
  switch (action.type) {
    case ADD_TODO: {
      return { ...state, todoList: state.todoList.concat(action.payload) };
    }
    case GET_TODOS_SUCCEEDED:
      return { ...state, todoList: action.payload };
    case TODOS_CLEAR:
      return { ...state, todoList: [] };
    default:
      return state;
  }
};

export const addUser = (state = defaultUserState, action: Action) => {
  switch (action.type) {
    case ADD_USER: {
      return { ...state, userList: state.usersList.concat(action.payload) };
    }
    case GET_LOGIN: {
      return { ...state, inputLoginValue: action.login };
    }
    case GET_PASSWORD: {
      return { ...state, inputPasswordValue: action.password };
    }

    case GET_USERS_SUCCEEDED: {
      return { ...state, userList: action.payload };
    }

    case GET_ID: {
      return { ...state, id: action.id, link: "/todos" };
    }

    case CLEAR_ALL: {
      return {
        ...state,
        inputLoginValue: "",
        inputPasswordValue: "",
        id: null,
        link: "#",
      };
    }
    default:
      return state;
  }
};
