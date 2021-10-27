import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TodoListItem } from "./Components/TodolistItem/TodoListItem";
import { AddToDo } from "./Components/toDoListForm/AddToDo";
import type { RootState } from "./redux/rootReducer";
import { updateTodo } from "./redux/todos/todoActions";
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      dispatch(updateTodo());
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });
  return (
    <div className="App">
      <AddToDo />
      <ul className="list">
        {todos.map((todo: Todo) => (
          <TodoListItem key={todo.text} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
