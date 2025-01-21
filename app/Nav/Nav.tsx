import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons' // Import the specific icon

import "./Nav.css"
export default function Nav() {
    return (
        <nav>
            <img/>
            <div>
                <ul>
                    <li>
                        <a className='nav-item'>About</a>
                        
                    </li>
                    <li>
                        <a className='nav-item'>Skills</a>

                    </li>
                    <li>
                        <a className='nav-item'>Education</a>

                    </li>
                    <li>
                        <a className='nav-item'>Projects</a>

                    </li>
                    <li>
                        <a className='nav-item'>Experience</a>

                    </li>
                    <li>
                        <a className='nav-item'>Contact</a>
                    </li>
                    <br/>
                    <hr />
                    <br/>
                    <li>
                        <a className='nav-item'><FontAwesomeIcon icon={faFilePdf} /> Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
