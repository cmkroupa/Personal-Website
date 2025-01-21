import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import {  faSquarePhone,faSquareEnvelope} from '@fortawesome/free-solid-svg-icons'
import { useState} from "react"
import Typewriter from "~/Typewriter"
import "./About.css"
export default function About() {
    const [state, setState] = useState(0);

    const handleClick = (num : number) => {
        setState(num);
    }

    return (
         <div className="about-container">
            <div className="about-title">
                <h1>Cameron Kroupa</h1>  
            </div>
            <Typewriter textArray={["System.out.print('Welcome');",
                                        "printf('Hello!');",
                                        "print('Meet me.')",
            ]} />
            
            <div className='about-links'>
                <p></p>
                <a href="https://linkedin.com/in/cameron-kroupa-7404ba289"><FontAwesomeIcon onClick={() => handleClick(0)} icon={faLinkedin} /></a>
                <a href="https://github.com/cmkroupa"><FontAwesomeIcon onClick={() => handleClick(0)} icon={faSquareGithub} /></a>
                <a><FontAwesomeIcon onClick={() => handleClick(1)} icon={faSquarePhone} /></a>
                <a><FontAwesomeIcon onClick={() => handleClick(2)}  icon={faSquareEnvelope} /></a>
                
            </div>
            <div className='about-links-info' style={{ minHeight: '1.5em' }}> 
                {(state == 0) && <p>&nbsp;</p>} 
                {(state == 1) && <p>647-612-4670</p>}
                {(state == 2) && <p>ckroupa@uwo.ca</p>}
            </div>
            
        </div>
    )
}