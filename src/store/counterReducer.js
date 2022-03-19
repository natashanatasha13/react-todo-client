import { STATUSES } from "../components/Main";
const defaultState = {
  todoList: [],
  currentFilter: STATUSES.all,
  counterM: 0,
};
export const counterMinus = (state = defaultState, action) => {
  switch (action.type) {
    case "MINUS_COUNTER": {
      return { ...state, counterM: state.counterM - action.payload };
    }
    default:
      return state;
  }
};
