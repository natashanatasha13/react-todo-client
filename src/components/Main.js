import React from "react";
import Title from "./TodoTitle";
import Input from "./Input";
import List from "./List";
import Footer from "./Footer";
import FooterLower from "./FooterLower.js";
import { callApi } from "./Api";
import { connect } from "react-redux";
import {
  changeCounterAll,
  addTodo,
  changeTodo,
  changeFilter,
} from "../store/actions";

export const STATUSES = {
  all: 3,
  active: 1,
  done: 0,
  completed: 2,
};

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.res();
  }
  res = async () => {
    const unparsedData = await callApi(``, {
      method: "GET",
    });
    const data = await unparsedData.json();

    const resWithoutDeleted = data.filter(
      (element) => element.status !== STATUSES.completed
    );
    const resActive = data.filter(
      (element) => element.status === STATUSES.active
    );

    this.props.addTodo(resWithoutDeleted);
    this.props.changeCounterAll(resActive.length);
  };

  addTodo = async (e) => {
    const unParsedRes = await callApi("", {
      method: "POST",
      body: JSON.stringify({
        value: e.target.value,
        status: STATUSES.active,
      }),
    });
    const res = await unParsedRes.json();
    //todoList.push(res);
    await this.props.addTodo(res);
    await this.setCounter(this.props.currentFilter);
  };
  changeStatus = async (id, status) => {
    const unParsedRes = await callApi(`changeStatus/${id}`, {
      method: "POST",
      body: JSON.stringify({
        status: status,
      }),
    });

    if (unParsedRes.status === 200) {
      const newTodoList = this.props.todos.map((element) => {
        const todo = { ...element };
        if (todo.id === id) {
          todo.status = status;
        }
        return todo;
      });
      this.props.changeTodo(newTodoList);
    }

    this.setCounter(this.props.currentFilter);
  };
  setCurrentFilter = async (filter) => {
    this.props.changeFilter(filter);
  };
  deleteTodo = async (id) => {
    const unParsedRes = await callApi(`changeStatus/${id}`, {
      method: "POST",
      body: JSON.stringify({
        status: STATUSES.completed,
      }),
    });

    if (unParsedRes.status === 200) {
      const newTodoList = this.props.todos.map((element) => {
        const todo = { ...element };
        if (todo.id === id) {
          todo.status = STATUSES.completed;
        }
        return todo;
      });
      const filtredNewTodoList = newTodoList.filter(
        (element) => element.status !== STATUSES.completed
      );
      await this.props.changeTodo(filtredNewTodoList);
    }
    this.setCounter(this.props.currentFilter);
  };

  setCounter = async (filterValue) => {
    const unParsedRes = await callApi(`getCounter/${filterValue}`, {
      method: "GET",
    });
    const data = await unParsedRes.json();
    return await this.props.changeCounterAll(data);
  };

  removeCompleted = async () => {
    const doneTodos = this.props.todos.filter(
      (element) => element.status === 0
    );
    doneTodos.forEach(async (element) => {
      const unParsedRes = await callApi(`changeStatus/${element.id}`, {
        method: "POST",
        body: JSON.stringify({
          status: STATUSES.completed,
        }),
      });
      if (unParsedRes.status === 200) {
        const newTodoList = this.props.todos.filter(
          (element) => element.status === STATUSES.active
        );
        await this.props.changeTodo(newTodoList);
      }
      this.setCounter(this.props.currentFilter);
    });
  };

  render() {
    const filteredTodoList = this.props.todos.filter((el) =>
      this.props.currentFilter === STATUSES.all
        ? el.status !== STATUSES.completed
        : el.status === this.props.currentFilter
    );

    return (
      <div>
        <Title textContent="todos" />
        <Input
          placeholder="What needs to be done?"
          todos={this.props.todos}
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
          currentFilter={this.props.currentFilter}
          setCounter={this.setCounter}
          counter={this.props.counter}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
