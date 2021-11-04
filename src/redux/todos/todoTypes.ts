 const ADD_TODO: string = 'ADD_TODO' ;
 const DELETE_TODO: string = 'DELETE_TODO';
 const TOGGLE_TODO: string = 'TOGGLE_TODO';

 export type todoFunction = (todo: Todo) => Action ;
 export type todoState = {
    todos: Todo[];
  };
 
 export {
     ADD_TODO,
     DELETE_TODO,
     TOGGLE_TODO,
 }
