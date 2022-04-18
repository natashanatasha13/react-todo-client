import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { watchSagas } from "./sagas";

import { addUser } from "./Reducers";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const rootReducer = combineReducers({
    addUser,
  });

  const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(watchSagas);

  return store;
};

export { configureStore };
