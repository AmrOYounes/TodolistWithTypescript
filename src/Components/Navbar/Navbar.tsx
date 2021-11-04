import React from 'react'
import './Navbar.styles.scss';

interface NavbarProps {
    logOut: () => void,
}
const Navbar : React.FC<NavbarProps> = ({logOut}) => {

    const handleLogOut = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('logout')
        logOut();
    }

    return (
         <nav className='nav'>
             <ul>
                 <li><h2>TodoList</h2></li>
                 <li className='list-item-button'>
                  <button onClick={handleLogOut}> logout</button>   
                 </li>
             </ul>
         </nav>
    )
}

export default Navbar;
