import React from "react";
import ListElement from "./ListElement";
import { connect } from "react-redux";
class List extends React.Component {
  render() {
    const { filteredTodos, changeStatus, deleteTodo, setCounter } = this.props;

    return (
      <ul>
        {filteredTodos.map((element) => (
          <ListElement
            key={element.id}
            textContent={element.value}
            changeStatus={changeStatus}
            todoId={element.id}
            status={element.status}
            deleteTodo={deleteTodo}
            setCounter={setCounter}
          />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos.todoList,
});

export default connect(mapStateToProps)(List);
