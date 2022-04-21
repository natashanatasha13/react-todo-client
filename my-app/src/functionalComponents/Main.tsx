import React from "react";
import { useEffect } from "react";
import Title from "./TodoTitle";
import Input from "./Input";
import List from "./List";
import Footer from "./Footer";
import FooterLower from "./FooterLower";
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
  const counter = useSelector((state: any) => state.counter.counter);
  const todos = useSelector((state: any) => state.todos.todoList);
  const currentFilter = useSelector((state: any) => state.filter.currentFilter);
  const userId = localStorage.getItem("userId");
  const login: string | any = localStorage.getItem("login");
  const password: string | any = localStorage.getItem("password");

  useEffect(() => {
    dispatch(getTodos(userId, login, password));
  }, [userId, login, password, dispatch]);

  const addNewTodo = (e: any) => {
    const value = e.target.value;
    const userId: number | any = localStorage.getItem("userId");
    dispatch(addTodos(value, currentFilter, userId));
  };
  const changeTheStatus = (id: number, status: string) => {
    const userId: number | any = localStorage.getItem("userId");
    dispatch(changeStatus(id, status, currentFilter, userId));
  };

  const setCurrentFilter = (filter: string) => {
    dispatch(changeFilter(filter));
  };

  const deleteOneTodo = (id: number) => {
    const userId: number | any = localStorage.getItem("userId");
    dispatch(deleteTodo(id, currentFilter, userId));
  };

  const setTheCounter = (filterValue: any) => {
    dispatch(setCounter(filterValue));
  };

  const removeSomeCompleted = () => {
    const doneTodos = todos.filter(
      (element: any) => element.status === STATUSES.done
    );
    doneTodos.forEach((element: any) => {
      dispatch(removeCompleted(element, currentFilter));
    });
  };

  const filteredTodoList = todos.filter((el: any) =>
    currentFilter === STATUSES.all
      ? el.status !== STATUSES.completed
      : el.status === currentFilter
  );

  return (
    <div>
      <Title textContent="todos" />
      <Input
        placeholder="What needs to be done?"
        //todos={todos}
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
