export default function UserDatabase () {
    this.database = new Map();
    this.database.set('test', '123');

    this.checkForUserInDatabase = (username, password) => {
        if (this.database.has(username)) {
            return this.database.get(username) == password ? true : false;
        }
    }

    this.addUser = (username, password) => {
        this.database.set(username, password);
    }
}