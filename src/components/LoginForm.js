import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser, storeUserLocaly } from './UserAPI';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import '../styles/LogIn.css'

/**
 * Constant used to define the minumum requirements for a valid username
 * @ required : States wheter a username can be null
 * @ minLength : States the minimum length of a username
 */
const usernameConfig = {
    required: true,
    minLength: 2,
    maxLength: 20
}

/** 
 * @Component
 * Component used to handle the user login. 
 * 
 * Hooks:
 *  - useForm : Hook from react-forms used to create and handle a user submit form.
 *  - useUser : Used to retrive and set the state of the current user.
 *  - useNavigate: Used to navigate to a "new page" when the user has logged in
 *  - useEffect : Used to automaticallu redirect to new page if the user already 
 *                has a valid state
 * 
 * States:
 *  - loading : (Boolean ): Used to manage the state of the current login process
 *  - apiError: (String) : Used to manage the error message recived from API requests
 * 
 * Event handlers:
 *  - onSubmit : Responsible for handling submissions of usernames, 
 *               making API request and changing the state of the current user.
 * 
 * Render functions:
 *  - errorMessage: Renders error messages related to the usernameConfig
 *  @return Renders the username input field and submit button 
 */
const LoginForm = () => {

    //Hooks
    const {register,handleSubmit,formState: { errors }} = useForm();
    const { user, setUser } = useUser();
    const navigate = useNavigate();


    //Local state

    const [ loading, setLoading ] = useState(false);
    const [ apiError, setApiError ] = useState(null)


    //Side effect

    useEffect (()=> {
        if (user !== null) {
            navigate('Translator')
        }
    }, [ user, navigate ])


    //Event handlers

    const onSubmit = async ({ username }) => {
        setLoading(true);
        const [error, userResponse] = await loginUser(username);
        if (error !== null) {
            setApiError(error);
        }
        if (userResponse !== null) {
            storeUserLocaly(userResponse);
            setUser(userResponse);
        }
        setLoading(false);
    };   


    //Render functions

    const errorMessage = (() => {
        if (!errors.username) {
            return null;
        }

        if (errors.username.type === 'required') {
            return (
                <span>Username is required</span>
            )
        }

        if (errors.username.type === 'minLength') {
            return (
                <span>Username is too short(min 2)</span>
            )
        }

        if (errors.username.type === 'maxLength') {
            return (
                <span>Username is too long(max 20)</span>
            )
        }
    })()

    return (
        <div>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <fieldset className='fieldSet'>
                    <input className="input" type="text" placeholder="What's your name?" {...register("username", usernameConfig)}></input>
                    { errorMessage }
                    <button type="submit" className="standardButton" disabled= {loading}>Login</button>
                </fieldset>
            </form>
            { loading && <p>Logging in...</p>}
            { apiError && <p>{ apiError }</p>}
        </div>
    )
}

export default LoginForm;