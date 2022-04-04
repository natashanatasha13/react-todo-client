import { put, takeEvery } from "redux-saga/effects";
import {
  GET_TODOS,
  ADD_TODOS,
  CHANGE_STATUS,
  SET_COUNTER,
  DELETE_TODO,
  REMOVE_COMPLETED,
  REGISTRATE,
  LOGIN,
  GET_NEW_LOGIN,
  GET_NEW_PASSWORD,
  CLEAR,
} from "./constants";
import { callApi, callApiUsers } from "../callApi/Api";
import {
  getTodoSucceeded,
  getTodoError,
  addTodo,
  changeCounterAll,
  setCounter,
  addUser,
  getId,
  getLogin,
  getPassword,
  clearAll,
  TodoClear,
} from "./actions";
import { STATUSES } from "../components/Main";

function* getTodo(action) {
  try {
    const unparsedIdData = yield callApiUsers(`login`, {
      method: "POST",
      body: JSON.stringify({
        login: action.login,
        password: action.password,
      }),
    });
    const dataId = yield unparsedIdData.json();

    yield put(getId(dataId));
    yield localStorage.setItem("login", action.login);
    yield localStorage.setItem("password", action.password);
    yield localStorage.setItem("userId", dataId);

    const unparsedData = yield callApi(`${dataId}`, {
      method: "GET",
    });
    const data = yield unparsedData.json();

    yield put(getTodoSucceeded(data));

    const resActive = data.filter(
      (element) => element.status === STATUSES.active
    );

    yield put(changeCounterAll(resActive.length));
  } catch (error) {
    yield put(getTodoError());
  }
}

function* postTodos(action) {
  try {
    const unParsedRes = yield callApi("", {
      method: "POST",
      body: JSON.stringify({
        value: action.payload,
        status: STATUSES.active,
        userId: action.userId,
      }),
    });
    const res = yield unParsedRes.json();

    yield put(addTodo(res));

    yield put(setCounter(action.filter));
  } catch (error) {
    yield put(getTodoError());
  }
}

function* statusChanger(action) {
  try {
    const unParsedRes = yield callApi(`changeStatus/${action.id}`, {
      method: "POST",
      body: JSON.stringify({
        status: action.status,
      }),
    });

    const unparsedData = yield callApi(`${action.userId}`, {
      method: "GET",
    });
    const data = yield unparsedData.json();

    if (unParsedRes.status === 200) {
      const newTodoList = data.map((element) => {
        const todo = { ...element };
        if (todo.id === action.id) {
          todo.status = action.status;
        }
        return todo;
      });
      yield put(getTodoSucceeded(newTodoList));
      yield put(setCounter(action.filter));
    }
  } catch (error) {
    yield put(getTodoError());
  }
}

function* deleteTodo(action) {
  try {
    const unParsedRes = yield callApi(`changeStatus/${action.id}`, {
      method: "POST",
      body: JSON.stringify({
        status: STATUSES.completed,
      }),
    });

    const unparsedData = yield callApi(`${action.userId}`, {
      method: "GET",
    });
    const data = yield unparsedData.json();

    if (unParsedRes.status === 200) {
      const newTodoList = data.map((element) => {
        const todo = { ...element };
        if (todo.id === action.id) {
          todo.status = STATUSES.completed;
        }
        return todo;
      });
      const filtredNewTodoList = newTodoList.filter(
        (element) => element.status !== STATUSES.completed
      );
      yield put(getTodoSucceeded(filtredNewTodoList));
      yield put(setCounter(action.filter));
    }
  } catch (error) {
    yield put(getTodoError());
  }
}

function* setTheCounter(action) {
  try {
    const unParsedRes = yield callApi(`getCounter/${action.filterValue}`, {
      method: "GET",
    });
    const data = yield unParsedRes.json();
    const id = localStorage.getItem("userId");
    const filteredByIdData = data.filter(
      (element) => element.userId === parseInt(id)
    );

    yield put(changeCounterAll(filteredByIdData.length));
  } catch (error) {
    yield put(getTodoError());
  }
}

function* removeCompleted(action) {
  try {
    const element = action.element;
    const unParsedRes = yield callApi(`changeStatus/${element.id}`, {
      method: "POST",
      body: JSON.stringify({
        status: STATUSES.completed,
      }),
    });
    const unparsedData = yield callApi(`${element.userId}`, {
      method: "GET",
    });
    const data = yield unparsedData.json();

    if (unParsedRes.status === 200) {
      const newTodoList = data.filter(
        (element) => element.status === STATUSES.active
      );
      yield put(getTodoSucceeded(newTodoList));
      yield put(setCounter(action.filter));
    }
  } catch (error) {
    yield put(getTodoError());
  }
}

function* postUser(action) {
  try {
    const unParsedRes = yield callApiUsers("user", {
      method: "POST",
      body: JSON.stringify({
        login: action.login,
        password: action.password,
      }),
    });
    const res = yield unParsedRes.json();
    yield put(addUser(res));
  } catch (error) {
    console.log("registration error");
  }
}

function* getUserId(action) {
  try {
    const unparsedData = yield callApiUsers(`login`, {
      method: "POST",
      body: JSON.stringify({
        login: action.login,
        password: action.password,
      }),
    });
    const data = yield unparsedData.json();

    yield put(getId(data));
    yield localStorage.setItem("login", action.login);
    yield localStorage.setItem("password", action.password);
    yield localStorage.setItem("userId", data);
  } catch (error) {
    console.log("login error");
  }
}

function* getTheLogin(action) {
  try {
    yield put(getLogin(action.payload));
  } catch (error) {
    console.log("login error");
  }
}

function* getThePassword(action) {
  try {
    yield put(getPassword(action.payload));
  } catch (error) {
    console.log("login error");
  }
}

function* clearData() {
  try {
    yield put(TodoClear());
    yield put(clearAll());
  } catch (error) {
    console.log("login error");
  }
}

export function* watchSagas() {
  yield takeEvery(GET_TODOS, getTodo);
  yield takeEvery(ADD_TODOS, postTodos);
  yield takeEvery(CHANGE_STATUS, statusChanger);
  yield takeEvery(SET_COUNTER, setTheCounter);
  yield takeEvery(DELETE_TODO, deleteTodo);
  yield takeEvery(REMOVE_COMPLETED, removeCompleted);
  yield takeEvery(REGISTRATE, postUser);
  yield takeEvery(LOGIN, getUserId);
  yield takeEvery(GET_NEW_LOGIN, getTheLogin);
  yield takeEvery(GET_NEW_PASSWORD, getThePassword);
  yield takeEvery(CLEAR, clearData);
}
