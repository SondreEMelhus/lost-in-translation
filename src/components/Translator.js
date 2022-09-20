import { useState, useEffect} from "react"
import { InputGroup, Input, Button } from "react-bootstrap";
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

//Imports to store user translations
import { retriveUserLocaly } from './UserAPI'
import {updateTranslations} from './TranslationHandler'

export default function Translator (props) {

    /*
    const apiURL = 'https://assignment2-sign-translator.herokuapp.com'
    */

    const [text, setText] = useState('');
    const [user, setUser] = useState({});
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const userInfo = retriveUserLocaly();
        if (userInfo) {
         setUser(userInfo);
         setHistory(userInfo.translations)
        }
      }, [text]);


    const handleSubmit = (event) => {
        event.preventDefault();
        setHistory(updateTranslations(user, history, text));
        var imageParent = document.getElementById("translationOutputBox");
        imageParent.innerHTML = ""; // removes any previous translation elements
        for (let char of text) {
            // TODO deal with whitespaces
            if (/^[a-z]+$/i.test(char)) { // checks if the character is a letter between a-z
                char = char.toLowerCase();
                var image = document.createElement("img");
                image.className = "signImage";
                image.alt = char;
                image.src = getImgPath(char);
                imageParent.appendChild(image);
            }
        }
    }

    const handleInput = (event) => {
        setText(event.target.value);
    }


    function getImgPath(char) {
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
            default:
                path = z;
                break;
          }
          return path;
    }

    return (
        <div className="translation">
            <div className="container" class="d-flex justify-content-center" id="translationInputBox">
                <form onSubmit={handleSubmit}>
                    <label>
                    <div className="input-group mb-3">  
                            <input type="text" className="form-control" placeholder="Translate" aria-label="Translate" aria-describedby="basic-addon2" onChange={handleInput} onFocus={(e) => {
                            e.target.value = '';}}></input>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="submit">Submit</button>
                            </div>
                        </div>
                    </label>
                </form>
            </div>
            <div className="container" id="translationOutputBox"></div>
        </div>
    )
}