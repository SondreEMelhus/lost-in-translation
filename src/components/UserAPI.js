/**
 * Function used to store a user in local storage.
 * @param {Object} value - A value to store in local storage
 */
export function storeUserLocaly(value) {
  localStorage.setItem('user', JSON.stringify(value));
}

/**
 * Function used to retrive a user from local storage.
 * @returns Value stored in local storage or null, if no value was stored 
 */
export function retriveUserLocaly() {
    const data = localStorage.getItem('user');
    if (data) {
      return JSON.parse(data);
    }
    return null;
}

/**
 * Function used to delete a value from local storage.
 */
export function deleteUserLocaly() {
  localStorage.removeItem('user');
}

/**
 * Feth a user, if it exists store the user in localstorage, if not add a new user
 * @param {String} username - A username related to a user
 * @returns User object that contains the given username or an error message if no user 
 * could be retrived
 */
export const checkForUser = async (username) => {

  try {
    const apiURL = process.env.REACT_APP_API_URL
    const response = await fetch(`${apiURL}/translations?username=${username}`)
    if (!response.ok) {
      throw new Error ('Could not complete request')
    }
    const data = await response.json();
    return [null, data];

  } catch (error) {
    return [ error.message, null];
  }
}

/**
 * Create a new user and store the user in localstorage
 * @param {String} username - The username of the user we want to create
 * @returns The created user object or an error message, if the user could not be created
 */
export const createUser = async (username) => {
  try {
    const apiURL = process.env.REACT_APP_API_URL
    const apiKey = process.env.REACT_APP_API_KEY


    const response = await fetch(`${apiURL}/translations`, {
        method: 'POST',
        headers: {
          'X-API-Key': apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            username: username, 
            translations: [] 
        })
    })
    if (!response.ok) {
      throw new Error ('Could not create user with username: ' + username)
    }
    const data = await response.json();
    return [null, data];

  } catch (error) {
    return [ error.message, null];
  }      
}

/**
 * Function used to log in a user. Will first check if a user matching the username exists 
 * and try to retrive it. If no user exists with that username, try to create a new user
 * using username.
 * @param {String} username - The username of the user we want to log in
 * @returns  The user object or error message, if no user could be retrived/created
 */
export const loginUser = async (username) => {
  const [checkError, user] = await checkForUser(username);

  if (checkError != null) {
    return [checkError, null];
  }

  if (user.length > 0) {
    return [null, user.pop()]
  }

  return await createUser(username);
}