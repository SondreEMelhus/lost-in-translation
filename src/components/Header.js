import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/index.css'
import '../styles/Header.css'
import logo from '../assets/Logo.png'

export default function Header () {

    return (
        <div className="header">
                    <div>
                    <img src={logo} className="headerLogo" alt="logo"/>
                    </div>
                    <div className="headerTitle">
                        <h1>Lost in translation</h1>
                    </div>
                    <div className="headerProfileLink">
                        <NavLink to="/Profile"><img src={logo} className="profileButton" alt="logo"/></NavLink>
                    </div>
        </div>
    )
}