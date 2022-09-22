import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"
import { updateTranslation } from "../TranslationHandler";
import { storeUserLocaly } from "../UserAPI";
import React, {useState} from "react";
import '../../styles/Profile.css'

/**Component responsible for displaying a users translation history and handling request to 
 * remove a translation from the translation history  */
const ProfileTranslationHistory = ({ user, setUser }) => {

    //Hook used to retrive a the state of a user
    const [error, setError] = useState();


    //Storing user translations in a local variable for ease of use
    let translations = user.translations;


    /**Event handler used to handle requests to remove a 
    translation from the translation history*/
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

    
    //Renders all the translations in a user translation history. 
    //Each translation is rendered as a uniqe item, to make remove requests easier to handle.
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