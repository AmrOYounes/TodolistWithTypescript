import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, todoFunction } from "./todoTypes";

const addTodo: todoFunction = (todo: Todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

const deleteTodo: todoFunction = (todo) => {
  return {
    type: DELETE_TODO,
    payload: todo,
  };
};

const toggleTodo: todoFunction = (selectedTodo) => {
  return {
    type: TOGGLE_TODO,
    payload: selectedTodo,
  };
};

export { addTodo, deleteTodo, toggleTodo };
