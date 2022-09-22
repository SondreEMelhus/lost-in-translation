import React from "react"
import '../styles/index.css'
import '../styles/Footer.css'

/**
 * @Component
 * 
 * Component responsible for rendering the view of the page footer
 * 
 * @returns A rendered view of the page footer
 */
export default function Footer () {

    return (
        <div className="footer">
            <footer>
                <div className="footerText">
                    by Karoline Øijorden, Sondre Melhus, and Vegard Gunnarson
                </div>
            </footer>
        </div>
    )
}