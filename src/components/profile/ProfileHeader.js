const ProfileHeader = ({ username, translations }) => {
    return (
        <header>
            <h4>Welcome to your profile {username}.</h4>
            <p>Below is a list of your last {translations.length} translations (max 10).</p>
            <p>If you would like to remove a translation, press the "X" button on the right side of the translation.</p>
        </header>
    )
}

export default ProfileHeader;