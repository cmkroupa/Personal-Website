import React, { useState } from "react";
import "./SkillWheel.css";

const SkillWheel = ({ skills} : any) => { // Accept the skills array as a prop
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % skills.length); // Go to the next skill
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length); // Go to the previous skill
    };

    const nextSkillIndex = (currentIndex + 1) % skills.length;
    const prevSkillIndex = (currentIndex - 1 + skills.length) % skills.length;

    return (
        <div className="skill-wheel-container">

            <div className="skill-display">
                {/* Next Skill */}
                <div className={`next-skill`}>
                    <div className="next-skill`">{skills[nextSkillIndex].name}</div>
                </div>

                {/* Current Skill */}
                <div className={`current-skill`}>
                    <div className="skill-name">{skills[currentIndex].name}</div>
                    <div className="skill-info">{skills[currentIndex].info}</div>
                </div>
            </div>
            <div className="arrows">
                <div className="arrow left-arrow" onClick={handlePrevious}>
                    &#8592;
                </div>
                <div className="arrow right-arrow" onClick={handleNext}>
                    &#8594;
                </div>
            </div>
        </div>
    );
};

export default SkillWheel;
