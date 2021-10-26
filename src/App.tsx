import React, { useState } from "react";
import { TodoListItem } from "./Components/Todolist/TodoListItem";
import { AddToDo } from "./Components/Todolist/AddToDo";
import "./App.scss";

const initialTodos: Todo[] = [
  {
    text: "learn React hooks",
    complete: false,
  },
  {
    text: "Learn typescript",
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: (selectedTodo: Todo) => void = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodoItem: (text: string) => void = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo: (selectedTodo: Todo) => void = (
    selectedTodo: Todo
  ) => {
    const newTodos = todos.filter((todo) => todo !== selectedTodo);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <AddToDo addTodoItem={addTodoItem} />
      <ul className="list">
        {todos.map((todo) => (
          <TodoListItem
            key={todo.text}
            todo={todo}
            toggleTodo={toggleTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
