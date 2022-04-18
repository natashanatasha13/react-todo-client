import React from "react";
import { useEffect } from "react";
import Title from "./TodoTitle";
import Input from "./Input";
import List from "./List";
import Footer from "./Footer";
import FooterLower from "./FooterLower.js";
import ButtonLogOut from "./ButtonLogOut";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFilter,
  getTodos,
  addTodos,
  changeStatus,
  setCounter,
  deleteTodo,
  removeCompleted,
} from "../store/actions";

export const STATUSES = {
  all: 3,
  active: 1,
  done: 0,
  completed: 2,
};

const Main = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const todos = useSelector((state) => state.todos.todoList);
  const currentFilter = useSelector((state) => state.filter.currentFilter);
  const userId = localStorage.getItem("userId");
  const login = localStorage.getItem("login");
  const password = localStorage.getItem("password");

  useEffect(() => {
    dispatch(getTodos(userId, login, password));
  }, [userId, login, password, dispatch]);

  const addNewTodo = (e) => {
    const value = e.target.value;
    const userId = localStorage.getItem("userId");
    dispatch(addTodos(value, currentFilter, userId));
  };
  const changeTheStatus = (id, status) => {
    const userId = localStorage.getItem("userId");
    dispatch(changeStatus(id, status, currentFilter, userId));
  };

  const setCurrentFilter = (filter) => {
    dispatch(changeFilter(filter));
  };

  const deleteOneTodo = (id) => {
    const userId = localStorage.getItem("userId");
    dispatch(deleteTodo(id, currentFilter, userId));
  };

  const setTheCounter = (filterValue) => {
    dispatch(setCounter(filterValue));
  };

  const removeSomeCompleted = () => {
    const doneTodos = todos.filter(
      (element) => element.status === STATUSES.done
    );
    doneTodos.forEach((element) => {
      dispatch(removeCompleted(element, currentFilter));
    });
  };

  const filteredTodoList = todos.filter((el) =>
    currentFilter === STATUSES.all
      ? el.status !== STATUSES.completed
      : el.status === currentFilter
  );

  return (
    <div>
      <Title textContent="todos" />
      <Input
        placeholder="What needs to be done?"
        todos={todos}
        addTodo={addNewTodo}
      />
      <List
        filteredTodos={filteredTodoList}
        changeStatus={changeTheStatus}
        deleteTodo={deleteOneTodo}
        setCounter={setTheCounter}
      />

      <Footer
        className="footer"
        setCurrentFilter={setCurrentFilter}
        currentFilter={currentFilter}
        setCounter={setTheCounter}
        counter={counter}
        removeCompleted={removeSomeCompleted}
      ></Footer>
      <FooterLower className="lower-footer" />
      <FooterLower className="lowest-footer" />
      <ButtonLogOut />
    </div>
  );
};

export default Main;
