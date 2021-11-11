import TodoItem from "./TodoItem";
import React from "react";

function TodoList(props) {
  return (
    <section className="main">
      <ul className="todo-list">
        {props.todos.map((todo) => (
          <TodoItem
            title={todo.title}
            completed={todo.completed}
            id={todo.id}
            key={todo.id}
            toggleComplete={props.toggleComplete}
            deleteTodo={props.deleteTodo}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
