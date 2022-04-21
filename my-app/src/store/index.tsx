import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { watchSagas } from "./sagas";

import { addUser, counter, filter, todos } from "./Reducers";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const rootReducer = combineReducers({
    addUser,
    counter,
    filter,
    todos,
  });

  const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(watchSagas);

  return store;
};

export { configureStore };
