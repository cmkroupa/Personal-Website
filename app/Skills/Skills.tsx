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
                    <SkillWheel skills={
                        [
                            { name: "Python", info: "I first taught myself python in grade 11 for fun. I have utilized python for data visualization as well as its typical usage for just programming. Further will be using it in my Machine Learning class" },
                            { name: "Java", info: "First learned in my highschool class. Java is by far my most comfrotablke language and I enjoy programming in it the most" },
                            { name: "C", info: "I learned C in my second year Unix & C class. I enjoy the memory management in C as well as the usefulness of pointers" },
                            { name: "Assembly", info: "Current Learning in my 2208 class" },
                            { name: "JavaScript", info: "I first taught myself python in grade 11 for fun. I have utilized python for data visualization as well as its typical usage for just programming. Further will be using it in my Machine Learning class" },
                            { name: "TypeScript", info: "First learned in my highschool class. Java is by far my most comfrotablke language and I enjoy programming in it the most" },
                            { name: "React", info: "I learned C in my second year Unix & C class. I enjoy the memory management in C as well as the usefulness of pointers" },
                        ]
                    } />
                </div>
                <div className="skills-skill">
                    <h2 className="skills-skill-title">DevOps & CI/CD</h2>
                    <SkillWheel skills={
                        [
                            { name: "GitHub", info: "I first taught myself python in grade 11 for fun. I have utilized python for data visualization as well as its typical usage for just programming. Further will be using it in my Machine Learning class" },
                            { name: "Docker", info: "First learned in my highschool class. Java is by far my most comfrotablke language and I enjoy programming in it the most" },
                            { name: "GitLab", info: "First learned in my highschool class. Java is by far my most comfrotablke language and I enjoy programming in it the most" },
                            { name: "JUnit", info: "First learned in my highschool class. Java is by far my most comfrotablke language and I enjoy programming in it the most" },
                            { name: "UML", info: "First learned in my highschool class. Java is by far my most comfrotablke language and I enjoy programming in it the most" },
                        ]
                    } />
                </div>
                <div className="skills-skill">
                    <h2 className="skills-skill-title">Databases</h2>
                    <SkillWheel skills={
                        [
                            { name: "SQL", info: "I first taught myself python in grade 11 for fun. I have utilized python for data visualization as well as its typical usage for just programming. Further will be using it in my Machine Learning class" },
                            { name: "MongoDB", info: "First learned in my highschool class. Java is by far my most comfrotablke language and I enjoy programming in it the most" },
                        ]
                    } />
                    
                </div>
                <div className="skills-skill">
                    <h2 className="skills-skill-title">Operating Systems</h2>
                    <SkillWheel skills={
                        [
                            { name: "Linux", info: "I first taught myself python in grade 11 for fun. I have utilized python for data visualization as well as its typical usage for just programming. Further will be using it in my Machine Learning class" },
                            { name: "Windows", info: "First learned in my highschool class. Java is by far my most comfrotablke language and I enjoy programming in it the most" },
                            { name: "MacOS", info: "I learned C in my second year Unix & C class. I enjoy the memory management in C as well as the usefulness of pointers" }
                            
                        ]
                    } />
                </div>
            </div>
            
            


        </div>
    )
}
