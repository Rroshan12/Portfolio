import React from 'react'
import About from '../About/About'
import './style.css'
import Banner from '../../images/banner.png'
import Project from '../Projects/Project'
import Footer from '../Footer/Footer'



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
                <h1 >Project </h1>
              <Project />
            </div>

            <div id="footer-section" >
               <h1>Connect</h1>
               
              
               <Footer/>

            </div>



        </div>
    )
}

export default HeaderBody
