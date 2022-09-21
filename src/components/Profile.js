import React, { useState, useEffect } from "react"
import { Navigate } from "react-router-dom";
import { updateUser, retriveUserLocaly } from "./UserAPI";
import '../styles/Profile.css'

export default function Profile () {

    const [user, setUser] = useState({});
    const [history, setHistory] = useState([])
    const [logOut, setLogOut] = useState(false);

    /*
    //Method used to change the state of locations and add a new location to the array
    const addTranslation = (newTranslation) => {
        setTranslations((translations) => [newTranslations, ...translation]);
    };
    */

    useEffect(() => {
        const userInfo = retriveUserLocaly();
        if (userInfo) {
         setUser(userInfo);
         setHistory(userInfo.translations)
        }
      }, []);

    const handleLogOut = () => {
        localStorage.clear();
        setLogOut(true);
    }

    const removeTranslation = (event) => {
        const newListOfTranslations = history.filter(translation => translation != event.target.value);
        setHistory(newListOfTranslations);
        updateUser(user.id, newListOfTranslations);
    }

    return (
        <div className="profile-container">
            
            {/* Profile tab */}
            <div className="profile-item">
                <div>
                    <h1 className='profile-title'>User info</h1>
                </div>
                <div className="user-tab">
                    <div className="user-item">
                        <p>Name: {user.username} </p>
                        </div>
                    <div className="buttonBox">
                        <button className="standardButton" onClick={handleLogOut}>Log out</button>
                        </div>
                </div>
            </div>

            {/* History tab */}
            <div className="profile-item">
                <div>
                    <h1 className='profile-title'>Translation history</h1>
                </div>
                <div className="history-tab">
                    {history.map((translation, i) => {
                        return (
                            <div className="history-item" key={i+ 1}>
                                <div className="translation-grid">
                                    <div className='translation-nr'>{i + 1 + '.'}</div>
                                    <div>{translation}</div>
                                    <button onClick={removeTranslation} value={translation} className='translation-button'>x</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {logOut && (<Navigate to='/' replace={true} />
                    )}
        </div>
    )
}