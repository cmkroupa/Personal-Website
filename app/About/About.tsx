import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faSquarePhone, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react"
import Typewriter from "~/Typewriter"
import "./About.css"

export default function About() {
    const [state, setState] = useState(0);
    const [age, setAge] = useState("");

    const calculateAge = (birthDate: string) => {
        const birth = new Date(birthDate);
        const now = new Date();

        let diff = now.getTime() - birth.getTime();

        if (diff < 0) {
            return "Invalid birth date (in the future)";
        }

        const years = now.getFullYear() - birth.getFullYear();
        const months = now.getMonth() - birth.getMonth();
        const days = now.getDate() - birth.getDate();
        const hours = now.getHours() - birth.getHours();
        const minutes = now.getMinutes() - birth.getMinutes();
        const seconds = now.getSeconds() - birth.getSeconds();

        let ageYears = years;
        let ageMonths = months;
        let ageDays = days;
        let ageHours = hours;
        let ageMinutes = minutes;
        let ageSeconds = seconds;

        if (ageSeconds < 0) {
            ageSeconds += 60;
            ageMinutes--;
        }
        if (ageMinutes < 0) {
            ageMinutes += 60;
            ageHours--;
        }
        if (ageHours < 0) {
            ageHours += 24;
            ageDays--;
        }
        if (ageDays < 0) {
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            ageDays += prevMonth.getDate();
            ageMonths--;
        }
        if (ageMonths < 0) {
            ageMonths += 12;
            ageYears--;
        }

        return `${ageYears} years, ${ageMonths} months, ${ageDays} days, ${ageHours} hours, ${ageMinutes} minutes, ${ageSeconds} seconds old`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setAge(calculateAge("2006-02-04"));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleClick = (num: number) => {
        if (num === state) {
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
                    Hello! My name is Cameron, I am <strong>{age}</strong> and I am a second-year university student pursuing an Honours Specialization in Computer Science with a Major in Mathematics.
                    I have a deep passion for computer architecture, artificial intelligence, and cybersecurity. I am always eager to explore new concepts and expand my technical expertise.

                    Beyond academics, I enjoy building side projects some of which you can explore below.
                    I also love playing chess and watching random youtube videos about how things are made or diving into an interesting book.
                    I’m always curious about the mechanics behind everyday objects.
                    <br />
                    Learn more about me below!
                </p>
                {(state === 0) && <p style={{ fontWeight: '900' }}>&nbsp;</p>}
                {(state === 1) && <p>647-612-4670</p>}
                {(state === 2) && <p>ckroupa@uwo.ca</p>}
            </div>
            <div className='about-links'>
                <a className="about-links-link" href="https://linkedin.com/in/cameron-kroupa-7404ba289"><FontAwesomeIcon onClick={() => handleClick(0)} icon={faLinkedin} /></a>
                <a className="about-links-link" href="https://github.com/cmkroupa"><FontAwesomeIcon onClick={() => handleClick(0)} icon={faSquareGithub} /></a>
                <a className="about-links-link"><FontAwesomeIcon onClick={() => handleClick(1)} icon={faSquarePhone} /></a>
                <a className="about-links-link"><FontAwesomeIcon onClick={() => handleClick(2)} icon={faSquareEnvelope} /></a>
            </div>
        </div>
    );
}
