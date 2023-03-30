import React from 'react'

import paid from "./assets/paid.png"
import terminal from "./assets/terminal.png"

import "./Advantages.css"

function Advantages() {
  return (
    <div className="advantage-wrapper">
      <div className="content">
        <div className="image">
          <img src={terminal} alt="" />
        </div>
        <div className="info">
          <div className="head">easy to implement</div>
          <div className="body" >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Minima repudiandae nostrum quia ullam blanditiis, ab similique neque nihil 
            adipisci dolorum?
          </div>
        </div>
      </div>
      <div className="content">
        <div className="info">
          <div className="head">simple ui/ux</div>
          <div className="body" >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Minima repudiandae nostrum quia ullam blanditiis, ab similique neque nihil 
            adipisci dolorum?
          </div>
        </div>
        <div className="image">
          <img src={paid} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Advantages