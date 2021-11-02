import React from "react";
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/rootReducer';
import AddToDo from '../toDoListForm';
import TodoListItem from '../TodolistItem';

export const TodoList: React.FC = () => {
    const { todos } = useSelector((state: RootState) => state.todos);
    return (
      <React.Fragment>
        <AddToDo />
        <ul className="list">
          {todos.map((todo: Todo) => (
            <TodoListItem key={todo.text} todo={todo} />
          ))}
        </ul>
      </React.Fragment>
    );
  };

  export default TodoList;