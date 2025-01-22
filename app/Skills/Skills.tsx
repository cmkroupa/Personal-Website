import "./Skills.css"
import { useState } from 'react'

export default function Skills() {
    const [numbers, setNumbers] = useState<number[]>([]);

    // Function to add a new number to the list
    const addNumber = (num: number, remove: boolean) => {
        if (remove) {
            setNumbers(numbers.filter(n => n !== num)); // Remove the number
        } else {
            if (!numbers.includes(num)) {
                setNumbers([...numbers, num]); // Add the number
            }
        }
    };

    return (
        <div id="skills" className="skills-container">
            <div className="skills-title">
                <h1 style={{ color: 'var(--fourth-color)' }} className='about-title'>Skills</h1>
            </div>
            <div className="skills-all">
                <div className="skills-skill">
                    <h2 className="skills-skill-title">Programming Languages</h2>
                    
                        <ul className="skills-list">
                            <li className="skills-list-item">Python</li>
                            <li className="skills-list-item">Java</li>
                            <li className="skills-list-item">C</li>
                            <li className="skills-list-item">Assembly</li>
                        </ul>
                </div>
                <div className="skills-skill">
                    <h2 className="skills-skill-title">Web Development</h2>
                    
                        <ul className="skills-list">
                            <li className="skills-list-item">JavaScript</li>
                            <li className="skills-list-item">TypeScript</li>
                            <li className="skills-list-item">React</li>
                            <li className="skills-list-item">Node.js</li>
                        </ul>
                    
                </div>
                <div className="skills-skill">
                    <h2 className="skills-skill-title">Databases</h2>
                    
                    <ul className="skills-list">
                        <li className="skills-list-item">SQL</li>
                        <li className="skills-list-item">MongoDB</li>
                    </ul>
                    
                </div>
                <div className="skills-skill">
                    <h2 className="skills-skill-title">Operating Systems</h2>
                    <ul className="skills-list">
                        <li className="skills-list-item">Linux</li>
                        <li className="skills-list-item">Windows</li>
                        <li className="skills-list-item">MacOS</li>
                            
                    </ul>
                    
                    
                </div>
                <div className="skills-skill">
                    <h2 className="skills-skill-title">DevOps & CI/CD</h2>
                        <ul className="skills-list">
                            <li className="skills-list-item">GitHub</li>
                            <li className="skills-list-item">Docker</li>
                        </ul>
                    
                    
                </div>
            </div>
            
            


        </div>
    )
}
