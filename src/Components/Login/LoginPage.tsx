import React, {useState} from 'react';
import  {LoginTypes} from './login.types';
import './Login.styles.scss';


const LoginPage : React.FC<LoginTypes> = ( {login}) => {
    const [userName, setUserName] = useState<string>('amer');
    const [password, setPassword] = useState<string>('123456');


    const handleLogin =  (e: React.FormEvent)  => {
        e.preventDefault();
        login(userName, password);
   };

    return (
        <div className='login-container'>
		 <form action="#" className='login-form'>
			<h1>Sign in</h1>
			<input type="text" placeholder="user name" />
			<input type="password" placeholder="Password" />
			<button onClick={ handleLogin}>Sign In</button>
		</form>
        </div>
    )
}

export default  LoginPage;
