import React from 'react'
import Button from '../Button/Button'

import phone from "./assets/phone.png"

import "./Hero.css"

export default function Hero() {
  return (
    <section>
        <div className="contents">
            <div className="text" >
                <h1>Start building with our APIs for absolutely free.</h1>
                <div className="input">
                    <input type="email" name="" id="" placeholder={"enter email address"}/>
                    <Button />
                </div>
                <div className="sub">
                    have any question?<a href="#">contact us</a>
                </div>
            </div>
            <div className="image">
                <img src={phone} alt="" />
            </div>
        </div>
    </section>
  )
}
