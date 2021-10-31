import React, { useState } from "react";
import "./AddTodoForm.styles.scss";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todos/todoActions";

const AddToDo: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue) {
      setText(inputValue);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text) {
      setText("");
      dispatch(addTodo({ text, complete: false }));
    }
  };

  return (
    <form className="todo-form">
      <input type="text" value={text} onChange={handleInputChange} autoFocus />
      <button type="submit" onClick={handleSubmit} className="add-todo-button">
        Add Todo
      </button>
    </form>
  );
};

export default AddToDo;
