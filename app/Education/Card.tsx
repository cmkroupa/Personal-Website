import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core'; // Type-only import
import { useState } from 'react';
import Switch from "./Switch.tsx"; // Import the Switch component

import './Card.css';

type Course = {
    title: string;
    code: string;
    description: string;
    grade?: number; // Optional grade property
    avg?: number; // Optional grade property
    utilized?: IconProp[]; // Array of FontAwesome icon props
};

type CardProps = {
    title: string;
    university: string;
    courses: Course[];
    inprogress: Course[];
};

export default function Card({ title, university, courses, inprogress }: CardProps) {
    const [ViewInProgress, setInProgress] = useState(false); // Default state: NotinProgress = true
    const [isOpen, setIsOpen] = useState("");

    // Function to handle the toggle of the switch
    const handleToggle = (checked: boolean) => {
        setInProgress(checked); // Update the state based on the switch toggle
    };

    return (
        <div className="card-container">
            <div className="card-title">
                <h1 className="card-program-title">{title}</h1>
                <h2>{university}</h2>
                <Switch
                    checked={ViewInProgress} // Pass the current state to Switch
                    onToggle={handleToggle} // Pass the onToggle function to handle state change
                />
            </div>

            <div className="education-all">
                {(ViewInProgress == false) ? (
                    <div className="completed-courses">
                        {courses.map((course, index) => (
                            isOpen === course.code ? (
                                <div onClick={() => setIsOpen("")} key={index} className="card-course-selected">
                                    <p>{course.title} - {course.grade}%</p>
                                    <ul>
                                        <li><p>Code: {course.code} | Class Average: {course.avg}</p></li>
                                        <li><p>Description: {course.description}</p></li>
                                        <li className='card-icon'>
                                            {course.utilized !== undefined && (
                                                <>
                                                    {course.utilized.map((icon, i) => (
                                                        <>
                                                            <FontAwesomeIcon key={i} icon={icon} />
                                                            <span>&nbsp;&nbsp;</span>
                                                        </>
                                                    ))}
                                                </>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <div onClick={() => setIsOpen(course.code)} key={index} className="card-course">
                                    <p>{course.title} - {course.grade}%</p>
                                </div>
                            )
                        ))}
                    </div>
                ) : (
                    <div className="in-progress-courses">
                        {inprogress.map((course, index) => (
                            isOpen === course.code ? (
                                <div onClick={() => setIsOpen("")} key={index} className="card-course-selected">
                                    <p>{course.title}</p>
                                    <ul>
                                        <li><p>Code: {course.code}</p></li>
                                        <li><p>Description: {course.description}</p></li>
                                        <li>
                                            {course.utilized !== undefined && (
                                                <>
                                                    {course.utilized.map((icon, i) => (
                                                        <>
                                                            <FontAwesomeIcon key={i} icon={icon} />
                                                            <span>&nbsp;&nbsp;</span>
                                                        </>
                                                        
                                                        
                                                    ))}
                                                    
                                                </>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <div onClick={() => setIsOpen(course.code)} key={index} className="card-course">
                                    <p>{course.title}</p>
                                </div>
                            )
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
