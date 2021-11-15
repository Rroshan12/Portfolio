import React from 'react'
import { Link } from 'react-scroll'
import './style.css'

function Header() {
    return (
        <div class=" nav-wrapper flex  center  pa3 ph5-ns  mv4 ">

            <span class=" f3 tc  dim  w-30  pv3 green" id="brand">FullStackHero</span>


            <ul class="w-70 " style={{ display: 'flex', listStyle: 'none', justifyContent: 'flex-end'  }}>
                <li class="mr5"><Link to="about-section" spy={true} smooth={true} class="red f4 dim">Home</Link></li>
                <li class="mr5"><Link to="project-section" spy={true} smooth={true} class="red f4  dim">Project</Link></li>
                <li class="mr5"><Link to="footer-section" spy={true} smooth={true} class="red f4 dim">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Header
