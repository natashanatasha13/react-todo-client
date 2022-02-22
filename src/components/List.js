import React from "react";
import ListElement from "./ListElement";
class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const todos = this.props.todos;
    const { changeStatus, deleteTodo, setCounter } = this.props;

    return (
      <ul>
        {todos.map((element) => (
          <ListElement
            textContent={element.value}
            changeStatus={changeStatus}
            todoid={element.id}
            status={element.status}
            deleteTodo={deleteTodo}
            setCounter={setCounter}
          />
        ))}
      </ul>
    );
  }
}

export default List;
