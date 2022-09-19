import React, { useState } from "react"
import UserDatabase from "./Userdatabase"
import Translator from "./Translator";
import { Navigate } from "react-router-dom";
import '../styles/LogIn.css'

export default function LogIn () {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginState, setLoginState] = useState(false);

    const database = new UserDatabase();

    const handleSubmit = event => {
        event.preventDefault();

        if (database.checkForUserInDatabase(username, password)) {
            setLoginState(true);

        } else {
            alert('Invalid user credentials') 
        }
    }

    const handleUserChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePassChange = (event) => {
        setPassword(event.target.value)
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
                            <input type="password" placeholder='Password' onChange={handlePassChange}></input>
                        </div>
                        <div className="grid-item">
                            <button type="submit">Log in</button>
                        </div>
                    </form>
                    {loginState && (<Navigate to="/Translator" replace={true} />
                    )}
                </div>
            </div>
        </div>
    )
}