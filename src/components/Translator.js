import { useState } from "react"
import '../styles/index.css'

export default function Translator () {

    const [text, translateText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The text you want to translate is: ${text}`); {/*remove this line when done with testing */}
      }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Translate:
                    <input 
                        type="text" 
                        value={text}
                        onChange={(e) => translateText(e.target.value)}
                    />
                    </label>
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}