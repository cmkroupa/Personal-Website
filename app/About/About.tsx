import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import {  faSquarePhone,faSquareEnvelope} from '@fortawesome/free-solid-svg-icons'
import { useState} from "react"
import Typewriter from "~/Typewriter"
import "./About.css"
export default function About() {
    const [state, setState] = useState(0);

    const handleClick = (num : number) => {
        if (num == state) {
            setState(0);
        } else {
            setState(num);    
        }
        
    }

    return (
        <div className="about-container">
            <div className='about-title-div'>
                <h1 style={{ color: 'var(--fourth-color)' }} className='about-title'>Cameron</h1>
                <h1 style={{ color: 'var(--primary-color)' }} className='about-title'>&nbsp;&nbsp;Kroupa</h1>  
            </div>
            <div className='about-animation'>
                <Typewriter textArray={["System.out.print('Welcome');",
                    "printf('Hello!');",
                    "print('Meet me.')",
                ]} />
            </div>
            <p className='about-intro'>
                Hello, I am a second year university student pursuing a Honours Specialization in Computer Science and Major in Math.
                I am passionate about learning about computer architecture artificial intelligence, cybersecurity and cryptography.
                Outside of schooling I work on side projects for fun (some are found below) and play chess.
                <br />
                Learn more about me below!

                {(state == 0) && <p style={{fontWeight: '900'}}>&nbsp;</p>}
                {(state == 1) && <p>647-612-4670</p>}
                {(state == 2) && <p>ckroupa@uwo.ca</p>}
            </p>
            <div className='about-links'>
                <a className="about-links-link" href="https://linkedin.com/in/cameron-kroupa-7404ba289"><FontAwesomeIcon onClick={() => handleClick(0)} icon={faLinkedin} /></a>
                <a className="about-links-link" href="https://github.com/cmkroupa"><FontAwesomeIcon onClick={() => handleClick(0)} icon={faSquareGithub} /></a>
                <a className="about-links-link"><FontAwesomeIcon onClick={() => handleClick(1)} icon={faSquarePhone} /></a>
                <a className="about-links-link"><FontAwesomeIcon onClick={() => handleClick(2)}  icon={faSquareEnvelope} /></a>
            </div>
            
            
        </div>
    )
}