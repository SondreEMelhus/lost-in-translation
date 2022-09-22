import React from "react"
import '../styles/Profile.css'
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import ProfileHeader from "./profile/ProfileHeader";
import ProfileActions from "./profile/ProfileActions";
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
 * @return Renders {@link ProfileHeader} component, {@link ProfileActions} component 
 * and {@link ProfileTranslationHistory} component
 */
function Profile () {


    //Hooks
    const { user, setUser } = useUser();


    //Render function
    return (
        <div className="profile-container">
            <ProfileHeader username = { user.username } translations = { user.translations } />
            <ProfileActions />
            <ProfileTranslationHistory user = { user } setUser = { setUser } />
        </div>
    )
}

export default withAuth(Profile);