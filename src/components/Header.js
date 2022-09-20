import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import '../styles/index.css'
import '../styles/Header.css'
import logo from '../assets/Logo.png'
import profileLogo from '../assets/profile.svg'

export default function Header () {
    const [user, setUser] = useState({});

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('user'));
        if (userInfo) {
         setUser(userInfo);
        }
      }, []);

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
                        <NavLink className="profileLink" to="/Profile">
                            <p className="profileText">{user.username}</p>
                            <img src={profileLogo} className="profileImage" alt="logo"/>
                        </NavLink>
                    </div>
        </div>
    )
}


