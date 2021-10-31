import React from "react";
import "./todoListItem.style.scss";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../../redux/todos/todoActions";
import {Props} from './todoListItem.types';
  

 
  const TodoListItem: React.FC<Props> = ({ todo }) => {
  const textDecoration = todo.complete ? 'decorate-text' : '';
  const dispatch = useDispatch();

  const handleToggle : (todo: Todo) => void = (todo) => {
    dispatch(toggleTodo(todo));
  } 
  
  const handleDelete: (todo: Todo) => void = (todo) => {
    dispatch(deleteTodo(todo));
  }
  
  return (
    <li className="list-item">
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={ () => handleToggle(todo)}
      />
      <label className={textDecoration}>
        {todo.text}
      </label>
      <button onClick={() => handleDelete(todo)}>Delete</button>
    </li>
  );
};

export default TodoListItem;
