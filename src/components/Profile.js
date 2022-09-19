import React, { useState } from "react"
import '../styles/Profile.css'

export default function Profile () {

    const [history, setHistory] = useState([{
        id : 1,
        content : "Lorem ipsum"
    },
    {
        id : 2,
        content : "Ipsum lorem"
    }])

    /*
    //Method used to change the state of locations and add a new location to the array
    const addTranslation = (newTranslation) => {
        setTranslations((translations) => [newTranslations, ...translation]);
    };
    */

    const handleLogOut = () => {
        alert('Logging out (Not rly)')
    }

    const removeTranslation = (event) => {
        console.log(event.target.value);
        const newListOfTranslations = history.filter(translation => translation.id != event.target.value);
        setHistory(newListOfTranslations);
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
                        <p>Name: test</p>
                        <button onClick={handleLogOut}>Log out</button>
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
                            <div className="history-item" key={translation.id}>
                                <div className="translation-grid">
                                    <div className='translation-nr'>{i+1 + '.'}</div>
                                    <div>{translation.content}</div>
                                    <button onClick={removeTranslation} value={translation.id} className='translation-button'>x</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}