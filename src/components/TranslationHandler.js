
/**
 * Constant used to store a refrence to API url located in enviroment variables
 */
const apiUrl = process.env.REACT_APP_API_URL

/**
 * Constant used to store a refrence to API key located in enviroment variables
 */
const apiKey =  process.env.REACT_APP_API_KEY

/**
 * Function responsible for updating a users information using API PATCH request.
 * @param {Object} user - A user object
 * @param {Array} newTranslationList - An array containing the new translations
 * @returns Patched user object or error message
 */
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

/**
 * Function used to clear a users translation history.
 * @param {Obejct} user - A user object 
 * @returns Patched user object with no translations or error message
 */
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

/**
 * Function used to genereate a new array of translations and  add a new translation.
 * @param {Object} user 
 * @param {String} text 
 * @returns New array with modified translation elements
 */
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