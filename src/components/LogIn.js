import React, { useState, useEffect } from "react"
import UserDatabase from "./Userdatabase"
import Translator from "./Translator";
import { Navigate } from "react-router-dom";
import '../styles/LogIn.css'

export default function LogIn () {

    const [username, setUsername] = useState('');
    const [user, setUser] = useState({});
    const [loginState, setLoginState] = useState(false);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
       }, [user]);

    const handleLogin = async (username) => {

        const apiURL = 'https://assignment2-sign-translator.herokuapp.com'

        fetch(`${apiURL}/translations?username=${username}`)
            .then(response => response.json())
            .then(results => {
                console.log(results.length);
                if (results.length != 0) {
                    setUser(JSON.parse(results));
                    setLoginState(true);
                } else {
                    addUser(username);
                }
            })
            .catch(error => {
            })
    }

    const addUser = async (username) => {
        const apiURL = 'https://assignment2-sign-translator.herokuapp.com'
        const apiKey = 'chAFe94loBrDpnPps1dbnhPEYrMVVvHlmjkC3eTCBVH5gUim9Yquv7XdkS1Jvrkn'

        fetch(`${apiURL}/translations`, {
                method: 'POST',
                headers: {
                'X-API-Key': apiKey,
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    username: `${username}`, 
                    translations: [] 
                })
            })
            .then(response => {
            if (!response.ok) {
                throw new Error('Could not create new user')
            }
            return response.json()
            })
            .then(newUser => {
                console.log('New user begin created');
                setUser(newUser);
                setLoginState(true);
            })
            .catch(error => {
            })
    }

    const handleSubmit = event => {
        event.preventDefault();
        handleLogin(username);
    }

    const handleUserChange = (event) => {
        setUsername(event.target.value);
    }

    return (
        <div className='logInStyle'>
            <h1 className='pageTitle'>Lost in translation</h1>
            <div className="inputBox">
                <div className="grid-container">
                    <form onSubmit={handleSubmit}>
                        <div className="grid-item">
                            <input type="text" placeholder='Username' onChange={handleUserChange}></input>  
                        </div>
                        <div className="grid-item">
                            <button type="submit">Log in</button>
                        </div>
                    </form>
                    {loginState && (<Navigate to='/Translator' replace={true} />
                    )}
                </div>
            </div>
        </div>
    )
}