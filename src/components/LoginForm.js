import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser, storeUserLocaly } from './UserAPI';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const usernameConfig = {
    required: true,
    minLength: 2
}

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

    //Evet handlers
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
    })()

    return (
        <div>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <fieldset>
                    <input type="text" placeholder='username' {...register("username", usernameConfig)}></input>
                    { errorMessage }
                </fieldset>
                <button type="submit" disabled= {loading}>Login</button>
                { loading && <p>Logging in...</p>}
                { apiError && <p>{ apiError }</p>}
            </form>
        </div>
    )
}

export default LoginForm;