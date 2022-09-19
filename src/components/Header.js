import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/index.css'

export default function Header () {

    return (
        <div className="header">
            <header>
                <div>
                    <NavLink to="/Profile">Profile</NavLink>
                </div>
            </header>
        </div>
    )
}