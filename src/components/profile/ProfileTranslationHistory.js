import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"
import { updateTranslation } from "../TranslationHandler";
import { storeUserLocaly } from "../UserAPI";
import React, {useState} from "react";

const ProfileTranslationHistory = ({ user, setUser }) => {

    const [error, setError] = useState();

   let translations = user.translations;

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

    return (
        <div>
            <h4>Your translation history:</h4>
            {error && <p>{error}</p>}
            {translations.map((translation, index) => {
                                return (
                                    <ProfileTranslationHistoryItem translation = {translation} key = {index + '-' + translation} index = {index} removeTranslation = {removeTranslation}  />
                                )
                            }
                        )
                    }
        </div>
    )
}

export default ProfileTranslationHistory