import { deleteUserLocaly } from "../UserAPI";
import { useUser } from "../../context/UserContext";
import { clearTranslations } from "../TranslationHandler";

const ProfileActions = ({ logout }) => {

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
        <div>
            <button onClick={ handleLogoutClick }>Log out</button>
        </div>

    )
}

export default ProfileActions