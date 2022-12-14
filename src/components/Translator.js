import { useState } from "react"
import '../styles/index.css'
import '../styles/Translator.css'
import a from '../assets/individial_signs/a.png'
import b from '../assets/individial_signs/b.png'
import c from '../assets/individial_signs/c.png'
import d from '../assets/individial_signs/d.png'
import e from '../assets/individial_signs/e.png'
import f from '../assets/individial_signs/f.png'
import g from '../assets/individial_signs/g.png'
import h from '../assets/individial_signs/h.png'
import i from '../assets/individial_signs/i.png'
import j from '../assets/individial_signs/j.png'
import k from '../assets/individial_signs/k.png'
import l from '../assets/individial_signs/l.png'
import m from '../assets/individial_signs/m.png'
import n from '../assets/individial_signs/n.png'
import o from '../assets/individial_signs/o.png'
import p from '../assets/individial_signs/p.png'
import q from '../assets/individial_signs/q.png'
import r from '../assets/individial_signs/r.png'
import s from '../assets/individial_signs/s.png'
import t from '../assets/individial_signs/t.png'
import u from '../assets/individial_signs/u.png'
import v from '../assets/individial_signs/v.png'
import w from '../assets/individial_signs/w.png'
import x from '../assets/individial_signs/x.png'
import y from '../assets/individial_signs/y.png'
import z from '../assets/individial_signs/z.png'
import space from '../assets/individial_signs/space.png'

//Imports to store user translations
import { useUser } from '../context/UserContext';
import { generateNewTranslations, updateTranslation } from "./TranslationHandler"
import withAuth from "../hoc/withAuth"
import { storeUserLocaly } from '../components/UserAPI'

/**
 * @Component
 * Component responsible for rendering a view of the translator.
 * 
 *  Hooks:
 *  - useUser : Used to retrive and set the state of the current user.
 *  
 * States:
 *  - test : (String): Used to manage the state of the text input by the user
 *  - translating: (Boolean) : Used to manage the state of translation process
 *  - error : (String) : Used to manage the state of error messages
 * 
 * Event handlers:
 *  - storeTranslation : Responsible for handling the storing of a translation 
 *                       in the user object
 *  - handleSubmit : Responsible for handling submissions of user input for translation
 *  - handleInput : Responsible for updating the state of text when changes happen in 
 *                  translation input field
 *  - validateInput : Responsible for validating user input
 *  
 * Functions: 
 *  - getImage : Responsible for retriving a image that that correlates to a given character      
 * 
 * Render functions:
 *  - errorMessage: Renders error messages related to the usernameConfig
 * @returns Renders the translation input field, translate submit button and translation box 
 */
function Translator () {

    //Hook
    const { user, setUser } = useUser();

    //States
    const [text, setText] = useState('');
    const [translating, setTranslating] = useState(false);
    const [error, setError] = useState();


    //Event handlers
    /**
     * Function used to add a new translation to a user, and update that user via API PATCH
     * request.
     * 
     * @returns Updated User object
     */
    const storeTranslation = async () => {
        console.log(text);
        if (text == '') {
            alert('Please enter a word to translate');
            return
        }

        const newTranslations = generateNewTranslations(user, text);

        const [error, result] = await updateTranslation(user, newTranslations)

        if (error === null) {
            setUser(result);
            storeUserLocaly(result);
        } else {
            setError(error);
        }
    }

    /**
     * Function used to valide a users input. Makes sure that a user can only submit
     * alphabet characters, no number or special characters.
     * @returns A boolean declaring the validity of the user input
     */
    const validateInput = () => {
        for (let char of text) {
            if (!/^[a-z\s]+$/i.test(char)) {
                return false;
            }
        }
        return true;
    } 

    /**
     * Function used to handle submission of a users input for translation. 
     * The function validates the input, adds the translation to the translation history 
     * and updates the user. Then it parses the input and displays the corresponding
     * images for each character.
     * @param {*} event 
     */
    const handleSubmit = (event) => {
        setTranslating(true);
        event.preventDefault();
        if (validateInput()) {
            storeTranslation();
            var imageParent = document.getElementById("translationBox");
            imageParent.innerHTML = ""; // removes any previous translation elements
            let translationInput = text.substring(0, 40); // sets the translation to max 40 characters
            for (let char of translationInput) {
                char = char.toLowerCase();
                var image = document.createElement("img");
                image.className = "signImage";
                image.alt = char;
                image.src = getImage(char);
                imageParent.appendChild(image);
            }
        } else {
            setError('Invalid input (Only characters)')
        }
        setTranslating(false);
    }

    /**
     * Function used to handle any changes in the user input field.
     * Also responsible for changing the state of the error message.
     * @param {*} event 
     */
    const handleInput = (event) => {
        if (error !== null) {
            setError(null);
        }
        setText(event.target.value);
    }

    /**
     * Function used to finc a image corresponding to a given character.
     * @param {Character} char 
     * @returns Path to image corresponding to char
     */
    function getImage(char) {
        let path = "";
        switch(char) {
            case 'a':
              path = a;
              break;
            case 'b':
                path = b;
                break;
            case 'c':
                path = c;
                break;
            case 'd':
                path = d;
                break;
            case 'e':
                path = e;
                break; 
            case 'f':
                path = f;
                break; 
            case 'g':
                path = g;
                break;
            case 'h':
                path = h;
                break;
            case 'i':
                path = i;
                break;
            case 'j':
                path = j;
                break;
            case 'k':
                path = k;
                break;
            case 'l':
                path = l;
                break;
            case 'm':
                path = m;
                break;
            case 'n':
                path = n;
                break;
            case 'o':
                path = o;
                break;
            case 'p':
                path = p;
                break;
            case 'q':
                path = q;
                break;
            case 'r':
                path = r;
                break;
            case 's':
                path = s;
                break;
            case 't':
                path = t;
                break;
            case 'u':
                path = u;
                break;
            case 'v':
                path = v;
                break;
            case 'w':
                path = w;
                break;
            case 'x':
                path = x;
                break;
            case 'y':
                path = y;
                break;
            case 'z':
                path = z;
                break;
            default:
                path = space;
                break;
          }
          return path;
    }

    //Render function
    return (
        <div className="grid">
            <div className="inputs">
                <form onSubmit={handleSubmit}>
                    <label>
                    <input
                        className="inputText"
                        type="text" 
                        value={text}
                        placeholder="Translate"
                        onFocus={(e) => {
                            e.target.value = '';
                          }}
                        onChange={handleInput}
                    />
                    </label>
                    <input type="submit" className="standardButton" value="Submit"/>
                    {error && <p className="errorText">{error}</p>}
                </form>
            </div>
            <div id="translationBox"></div>
        </div>
    )
}

export default withAuth(Translator)