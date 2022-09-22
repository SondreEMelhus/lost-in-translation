import ProfileActions from "./profile/ProfileActions";
/**Component used to render the profile header. Contains a render function that renders a 
 *custom welcome message, and explains how the translation history in Profile works.*/
const ProfileHeader = ({ username, translations }) => {
    
    return (
        <header>
            <h4>Welcome to your profile {username}.</h4>
            <p>To the right is a list of your last {translations.length} translations (max 10).</p>
            <p>If you would like to remove a translation, press the "X" button on the right side of the translation.</p>
            <div className="logOut">
                <ProfileActions />
            </div>
        </header>
    )
}

export default ProfileHeader;