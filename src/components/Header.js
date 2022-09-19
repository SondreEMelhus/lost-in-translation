import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/index.css'
import '../styles/Header.css'
import logo from '../assets/Logo.png'
import profileLogo from '../assets/profile.svg'

export default function Header () {

    function getUser(){
        return "  Sondre  ";
    }

    return (
        <div className="header">
                    <div>
                    <img src={logo} className="headerLogo" alt="logo"/>
                    </div>
                    <div className="headerTitle">
                        <h1>Lost in translation</h1>
                    </div>
                    <div className="headerProfileLink">
                        <NavLink className="profileLink" to="/Profile">
                            <p className="profileText">{getUser()}</p>
                            <img src={profileLogo} className="profileImage" alt="logo"/>
                        </NavLink>
                    </div>
        </div>
    )
}