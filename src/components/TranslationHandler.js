import { updateUser } from "./UserAPI";

export function updateTranslations (user, history, text) {

    if (history.length == 10) {
        let translationToRemove = history[9];
        history = history.filter(translation => translation != translationToRemove)
    } 
    let newHistory = [text, ...history];
    updateUser(user.id, newHistory);
    console.log(newHistory);
    return newHistory;
}