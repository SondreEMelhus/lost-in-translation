import React from "react";
import { NavLink } from "react-router-dom"; 
import '../styles/index.css'
import '../styles/Header.css'
import logo from '../assets/Logo.png'
import profileLogo from '../assets/profile.svg'
import { useUser } from '../context/UserContext';

export default function Header () {
    const { user } = useUser();

    return (
        <div className="header">
            <div className="titleAndLogo">
                    <NavLink to="/Translator">
                    <img src={logo} className="headerLogo" alt="logo"/>
                    </NavLink>
                    <div className="headerTitle">
                        <h1>Lost in translation</h1>
                    </div>
            </div>
                    <div className="headerProfileLink">
                        {(user !== null) && <NavLink className="profileLink" to="/Profile">
                            <p className="profileText">{user.username}</p>
                            <img src={profileLogo} className="profileImage" alt="logo"/>
                        </NavLink>}
                    </div>
        </div>
    )
}


