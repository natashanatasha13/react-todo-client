import React from "react";
import Title from "./TodoTitle";
import Input from "./Input";
import List from "./List";
import Footer from "./Footer";
import FooterLower from "./FooterLower.js";
import { callApi } from "./Api";
export const STATUSES = {
  all: 3,
  active: 1,
  done: 0,
  completed: 2,
};

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      currentFilter: STATUSES.all,
      counter: 0,
    };
  }

  componentDidMount() {
    this.res();
  }
  res = async () => {
    const counter = this.state;
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
    this.setState({
      todoList: resWithoutDeleted,
      counter: resActive.length,
    });
  };

  addTodo = async (e) => {
    const { todoList, currentFilter } = this.state;

    const unParsedRes = await callApi("", {
      method: "POST",
      body: JSON.stringify({
        value: e.target.value,
        status: STATUSES.active,
      }),
    });
    const res = await unParsedRes.json();

    todoList.push(res);
    this.setState({ todoList });
    this.setCounter(currentFilter);
  };
  changeStatus = async (id, status) => {
    const { todoList, currentFilter } = this.state;

    const unParsedRes = await callApi(`changeStatus/${id}`, {
      method: "POST",
      body: JSON.stringify({
        status: status,
      }),
    });

    if (unParsedRes.status === 200) {
      const newTodoList = todoList.map((element) => {
        const todo = { ...element };
        if (todo.id === id) {
          todo.status = status;
        }
        return todo;
      });
      this.setState({
        todoList: newTodoList,
      });
    }
    this.setCounter(currentFilter);
  };
  setCurrentFilter = (filter) => {
    this.setState({ currentFilter: filter });
  };
  deleteTodo = async (id) => {
    const { todoList, currentFilter } = this.state;

    const unParsedRes = await callApi(`changeStatus/${id}`, {
      method: "POST",
      body: JSON.stringify({
        status: STATUSES.completed,
      }),
    });

    if (unParsedRes.status === 200) {
      const newTodoList = todoList.map((element) => {
        const todo = { ...element };
        if (todo.id === id) {
          todo.status = STATUSES.completed;
        }
        return todo;
      });
      this.setState({
        todoList: newTodoList,
      });
    }
    this.setCounter(currentFilter);
  };
  setCounter = async (filterValue) => {
    const { counter, todoList } = this.state;

    const unParsedRes = await callApi(`getCounter/${filterValue}`, {
      method: "GET",
    });
    const data = await unParsedRes.json();

    this.setState({ counter: data });
  };
  removeCompleted = async () => {
    const { todoList, currentFilter } = this.state;
    const doneTodos = todoList.filter((element) => element.status === 0);
    doneTodos.forEach(async (element) => {
      const unParsedRes = await callApi(`changeStatus/${element.id}`, {
        method: "POST",
        body: JSON.stringify({
          status: STATUSES.completed,
        }),
      });
      if (unParsedRes.status === 200) {
        const newTodoList = todoList.filter(
          (element) => element.status === STATUSES.active
        );
        this.setState({
          todoList: newTodoList,
        });
      }
      this.setCounter(currentFilter);
    });
  };

  render() {
    const { todoList, currentFilter } = this.state;

    const filteredTodoList = todoList.filter((el) =>
      currentFilter === STATUSES.all
        ? el.status !== STATUSES.completed
        : el.status === currentFilter
    );

    return (
      <div>
        <Title textContent="todos" />
        <Input
          placeholder="What needs to be done?"
          todos={this.state.todoList}
          addTodo={this.addTodo}
        />
        <List
          todos={filteredTodoList}
          changeStatus={this.changeStatus}
          deleteTodo={this.deleteTodo}
          setCounter={this.setCounter}
        />
        <Footer
          className="footer"
          setCurrentFilter={this.setCurrentFilter}
          currentFilter={this.state.currentFilter}
          setCounter={this.setCounter}
          counter={this.state.counter}
          removeCompleted={this.removeCompleted}
        ></Footer>
        <FooterLower className="lower-footer" />
        <FooterLower className="lowest-footer" />
      </div>
    );
  }
}

export { Main };
