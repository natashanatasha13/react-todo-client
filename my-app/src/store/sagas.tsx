import { put, takeEvery } from "redux-saga/effects";
import { REGISTRATE, GET_NEW_PASSWORD, GET_NEW_LOGIN } from "./constants";
import { addUser, getLogin, getPassword } from "./actions";
import { Action } from "./types";

function* postUser(action: Action) {
  try {
    const data = action.login;
    const dataPass = action.password;
    yield put(addUser(data, dataPass));
  } catch (error) {
    console.log("registration error");
  }
}
function* getTheLogin(action: Action) {
  try {
    yield put(getLogin(action.login));
  } catch (error) {
    console.log("login error");
  }
}

function* getThePassword(action: Action) {
  try {
    yield put(getPassword(action.password));
  } catch (error) {
    console.log("login error");
  }
}

export function* watchSagas() {
  yield takeEvery(REGISTRATE, postUser);
  yield takeEvery(GET_NEW_LOGIN, getTheLogin);
  yield takeEvery(GET_NEW_PASSWORD, getThePassword);
}
