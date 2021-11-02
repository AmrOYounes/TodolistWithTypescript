interface Todo {
    text: string;
    complete: boolean;
  }

  type Action = {
    type: string,
    payload: Todo 
}

type userAction = {
  type: string,
}

interface RoutesProps {
  path: string,
  exact: boolean,

}
