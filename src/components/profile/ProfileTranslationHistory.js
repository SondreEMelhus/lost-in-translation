import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"
import { updateTranslation } from "../TranslationHandler";
import { storeUserLocaly } from "../UserAPI";
import React, {useState} from "react";
import '../../styles/Profile.css'

/** 
 * @Component
 * Component responsible for displaying a users translation history and handling request to 
 * remove a translation from the translation history. 
 * 
 * States:
 *  - error: (String) : Used to manage the error message recived from API requests
 * 
 * Event handlers:
 *  - removeTranslation : Responsible for handling requests to remove a translation from
 *                        the translation history
 * 
 * Render functions:
 *  @return Renders all the translations in a user translation history
 */
const ProfileTranslationHistory = ({ user, setUser }) => {

    //Hooks
    const [error, setError] = useState();
    let translations = user.translations;


    //Event handlers
    const removeTranslation = async (event) => {
        let newTranslations = translations.filter(translation => translation !== translations[event.target.value]);
        const [error, result] = await updateTranslation(user, newTranslations)

        if (error === null) {
            setUser(result);
            storeUserLocaly(result);
        } else {
            setError(error);
        }
    }

    
    //Render function
    return (
        <div>
            <h4>Your translation history:</h4>
            {error && <p>{error}</p>}
            {translations.map((translation, index) => {
                                return (
                                    <div className="historyOutput">
                                    <ProfileTranslationHistoryItem translation = {translation} key = {index + '-' + translation} index = {index} removeTranslation = {removeTranslation} />
                                    </div>
                                )
                            }
                        )
                    }
        </div>
    )
}

export default ProfileTranslationHistory