//Function used to store a user in localstorage
export function storeUser() {
    
}

//Function used to retrive a user from localstorage
export function retriveUser() {
    return JSON.parse(localStorage.getItem('user'));
}