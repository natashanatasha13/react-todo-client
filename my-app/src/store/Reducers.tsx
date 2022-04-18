import { ADD_USER, GET_LOGIN, GET_PASSWORD } from "./constants";
import { Action, addUserType } from "./types";

const defaultUserState = {
  usersList: [],
  id: 0,
  inputLoginValue: "s",
  inputPasswordValue: "s",
  link: "#",
};

export const addUser = (
  state: addUserType = defaultUserState,
  action: Action
) => {
  switch (action.type) {
    case ADD_USER: {
      return { ...state, userList: state.usersList.concat(action.payload) };
    }
    case GET_LOGIN: {
      return { ...state, inputLoginValue: action.payload };
    }
    case GET_PASSWORD: {
      return { ...state, inputPasswordValue: action.payload };
    }

    default:
      return state;
  }
};
