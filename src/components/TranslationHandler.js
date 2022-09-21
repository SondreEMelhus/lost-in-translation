import { patchUser } from "./UserAPI";

const apiUrl = process.env.REACT_APP_API_URL
const apiKey =  process.env.REACT_APP_API_KEY

export const updateTranslation = async (user, newTranslationList) => {
    try {
        const response = await fetch(`${apiUrl}/translations/${user.id}`, {
            method: 'PATCH', // NB: Set method to PATCH
            headers: {
              'X-API-Key': apiKey,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                translations: newTranslationList
            })
        })

        if (!response.ok) {
            throw new Error ('Could not update translations')
        }

        const result = await response.json();
        return [null, result]

    } catch (error) {
        return [error.message, null];
    }
}


export const  clearTranslations = async (user) => {
    try {
        const response = await fetch(`${apiUrl}/translations/${user.id}`, {
            method: 'PATCH', // NB: Set method to PATCH
            headers: {
              'X-API-Key': apiKey,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                translations: []
            })
        })

        if (!response.ok) {
            throw new Error ('Could not update translations')
        }

        const result = await response.json();
        return [null, result]

    } catch (error) {
        return [error.message, null];
    }
}

export function generateNewTranslations (user, text) {

    let translations = user.translations;
    console.log('Logging translations: ', translations);

    if (translations.length == 10) {
        let translationToRemove = translations[9];
        translations = translations.filter(translation => translation != translationToRemove)
    } 
    let newTranslations = [text, ...translations];

    return newTranslations;
}