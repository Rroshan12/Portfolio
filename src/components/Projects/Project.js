import React from 'react'
import image from '../../images/image80.png'
import './style.css'

function Project() {
    return (
        <div>
         <img src={image} />
         <h2>Project Facedetection</h2>
         <span class="red">Technology Used</span>
         <p class="blue">MongoDb, React, Node, Express, Html, Css, Tachyons</p>
         

        </div>
    )
}

export default Project
