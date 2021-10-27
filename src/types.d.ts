interface Todo {
    text: string;
    complete: boolean;
  }


  type Action = {
    type: string,
    payload: Todo 
}

