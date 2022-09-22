import React from "react"
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
            <ProfileTranslationHistory user = { user } setUser = { setUser } />
            <ProfileActions />
        </div>
    )
}

export default withAuth(Profile);