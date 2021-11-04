import React from 'react';
import LoginPage from '../Login';
import {TodoList} from '../../App';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';

  interface RoutingProps {
    isAuth: boolean,
    loginFunc: ( userName: string, password: string) => void,
  }
 const Routing: React.FC<RoutingProps> = ({isAuth, loginFunc}) => {
    return (
        <React.Fragment>

  <Router>
        {
          !isAuth ? <Redirect to='/login'/> : <Redirect to='/' />
        }
       <Switch>
        <Route
        path='/'
        exact
        component={TodoList}
        />
        <Route
        path='/login'
        render ={(props) => <LoginPage login= {loginFunc}/> }
        />
       </Switch>
      </Router>
      
    </React.Fragment>
    )
}


export default Routing;