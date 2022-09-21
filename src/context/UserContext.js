import React, { useContext, useState, useEffect, createContext}  from "react";
import { retriveUserLocaly } from "../components/UserAPI";

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
}

export function UserProvider ({ children }) {
    
    const [user, setUser] = useState( retriveUserLocaly() );

    useEffect (() => {
        console.log('Updated user');
    }, [user])

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