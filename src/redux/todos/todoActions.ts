import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO } from "./todoTypes";

const addTodo: (todo: Todo) => Action = (todo: Todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

const deleteTodo: (todo: Todo) => Action = (todo) => {
  return {
    type: DELETE_TODO,
    payload: todo,
  };
};

const updateTodo = () => {
  return {
    type: UPDATE_TODO,
  };
};

const toggleTodo: (selectedTodo: Todo) => Action = (selectedTodo) => {
  return {
    type: TOGGLE_TODO,
    payload: selectedTodo,
  };
};

export { addTodo, deleteTodo, toggleTodo, updateTodo };
