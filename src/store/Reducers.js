import { STATUSES } from "../components/Main";
import {
  ADD_TODO,
  ALL,
  FILTER,
  GET_TODOS_SUCCEEDED,
  ADD_USER,
  GET_USERS_SUCCEEDED,
  GET_ID,
  GET_LOGIN,
  GET_PASSWORD,
  CLEAR_ALL,
  TODOS_CLEAR,
} from "./constants";

const defaultState = {
  todoList: [],
  currentFilter: STATUSES.all,
  counter: 0,
  link: "#",
};
const defaultUserState = {
  usersList: [],
  id: null,
  inputLoginValue: "",
  inputPasswordValue: "",
  link: "#",
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
    case GET_TODOS_SUCCEEDED:
      return { ...state, todoList: action.payload };
    case TODOS_CLEAR:
      return { ...state, todoList: [] };
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

export const addUser = (state = defaultUserState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return { ...state, userList: state.usersList.concat(action.payload) };
    }
    case GET_USERS_SUCCEEDED:
      return { ...state, userList: action.payload };
    case GET_ID:
      return { ...state, id: action.id, link: "/todos" };
    case GET_LOGIN: {
      return { ...state, inputLoginValue: action.payload };
    }
    case GET_PASSWORD: {
      return { ...state, inputPasswordValue: action.payload };
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
