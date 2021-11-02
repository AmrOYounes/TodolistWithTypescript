import React from "react";
import Navbar from "./Components/Navbar";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from './Components/publicRoute';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import "./App.scss";

const App: React.FC = () => {
  
  return (
    <div className="App">
      <Navbar/>

      <Router>

       <Switch>
        <PublicRoute   path='/login' exact/>
        <PrivateRoute   path='/' exact/>
      </Switch>

      </Router>

    </div>
  );
};

export default App;
