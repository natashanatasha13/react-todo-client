import React from "react";
import Title from "./TodoTitle";
import Input from "./Input";
import List from "./List";
import Footer from "./Footer";
import FooterLower from "./FooterLower.js";
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
    this.props.getTodos();
  };

  addTodo = (e) => {
    const value = e.target.value;
    const { currentFilter } = this.props;
    this.props.addTodos(value, currentFilter);
  };
  changeStatus = (id, status) => {
    const { currentFilter, changeStatus } = this.props;
    changeStatus(id, status, currentFilter);
  };

  setCurrentFilter = (filter) => {
    this.props.changeFilter(filter);
  };

  deleteTodo = (id) => {
    const { currentFilter, deleteTodo } = this.props;
    deleteTodo(id, currentFilter);
  };

  setCounter = (filterValue) => {
    this.props.setCounter(filterValue);
  };

  removeCompleted = () => {
    const doneTodos = this.props.todos.filter(
      (element) => element.status === 0
    );
    doneTodos.forEach((element) => {
      const filter = this.props.currentFilter;
      this.props.removeCompleted(element, filter);
      //this.setCounter(this.props.currentFilter);
    });
  };

  render() {
    const filteredTodoList = this.props.todos.filter((el) =>
      this.props.currentFilter === STATUSES.all
        ? el.status !== STATUSES.completed
        : el.status === this.props.currentFilter
    );

    const { todos, currentFilter, counter } = this.props;
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  todos: state.todos.todoList,
  currentFilter: state.filter.currentFilter,
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
