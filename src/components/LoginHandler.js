export const fetchUser = async (username) => {

    const apiURL = 'https://assignment2-sign-translator.herokuapp.com'

    fetch(`${apiURL}/translations?username=${username}`)
        .then(response => response.json())
        .then(results => {
            if (results.length != 0) {
                console.log(results[0]);
                localStorage.setItem('user', JSON.stringify(results[0]));
            } else {
                addUser(username);  
            }
        }).catch(error => {
        })
}

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
                translations: ['Lorem ipsum', 'Ipsum lorem'] 
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
          console.log(newUser.length);
          console.log(newUser);
          localStorage.setItem('user', JSON.stringify(newUser));
        })
        .catch(error => {
        })
}