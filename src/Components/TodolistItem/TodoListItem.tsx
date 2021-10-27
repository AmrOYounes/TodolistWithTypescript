import React from "react";
import "./todoListItem.style.scss";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../../redux/todos/todoActions";

interface Props {
  todo: Todo;
}

export const TodoListItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li className="list-item">
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => {
          dispatch(toggleTodo(todo));
        }}
      />
      <label
        style={{ textDecoration: todo.complete ? "line-through" : undefined }}
      >
        {todo.text}
      </label>
      <button onClick={() => dispatch(deleteTodo(todo))}>Delete</button>
    </li>
  );
};
