import React, {  useState } from 'react'
import Button from '../Button/Button'

import "./Navbar.css"

const Navbar = (props) => {
    const [isclicked, setisclicked] = useState(false)


    return (
        <nav>
            <ul className='regular'>
                <li>
                    <ul>
                        <li><span>PayApi</span></li>
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </li>
                <li><Button /></li>
            </ul>
            <ul className='hamburger'>
                <li><span>PayApi</span></li>
                <li><button onClick={() => setisclicked(true)}>c</button></li>
            </ul>
            <ul className="hidden" style={{display:`${isclicked ? "grid":"none"}`}}>
                <li><button onClick={() => setisclicked(false)}>x</button></li>
                <li>pricing</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </nav>
    )
}

export default Navbar