import { useState } from "react"
import '../styles/index.css'

export default function Translator () {

    const apiURL = 'https://assignment2-sign-translator.herokuapp.com'
    const username = 'dewaldels'

    fetch(`${apiURL}/translations?username=${username}`)
        .then(response => response.json())
        .then(results => {
            console.log(results);
        })
        .catch(error => {
    })

    const [text, translateText] = useState("");
    

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The text you want to translate is: ${text}`); {/*remove this line when done with testing */}
        for (let char in text) {
            // TODO check if it is a valid character first
            let sign = "src\assets\individial_signs\"; {/*+ char + "\png";*/}
        }
      }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                    <input 
                        type="text" 
                        value={text}
                        placeholder="Translate"
                        onChange={(e) => translateText(e.target.value)}
                    />
                    </label>
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}