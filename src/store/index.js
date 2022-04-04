import { createStore, combineReducers, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";

import { watchSagas } from "./sagas";

import { counter, todos, filter, addUser } from "./Reducers";
const rootReducer = combineReducers({
  counter,
  todos,
  filter,
  addUser,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export default store;

sagaMiddleware.run(watchSagas);
