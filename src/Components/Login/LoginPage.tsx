import React, {useState} from 'react';
import  {LoginTypes} from './login.types';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../redux/user/userActions';
import './Login.styles.scss';

const LoginPage : React.FC<LoginTypes> = ( props) => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin =  (e: React.FormEvent<HTMLButtonElement>)  => {
          e.preventDefault();
          dispatch(loginUser())
          props.history.replace('/');
          setUserName('');
          setPassword('');
      };

      const handleChange: (e: React.FormEvent<HTMLInputElement>) => void = (e: React.FormEvent<HTMLInputElement>) =>  {
         const {id, value} = e.target as HTMLInputElement;
         if( id === 'userName') {
            setUserName(value);
         }
         else{
             setPassword(value);
         }
      }

    return (
        <div className='login-container'>
		 <form action="#" className='login-form'>
			<h1>Sign in</h1>
			<input id= 'userName' value={userName} type="text" placeholder="user name" onChange={handleChange} />
			<input  id='password' value={password} type="password" placeholder="Password" onChange={handleChange} />
			<button onClick={handleLogin}>Sign In</button>
		</form>
        </div>
    )
}

export default  LoginPage;
