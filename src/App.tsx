import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TodoListItem from "./Components/TodolistItem";
import AddToDo from "./Components/toDoListForm";
import Navbar from "./Components/Navbar";
import { POST, PostRequstPayload } from "./Actions";
import Routing from "./Components/Routing";
import type { RootState } from "./redux/rootReducer";
import "./App.scss";

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

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const accessToken = localStorage.getItem("AccessToken");

  const login: (userName: string, password: string) => void = (
    userName,
    password
  ) => {
    const params: PostRequstPayload = {
      ClientId: "ecomerce",
      GrantType: "password",
      Password: password,
      UserName: userName,
    };

    POST("Login", params)
      .then((res) => {
        localStorage.setItem("AccessToken", res.access_token);
        setIsAuth(true);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logOut: () => void = () => {
    setIsAuth(false);
    localStorage.removeItem("AccessToken");
  };

  useEffect(() => {
    setIsAuth(!!accessToken);
  }, []);
  console.log(isAuth);
  return (
    <div className="App">
      <Navbar logOut={logOut} />
      <Routing isAuth={isAuth} loginFunc={login} />
    </div>
  );
};

export default App;
