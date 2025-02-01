import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faSquarePhone, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import Typewriter from "~/Typewriter"
import "./About.css"
export default function About() {
    const [state, setState] = useState(0);

    const handleClick = (num: number) => {
        if (num == state) {
            setState(0);
        } else {
            setState(num);
        }

    }

    return (
        <div id="about-container" className="about-container">
            <div className='about-title-div'>
                <h1 style={{ color: 'var(--fourth-color)' }} className='title'>Cameron</h1>
                <h1 style={{ color: 'var(--primary-color)' }} className='title'>&nbsp;&nbsp;Kroupa</h1>
            </div>
            <div className='about-animation'>
                <Typewriter textArray={[
                    "System.out.print('Welcome');",   // Java
                    "printf('Hello!');",              // C
                    "print('Meet me.')",              // Python
                    "console.log('Hey there!');",      // JavaScript
                    "cout << 'Hello, world!';",        // C++
                ]} />

            </div>
            <div className='about-intro'>
                <p>
                    Hello! I am a second-year university student pursuing an Honours Specialization in Computer Science with a Major in Mathematics.
                    I have a deep passion for computer architecture, artificial intelligence, cybersecurity, and cryptography, and I am always eager to explore new concepts and expand my technical expertise.

                    Beyond academics, I enjoy building side projects, experimenting with emerging technologies, and tackling complex problems—some of which you can explore below.
                    I also love playing chess, which sharpens my strategic thinking, and golf, which provides the perfect blend of patience and precision.

                    When I’m not coding or studying, you might find me watching random youtube videos about how things are made, solving puzzles, or diving into an interesting book.
                    I’m always curious about the mechanics behind everyday objects and enjoy learning about the world in unexpected ways.
                    <br />
                    Learn more about me below!
                </p>
                {(state == 0) && <p style={{ fontWeight: '900' }}>&nbsp;</p>}
                {(state == 1) && <p>647-612-4670</p>}
                {(state == 2) && <p>ckroupa@uwo.ca</p>}
            </div>
            <div className='about-links'>
                <a className="about-links-link" href="https://linkedin.com/in/cameron-kroupa-7404ba289"><FontAwesomeIcon onClick={() => handleClick(0)} icon={faLinkedin} /></a>
                <a className="about-links-link" href="https://github.com/cmkroupa"><FontAwesomeIcon onClick={() => handleClick(0)} icon={faSquareGithub} /></a>
                <a className="about-links-link"><FontAwesomeIcon onClick={() => handleClick(1)} icon={faSquarePhone} /></a>
                <a className="about-links-link"><FontAwesomeIcon onClick={() => handleClick(2)} icon={faSquareEnvelope} /></a>
            </div>


        </div>
    )
}