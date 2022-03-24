import { put, takeEvery } from "redux-saga/effects";
import {
  GET_TODOS,
  ADD_TODOS,
  CHANGE_STATUS,
  SET_COUNTER,
  DELETE_TODO,
  REMOVE_COMPLETED,
} from "./constants";
import { callApi } from "../callApi/Api";
import {
  getTodoSucceeded,
  getTodoError,
  addTodo,
  changeCounterAll,
  setCounter,
} from "./actions";
import { STATUSES } from "../components/Main";

function* getTodos() {
  try {
    const unparsedData = yield callApi(``, {
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

    const unparsedData = yield callApi(``, {
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

    const unparsedData = yield callApi(``, {
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
    yield put(changeCounterAll(data));
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
    const unparsedData = yield callApi(``, {
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

export function* watchSagas() {
  yield takeEvery(GET_TODOS, getTodos);
  yield takeEvery(ADD_TODOS, postTodos);
  yield takeEvery(CHANGE_STATUS, statusChanger);
  yield takeEvery(SET_COUNTER, setTheCounter);
  yield takeEvery(DELETE_TODO, deleteTodo);
  yield takeEvery(REMOVE_COMPLETED, removeCompleted);
}
