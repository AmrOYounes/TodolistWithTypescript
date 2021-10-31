import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, todoState } from "./todoTypes";

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
