import { deleteUserLocaly } from "../UserAPI";
import { useUser } from "../../context/UserContext";
import { clearTranslations } from "../TranslationHandler";
import '../../styles/Profile.css'


const ProfileActions = () => {

    const {user, setUser} = useUser();

    const handleLogoutClick = async () => {
        if (window.confirm('Are you sure?')) {
            const [error, result] = await clearTranslations(user)
            if (error === null) {
                setUser(null);
                deleteUserLocaly();
            } else {
                alert('Unable to log out')
            }
        }
    }

    return (
            <button className="standardButton" onClick={ handleLogoutClick }>Log out</button>

    )
}

export default ProfileActions