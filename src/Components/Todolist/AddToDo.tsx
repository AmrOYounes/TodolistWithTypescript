import React, { useState } from "react";
import "./AddTodoForm.styles.scss";
interface Props {
  addTodoItem: (text: string) => void;
}

export const AddToDo: React.FC<Props> = ({ addTodoItem }) => {
  const [text, setText] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodoItem(text);
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
