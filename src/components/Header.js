import React from "react";
import NavLink from "react-router-dom";

export default function Header () {

    return (
        <div>
            <header>
                <div>
                    <NavLink className="btn" to="/Profile">Profile</NavLink>
                </div>
            </header>
        </div>
    )
}