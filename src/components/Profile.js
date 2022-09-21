import React from "react"
//Kan være jeg må bruke setUser(retriveUserLocaly)
import '../styles/Profile.css'
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import ProfileHeader from "./profile/ProfileHeader";
import ProfileActions from "./profile/ProfileActions";
import ProfileTranslationHistory from "./profile/ProfileTranslationHistory";

function Profile () {

    const { user, setUser } = useUser();


    return (
        <div className="profile-container">
            <ProfileHeader username = { user.username } translations = { user.translations } />
            <ProfileActions />
            <ProfileTranslationHistory user = { user } setUser = { setUser } />
        </div>
    )
    

    /*
            
            <div className="profile-item">
                <div>
                    <h1 className='profile-title'>User info</h1>
                </div>
                <div className="user-tab">
                    <div className="user-item">
                        <p>Name: {user.username} </p>
                        <button onClick={handleLogOut}>Log out</button>
                    </div>
                </div>
            </div>

            
            <div className="profile-item">
                <div>
                    <h1 className='profile-title'>Translation history</h1>
                </div>
                <div className="history-tab">
                    {user.translations.map((translation, i) => {
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
                    */
}

export default withAuth(Profile);