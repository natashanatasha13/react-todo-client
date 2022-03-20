import { createStore, combineReducers } from "redux";

import { counter, todos, filter } from "./Reducers";
const rootReducer = combineReducers({
  counter,
  todos,
  filter,
});
const store = createStore(rootReducer);
export default store;
