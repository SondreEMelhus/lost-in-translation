import { deleteUserLocaly } from "../UserAPI";
import { useUser } from "../../context/UserContext";
import { clearTranslations } from "../TranslationHandler";

/** 
 * @Component
 * Component used to handle the actions on the profile page. 
 * 
 * Hooks:
 *  - useUser : Used to retrive and set the state of the current user.
 * 
 * Event handlers:
 *  - handleLogoutClick : Responsible for handling the logout action on profile page 
 * 
 * Render functions:
 *  @return Renders the log out button
 */
const ProfileActions = ({ logout }) => {

    //Hook
    const {user, setUser} = useUser();


    //Event handler
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


    //Render function
    return (
        <div>
            <button onClick={ handleLogoutClick }>Log out</button>
        </div>

    )
}

export default ProfileActions