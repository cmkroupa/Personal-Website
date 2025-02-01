import "./Skills.css"
import { useState } from 'react'
import SkillWheel from "./SkillCard"

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
                <h1 style={{ color: 'var(--fourth-color)' }} className='title'>Skills</h1>
            </div>
            <div className="skills-all">
                <div className="skills-skill">
                    <h2 className="skills-skill-title">Programming Languages</h2>
                    <SkillWheel skills={[
                        { name: "Python", info: "I first taught myself Python in grade 11 for fun. I've used it for data visualization, scripting, and will further utilize it in my Machine Learning class." },
                        { name: "Java", info: "I first learned Java in high school and have since become highly comfortable with it. It's my favorite language to program in." },
                        { name: "C", info: "I learned C in my second-year Unix & C class. I enjoy working with memory management and pointers." },
                        { name: "Assembly", info: "Currently learning Assembly in my Computer Architecture course. I find it fascinating to work at such a low level." },
                        { name: "JavaScript", info: "I picked up JavaScript while learning web development. I've used it extensively in front-end and back-end projects." },
                        { name: "TypeScript", info: "I started using TypeScript to add type safety to my JavaScript projects. It has improved my development workflow significantly." },
                        { name: "React", info: "I use React to build modern, interactive web applications. I enjoy working with its component-based architecture." }
                    ]} />
                </div>

                <div className="skills-skill">
                    <h2 className="skills-skill-title">DevOps & CI/CD</h2>
                    <SkillWheel skills={[
                        { name: "GitHub", info: "I use GitHub for version control, collaboration, and managing repositories for both personal and team projects." },
                        { name: "Docker", info: "I have experience containerizing applications with Docker to ensure consistency across environments." },
                        { name: "GitLab", info: "I have worked with GitLab's CI/CD pipelines to automate testing and deployment." },
                        { name: "JUnit", info: "I use JUnit for unit testing in Java projects to ensure code reliability." },
                        { name: "UML", info: "I use UML diagrams to design and document software architectures effectively." }
                    ]} />
                </div>

                <div className="skills-skill">
                    <h2 className="skills-skill-title">Databases</h2>
                    <SkillWheel skills={[
                        { name: "SQL", info: "I have experience writing SQL queries and designing relational databases." },
                        { name: "MongoDB", info: "I use MongoDB for NoSQL database management in projects that require flexible, schema-less data storage." }
                    ]} />
                </div>

                <div className="skills-skill">
                    <h2 className="skills-skill-title">Operating Systems</h2>
                    <SkillWheel skills={[
                        { name: "Linux", info: "I frequently use Linux for development and have experience with bash scripting and system administration." },
                        { name: "Windows", info: "I am proficient in Windows and often use it for software development and general computing." },
                        { name: "MacOS", info: "I have experience working with MacOS, particularly for development and software testing." }
                    ]} />
                </div>
            </div>

            
            


        </div>
    )
}
