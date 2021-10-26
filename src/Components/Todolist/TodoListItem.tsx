import React from "react";
import "./todoListItem.style.scss";
interface Props {
  todo: Todo;
  toggleTodo: (selectedTodo: Todo) => void;
  handleDeleteTodo: (selectedTodo: Todo) => void;
}

export const TodoListItem: React.FC<Props> = ({
  todo,
  toggleTodo,
  handleDeleteTodo,
}) => {
  return (
    <li className="list-item">
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => {
          toggleTodo(todo);
        }}
      />
      <label
        style={{ textDecoration: todo.complete ? "line-through" : undefined }}
      >
        {todo.text}
      </label>
      <button onClick={() => handleDeleteTodo(todo)}>Delete</button>
    </li>
  );
};
