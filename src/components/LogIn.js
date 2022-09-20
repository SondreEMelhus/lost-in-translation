import React, { useState, useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import { fetchUser, retriveUserLocaly } from "./UserAPI";
import '../styles/LogIn.css'

export default function LogIn () {

    const [username, setUsername] = useState('');
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect (() => {if (retriveUserLocaly()) { 
        setUser(retriveUserLocaly());
        navigate('/Translator', { user: user }); 
    }
    }, [])

    const handleSubmit = event => {
        event.preventDefault();
        //fetchUser(username);
        setUser(fetchUser(username));
        setLoggedIn(true);
        navigate('/Translator', { user: user });
    }

    const handleUserChange = (event) => {
        setUsername(event.target.value);
    }

    /*
    if (loggedIn) {
        return (
            <Navigate to="/Translator" user={user} replace={true}/>
        )
    }
    */


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
                </div>
            </div>
        </div>
    )
}