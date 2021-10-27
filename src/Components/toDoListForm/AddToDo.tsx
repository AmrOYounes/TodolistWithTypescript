import React, { useState } from "react";
import "./AddTodoForm.styles.scss";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todos/todoActions";

export const AddToDo: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodo({ text, complete: false }));
  };

  return (
    <form className="todo-form">
      <input type="text" onChange={handleInputChange} autoFocus />
      <button type="submit" onClick={handleSubmit} className="add-todo-button">
        Add Todo
      </button>
    </form>
  );
};
