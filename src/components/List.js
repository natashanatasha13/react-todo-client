import React from "react";
import ListElement from "./ListElement";
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

export default List;
