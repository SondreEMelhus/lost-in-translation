import React, { useContext, useState, createContext}  from "react";
import { retriveUserLocaly } from "../components/UserAPI";

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
}

/**
 * @Component
 * 
 * @param {children} param : The children of this component
 * 
 * Component responsible for managing the state of a user
 * 
 * State:
 *  - user : (null) : Responsible for storing the current state of a user
 * 
 * Constant:
 *  - state : Used to store the state of the current user, and the setState to update the 
 *            user state
 * 
 * @returns Wraps the UserContext.Provider around all its childre, allowing them to access 
 *          the state stored in user
 */
export function UserProvider ({ children }) {
    
    //State
    const [user, setUser] = useState( retriveUserLocaly() );

    //Constant
    const state = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={ state }>
                { children }
        </UserContext.Provider>
    )
}