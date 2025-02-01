import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons' // Import the specific icon
import { useEffect } from "react";
import "./Nav.css"

export default function Nav() {
    return (
        <nav>
            <div>
                <ul>
                    <li>
                        <a href="#start" className='nav-item'>About</a>

                    </li>
                    <li>
                        <a href="#skills" className='nav-item'>Skills</a>

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
                    <br />
                    <hr />
                    <br />
                    <li>
                        <a href="/Resume.pdf" download className='nav-item'><FontAwesomeIcon icon={faFileArrowDown} /> Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
