import React from 'react'

import facebook from "./assets/face.png"
import linkedin from "./assets/link.png"
import twitter from "./assets/twit.png"

import "./Footer.css"

const Footer = () => {

    return (
        <footer>
            <ul>
                <li>
                    <ul>
                        <li><span>PayApi</span></li>
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </li>
                <li>
                    <div className="social">
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                </li>
            </ul>
        </footer>
    )
}

export default Footer