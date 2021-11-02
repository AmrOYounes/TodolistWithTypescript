import React from 'react'
import './Navbar.styles.scss';
import {useSelector, useDispatch} from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import {userLogout} from '../../redux/user/userActions';

const Navbar : React.FC  = () => {
      const {isAuth} = useSelector( (state: RootState) => state.user);
      const dispatch = useDispatch();
    const handleLogOut = (e: React.MouseEvent<HTMLButtonElement>) => {
       dispatch(userLogout())
    }

    return (
         <nav className='nav'>
             <ul>
                 <li><h2>TodoList</h2></li>
                 <li className='list-item-button'>
                 {
                     isAuth && (<button onClick={handleLogOut}> logout</button>   )
                 } 
                 </li>
             </ul>
         </nav>
    )
}

export default Navbar;
