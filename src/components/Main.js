import React from "react";
import Title from "./TodoTitle";
import Input from "./Input";
import List from "./List";
import Footer from "./Footer";
import FooterLower from "./FooterLower.js";
import ButtonLogOut from "./ButtonLogOut";
import { connect } from "react-redux";
import {
  changeCounterAll,
  addTodo,
  changeTodo,
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

class Main extends React.Component {
  componentDidMount() {
    this.res();
  }
  res = () => {
    const { getTodos } = this.props;
    const userId = localStorage.getItem("userId");
    const login = localStorage.getItem("login");
    const password = localStorage.getItem("password");
    getTodos(userId, login, password);
  };

  addTodo = (e) => {
    const { currentFilter, addTodos } = this.props;
    const value = e.target.value;
    const userId = localStorage.getItem("userId");

    addTodos(value, currentFilter, userId);
  };
  changeStatus = (id, status) => {
    const { currentFilter, changeStatus } = this.props;
    const userId = localStorage.getItem("userId");
    changeStatus(id, status, currentFilter, userId);
  };

  setCurrentFilter = (filter) => {
    const { changeFilter } = this.props;
    changeFilter(filter);
  };

  deleteTodo = (id) => {
    const { currentFilter, deleteTodo } = this.props;
    const userId = localStorage.getItem("userId");
    deleteTodo(id, currentFilter, userId);
  };

  setCounter = (filterValue) => {
    const { setCounter } = this.props;
    setCounter(filterValue);
  };

  removeCompleted = () => {
    const { todos, currentFilter, removeCompleted } = this.props;
    const doneTodos = todos.filter((element) => element.status === 0);
    doneTodos.forEach((element) => {
      removeCompleted(element, currentFilter);
    });
  };

  render() {
    const { todos, currentFilter, counter } = this.props;
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
          addTodo={this.addTodo}
        />
        <List
          filteredTodos={filteredTodoList}
          changeStatus={this.changeStatus}
          deleteTodo={this.deleteTodo}
          setCounter={this.setCounter}
        />

        <Footer
          className="footer"
          setCurrentFilter={this.setCurrentFilter}
          currentFilter={currentFilter}
          setCounter={this.setCounter}
          counter={counter}
          removeCompleted={this.removeCompleted}
        ></Footer>
        <FooterLower className="lower-footer" />
        <FooterLower className="lowest-footer" />
        <ButtonLogOut />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  todos: state.todos.todoList,
  currentFilter: state.filter.currentFilter,
  id: state.addUser.id,
  inputLoginValue: state.addUser.inputLoginValue,
  inputPasswordValue: state.addUser.inputPasswordValue,
});

const mapDispatchToProps = {
  changeCounterAll: changeCounterAll,
  addTodo: addTodo,
  changeTodo: changeTodo,
  changeFilter: changeFilter,
  getTodos: getTodos,
  addTodos: addTodos,
  changeStatus: changeStatus,
  setCounter: setCounter,
  deleteTodo: deleteTodo,
  removeCompleted: removeCompleted,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
