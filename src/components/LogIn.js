import React from "react"
import '../styles/LogIn.css'
import LoginForm from "./LoginForm";

function LogIn () {

    return (
        <div className='logInStyle'>
            <h1 className='pageTitle'>Lost in translation</h1>
            <p className="getStarted">Get started</p>
            <LoginForm />
        </div>
    )
}

export default LogIn