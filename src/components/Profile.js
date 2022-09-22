import React from "react"
import '../styles/Profile.css'
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import ProfileHeader from "./profile/ProfileHeader";
import ProfileTranslationHistory from "./profile/ProfileTranslationHistory";

/**
 * @Component
 * 
 * Component responsible for rendering view of a users profile.
 * 
 * Hooks:
 *  - useUser : Used to retrive and set the state of the current user.
 * 
 * Render functions:
 * 
 * @return Renders {@link ProfileHeader} component and {@link ProfileTranslationHistory} component
 */
function Profile () {


    //Hooks
    const { user, setUser } = useUser();


    //Render function
    return (
        <div className="profile-container">
            <div className="profileHistory">
            <ProfileHeader username = { user.username } translations = { user.translations } />
            <ProfileTranslationHistory user = { user } setUser = { setUser } />
            </div>
        </div>
    )
}

export default withAuth(Profile);