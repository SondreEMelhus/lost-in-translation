import { deleteUserLocaly } from "../UserAPI";
import { useUser } from "../../context/UserContext";
import { clearTranslations } from "../TranslationHandler";
import '../../styles/Profile.css'

/**Component responsible for handling a user log out log out action.*/
const ProfileActions = ({ logout }) => {


    //Hook used to retrive a the state of a user
    const {user, setUser} = useUser();


    /** Used to handle when a user clicks the log out button*/
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


    //Renders the log out button
    return (
            <button className="standardButton" onClick={ handleLogoutClick }>Log out</button>

    )
}

export default ProfileActions