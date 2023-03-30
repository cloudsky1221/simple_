import React from 'react'
import "./Card.css"

import bag from "./assets/bag.png"
import card from "./assets/card.png"
import chart from "./assets/chart.png"

export default function Card(props) {
    const {image, heading, para} = props
  return (
    <div className="cards">
      <div className="card">
          <ul>
              <li><img src={bag} alt="" /></li>
              <li><div className="heading">personal finance</div></li>
              <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugiat odio possimus 
                mollitia, quaerat architecto fugit 
                ipsum molestias iure dolores similique. 
                Asperiores, sit?</p></li>
          </ul>
      </div>
      <div className="card">
          <ul>
              <li><img src={chart} alt="" /></li>
              <li><div className="heading">banking coverage</div></li>
              <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugiat odio possimus 
                mollitia, quaerat architecto fugit 
                ipsum molestias iure dolores similique. 
                Asperiores, sit?</p></li>
          </ul>
      </div>
      <div className="card">
          <ul>
              <li><img src={card} alt="" /></li>
              <li><div className="heading">consumer payments</div></li>
              <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugiat odio possimus 
                mollitia, quaerat architecto fugit 
                ipsum molestias iure dolores similique. 
                Asperiores, sit?</p></li>
          </ul>
      </div>
    </div>
  )
}
