import React from "react"
import '../styles/LogIn.css'
import LoginForm from "./LoginForm";

/**
 * @Component
 * 
 * Component responsible for rendering a view of the user login.
 * 
 * Render functions:
 *  @return Renders page title and {@link LoginForm} form component
 */
function LogIn () {

    
    //Render functions
    return (
        <div className='logInStyle'>
            <h1 className='pageTitle'>Lost in translation</h1>
            <LoginForm />
        </div>
    )
}

export default LogIn