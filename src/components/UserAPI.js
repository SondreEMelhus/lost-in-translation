//Function used to store a user in localstorage
export function storeUserLocaly(value) {
  localStorage.setItem('user', JSON.stringify(value));
}

//Function used to retrive a user from localstorage
export function retriveUserLocaly() {
    const data = localStorage.getItem('user');
    if (data) {
      return JSON.parse(data);
    }
    return null;
}

export function deleteUserLocaly() {
  localStorage.removeItem('user');
}

//Feth a user, if it exists store the user in localstorage, if not add a new user
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

//Create a new user and store the user in localstorage
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