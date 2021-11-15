import React from 'react'
import About from '../About/About'
import './style.css'
import Banner from '../../images/banner.png'


function HeaderBody() {
    return (
        <div className="header-body">

            <div id="about-section">
                <About />
                <div className="image">
                     <img src={Banner} />
                </div>

            </div>
            <div id="project-section">
              my project
            </div>
            <div id="footer-section">
                connect

            </div>



        </div>
    )
}

export default HeaderBody
