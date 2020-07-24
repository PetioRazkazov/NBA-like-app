import React, {useState} from 'react';
import axios from 'axios';
import './Home.css';
import { Link,Redirect} from 'react-router-dom';
import {useAuth} from '../context/auth.js';

function Login(){
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    async function handleSubmit(event) {
        event.preventDefault();
        let lengthOfData = await axios.get('http://localhost:5000/users/');
        axios.get('http://localhost:5000/users/').then(result => {
            if (result.status === 200) {
                console.log(lengthOfData.data.length);
                for(let i = 0; i<lengthOfData.data.length; i++){
                    if(userName === lengthOfData.data[i].username && password === lengthOfData.data[i].password){
                        setAuthTokens(result.data[i]);
                        setLoggedIn(true);
                    }
                }        
            } else {
            setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
        };
        if (isLoggedIn) {
            return <Redirect to="/main" />;
          }
    return(
        <div className = 'mainContainer'>
            <div className = 'header'>
                <span className = 'nba'>National Basketball Association </span>
            </div>
            <div className = 'subHeader'>
                <p className = 'loginTitle'>Login</p>
            </div>
            <form onSubmit={handleSubmit} className= 'inputForm'>
                <input type="text" className='inputUsername' value={userName} onChange={e=>{setUserName(e.target.value)}} placeholder='Username'/>
                <input type="password" className='inputPassword' value={password} onChange={e=>{setPassword(e.target.value)}} placeholder='Password'/>
                <input type="submit" value="Submit" className= 'button'/>
            </form>
            <Link to= {{pathname:'/reg'}} className='link'> Dont have account yet? Click here.</Link>
        </div>
    );
}

export default Login;