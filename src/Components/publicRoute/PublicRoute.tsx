import React, {lazy, Suspense} from 'react'
import { Route} from 'react-router-dom';
import Loader from '../Loader';
const LoginPage = lazy( () => import('../Login'));

  const PublicRoute : React.FC <RoutesProps>= ({ ...rest}) => {
    
    return (
      <Suspense fallback={Loader}>
         <Route
         component={LoginPage}
         {...rest}
         />
      </Suspense>
    )
}

export default PublicRoute;
