import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons' // Import the specific icon
import { useEffect } from "react";
import "./Nav.css"

export default function Nav() {
    return (
        <nav>
            <img/>
            <div>
                <ul>
                    <li> 
                        <a href="#start" className='nav-item'>About</a>
                        
                    </li>
                    <li>
                        <a href="#skills"  className='nav-item'>Skills</a>

                    </li>
                    <li>
                        <a href="#education" className='nav-item'>Education</a>

                    </li>
                    <li>
                        <a href="#projects" className='nav-item'>Projects</a>

                    </li>
                    <li>
                        <a href="#experience" className='nav-item'>Experience</a>

                    </li>
                    <li>
                        <a href="#contact" className='nav-item'>Contact</a>
                    </li>
                    <br/>
                    <hr />
                    <br/>
                    <li>
                        <a className='nav-item'><FontAwesomeIcon icon={faDownload} /> Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
