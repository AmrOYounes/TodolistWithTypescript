import React, {lazy, Suspense} from 'react'
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';
import Loader from '../Loader';
import type {RootState} from '../../redux/rootReducer';
const TodoList = lazy(() => import('../todoList'));

  const PrivateRoute : React.FC <RoutesProps>= ({...rest}) => {
    const isAUTH = useSelector((state: RootState) => state.user.isAuth );
     return (
         <Suspense fallback={Loader}>
         <Route
         {...rest}
         render={ props => (
            isAUTH ? <TodoList /> : <Redirect to='/login'/>
         )}
         />
         </Suspense>
    )
}

export default PrivateRoute;
