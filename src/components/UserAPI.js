//Function used to store a user in localstorage
export function storeUserLocaly(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

//Function used to retrive a user from localstorage
export function retriveUserLocaly() {
    return JSON.parse(localStorage.getItem('user'));
}

//Feth a user, if it exists store the user in localstorage, if not add a new user
export const fetchUser = async (username) => {

    const apiURL = 'https://assignment2-sign-translator.herokuapp.com'

    fetch(`${apiURL}/translations?username=${username}`)
        .then(response => response.json())
        .then(results => {
            if (results.length != 0) {
                storeUserLocaly(results[0]);
            } else {
                addUser(username);  
            }
        }).catch(error => {
        })
}

//Create a new user and store the user in localstorage
const addUser = async (username) => {
    const apiURL = 'https://assignment2-sign-translator.herokuapp.com'
    const apiKey = 'chAFe94loBrDpnPps1dbnhPEYrMVVvHlmjkC3eTCBVH5gUim9Yquv7XdkS1Jvrkn'
    
    fetch(`${apiURL}/translations`, {
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
        .then(response => {
          if (!response.ok) {
            throw new Error('Could not create new user')
          }
          return response.json()
        })
        .then(newUser => {
          // newUser is the new user with an id
          storeUserLocaly(newUser);
        })
        .catch(error => {
        })
}

//Update a users translations(you need to provide a array of translations)
export const updateUser = async (userId, newTranslations) => {
  const apiURL = 'https://assignment2-sign-translator.herokuapp.com'
  const apiKey = 'chAFe94loBrDpnPps1dbnhPEYrMVVvHlmjkC3eTCBVH5gUim9Yquv7XdkS1Jvrkn'

fetch(`${apiURL}/translations/${userId}`, {
        method: 'PATCH', // NB: Set method to PATCH
        headers: {
          'X-API-Key': apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Provide new translations to add to user with given id
            translations: newTranslations
        })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not update translations history')
      }
      return response.json()
    })
    .then(updatedUser => {
      // updatedUser is the user with the Patched data
      localStorage.setItem('user', JSON.stringify(updatedUser))
    })
    .catch(error => {
    })
}