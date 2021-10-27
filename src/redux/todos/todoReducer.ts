import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO } from "./todoTypes";

type todoState = {
  todos: Todo[];
};

const initialState: todoState = {
  todos: [
    {
      text: "learn React hooks",
      complete: false,
    },
    {
      text: "Learn typescript",
      complete: true,
    },
  ],
};

const todoReducer = (state: todoState = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case UPDATE_TODO:
      const data = localStorage.getItem("todos");
      return {
        ...state,
        todos: JSON.parse(data as string),
      };

    case DELETE_TODO:
      const newTodos: Todo[] = state.todos.filter(
        (todo: Todo) => todo !== action.payload
      );
      return {
        ...state,
        todos: newTodos,
      };

    case TOGGLE_TODO:
      const modifiedTodos = state.todos.map((todo) => {
        if (todo === action.payload) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: modifiedTodos,
      };

    default:
      return state;
  }
};

export default todoReducer;
