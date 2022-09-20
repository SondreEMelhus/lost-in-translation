import React, { useState, useEffect } from "react"
import { Navigate } from "react-router-dom";
import { fetchUser, retriveUserLocaly } from "./UserAPI";
import '../styles/LogIn.css'

export default function LogIn () {

    const [username, setUsername] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect (() => {if (retriveUserLocaly()) { 
        setLoggedIn(true); 
    }
    }, [])

    const handleSubmit = event => {
        event.preventDefault();
        fetchUser(username);
        setLoggedIn(true);
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
                    {loggedIn && (<Navigate to="/Translator" replace={true} />)}
                </div>
            </div>
        </div>
    )
}