import { createStore, combineReducers, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";

import { watchSagas } from "./sagas";

import { counter, todos, filter } from "./Reducers";
const rootReducer = combineReducers({
  counter,
  todos,
  filter,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export default store;

sagaMiddleware.run(watchSagas);
