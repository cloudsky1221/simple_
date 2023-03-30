import React from 'react'

import hp from "./assets/hp.png"
import microsoft from "./assets/micro.png"
import nvidia from "./assets/nvi.png"
import oracle from "./assets/ora.png"
import tesla from "./assets/tes.png"

import "./Banner.css"

export default function Banner() {
  return (
    <div className="banner-wrapper">
        <div className="circle"></div>
        <div className="content">
            <div className="text">
                <div className="head">who we work with</div>
                <div className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique soluta 
                    pariatur ad ullam quibusdam distinctio sunt ipsum officiis nostrum, reprehenderit id architecto, 
                    necessitatibus alias sint dignissimos. Architecto 
                    autem quasi reprehenderit eius culpa minima libero ex ducimus voluptatum. Minus, deserunt explicabo?
                </div>
                <button>about us</button>
            </div>
            <div className="img">
              <div className="icon">
                <img src={tesla} alt="" />
                <img src={microsoft} alt="" />
                <img src={hp} alt="" />
              </div>
              <div className="words">
                <img src={oracle} alt="" />
                <img src={nvidia} alt="" />
              </div>
            </div>
        </div>
    </div>
  )
}
