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
                        { name: "Python", info: "I first taught myself Python in grade 12 for fun. I've used it for data visualization, web scraping, and will further utilize it in latter years in Machine Learning class." },
                        { name: "Java", info: "I first learned Java in high school and have since become highly comfortable with it. It's my favorite language to program in." },
                        { name: "C", info: "I learned C in my second-year Unix & C class (CS2211). I enjoy working with memory management and pointers." },
                        { name: "Assembly", info: "Currently learning Assembly in my Computer Architecture course. I find it interesting to work at such a low level." },
                        { name: "JavaScript", info: "I picked up JavaScript while learning web development. I've used it extensively in front-end and back-end projects." },
                        { name: "TypeScript", info: "I started using TypeScript to add type safety to my JavaScript projects." },
                        { name: "React", info: "I use React to build modern, interactive web applications. I find it easy to work with its component-based architecture." }
                    ]} />
                </div>

                <div className="skills-skill">
                    <h2 className="skills-skill-title">DevOps & CI/CD</h2>
                    <SkillWheel skills={[
                        { name: "GitHub", info: "I use GitHub for version control, collaboration, and managing repositories for both personal and team projects." },
                        { name: "Docker", info: "I have experience containerizing applications with Docker during my Hackathon project to ensure consistency across environments." },
                        { name: "GitLab", info: "I have worked with GitLab's documenting and managing repositroeis in my Software Engineering class(CS2212)." },
                        { name: "JUnit", info: "I used JUnit for unit testing in my Software Engineering (CS2212) class to ensure code reliability." },
                        { name: "UML", info: "I used UML diagrams to design and document software architectures effectively in my Software Engineering (CS2212) class." }
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
                        { name: "Linux", info: "An open-source operating system widely used for development, servers, and system administration." },
                        { name: "Windows", info: "A popular operating system known for its user-friendly interface and widespread software compatibility." },
                        { name: "MacOS", info: "Apple's operating system designed for Mac computers, known for its smooth user experience and developer tools." }
                    ]} />
                </div>
            </div>

            
            


        </div>
    )
}
