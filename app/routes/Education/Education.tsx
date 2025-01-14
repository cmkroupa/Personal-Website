import "./Education.css"
import Nav from "../../Nav/Nav.tsx";
import { useState } from "react";

export default function Education() {
    const [viewable_courses, setViewableCourses] = useState<number[]>([]);

    // Function to add or remove course ID (number)
    function toggleCourse(courseId: number) {
        setViewableCourses((prevCourses) => {
            // If courseId is already in the array, remove it
            if (prevCourses.includes(courseId)) {
                return prevCourses.filter(course => course !== courseId);
            } else {
                // Otherwise, add courseId to the array
                return [...prevCourses, courseId];
            }
        });
    }

    return (
        <div>
            <Nav data={ 1} />
            <main className="font">
                <div className="container Degrees">
                    <h1>Degrees</h1>
                    <h6>click on a course for a full description</h6>
                    <div className="degree">
                        <h2><a href="https://www.westerncalendar.uwo.ca/Modules.cfm?ModuleID=21123&SelectedCalendar=Live&ArchiveID=">Honours Specialization in Computer Science</a></h2>
                        <h3>Western University - '28</h3>
                        <ul className="courses">
                            <h4>Notable Completed Courses</h4>
                            <li onClick={() => toggleCourse(1) } className="course">
                                CS Fundamentals - 100%
                                {
                                    (viewable_courses.includes(1)) &&
                                    <p>
                                            Course Code: CS1027<br/>
                                            In Java we learned about lists, stacks,
                                            queues, trees; recursion;
                                            file handling and storage.
                                    </p>
                                }
                            </li>
                            <li onClick={() => toggleCourse(2)} className="course">
                                Unix & C - 98%
                                {
                                    (viewable_courses.includes(2)) &&
                                    <p>
                                            Course Code: CS2211<br />
                                            Topics include: understanding how programs execute
                                            (compilation, linking and loading); an introduction to a complex operating system (UNIX); scripting languages; the C programming language; system calls; memory management; libraries;
                                            multi-component program organization and builds; version control; debuggers and profilers.
                                    </p>
                                }
                            </li>
                            <li onClick={() => toggleCourse(3)} className="course">
                                Data Structures & Algorithms - 95%
                                {
                                    (viewable_courses.includes(3)) &&
                                    <p>
                                            Course Code: CS2210<br />
                                            2-4 trees, B-Trees, etc.. directed and undirected graphs, and their associated algorithms such as DFS, BFS, Djikstra, Prim-Jarnik; file structures; sorting, searching, and hashing techniques; time complexity.
                                    </p>
                                }
                            </li>
                        </ul>
                        <ul className="courses">
                            <h4>Courses In-Progress</h4>
                            <li onClick={() => toggleCourse(4)} className="course">
                                Software Engineering
                                {
                                    (viewable_courses.includes(4)) &&
                                    <p>
                                            Course Code: CS2212<br />
                                            A team project course that provides practical experience in the software engineering field. Introduction to the structure and unique characteristics of large software systems, and concepts and techniques in the design, management and implementation of large software systems.
                                    </p>
                                }
                            </li>
                            <li onClick={() => toggleCourse(5)} className="course">
                                Computer Organization & Architecture
                                {
                                    (viewable_courses.includes(5)) &&
                                    <p>
                                            Course Code: CS2208<br />
                                            This course gives an understanding of what a modern computer can do. It covers the internal representation of various data types and focuses on the architectural components of computers (how these components are interconnected and the nature of the information flow between them). Assembly language is used to reinforce these issues.
                                    </p>
                                }
                            </li>
                            <li onClick={() => toggleCourse(6)} className="course">
                                Artificial Intelligence Algorithms 
                                {
                                    (viewable_courses.includes(6)) &&
                                    <p>
                                            Course Code: CS3346<br />
                                            Introduction to Artificial Intelligence; logic programming; heuristic search; knowledge representation; expert systems. Understanding of the operation of ChatGPT
                                    </p>
                                }
                            </li>
                        </ul>
                    </div>
                    <div className="degree">
                        <h2><a href="https://westerncalendar.uwo.ca/Modules.cfm?ModuleID=21058&SelectedCalendar=Live&ArchiveID=">Major in Mathematics</a></h2>
                        <h3>Western University - '28</h3>
                        <ul className="courses">
                            <h4>Notable Completed Courses</h4>
                            <li onClick={() => toggleCourse(7)} className="course">
                                Linear Algebra - 98%
                                {
                                    (viewable_courses.includes(7)) &&
                                    <p>
                                            Course Code: MATH1600<br />
                                            Complex numbers; vectors, lines and planes; solving linear systems; spanning sets and linear independence; matrix algebra; the fundamental subspaces of a matrix, bases, dimension and rank; introduction to linear transformations; determinants; eigenvalues and eigenvectors; similarity and diagonalization; Markov chains and other applications.
                                    </p>
                                }
                            </li>
                            <li onClick={() => toggleCourse(8)} className="course">
                                Calculus II- 93%
                                {
                                    (viewable_courses.includes(8)) &&
                                    <p>
                                        Course Code: CALC1501<br />
                                            Techniques of integration; The Mean Value Theorem and its consequences; series, Taylor series with applications; parametric and polar curves with applications; first order linear and separable differential equations with applications.
                                    </p>
                                }
                            </li>
                            <li onClick={() => toggleCourse(9)} className="course">
                                Applied Logic - 93%
                                {
                                    (viewable_courses.includes(9)) &&
                                    <p>
                                            Course Code: CS2209<br />
                                            Propositional and predicate logic; representing static and dynamic properties of real-world systems; logic as a tool for representation, reasoning and calculation; logic and programming
                                    </p>
                                }
                            </li>
                        </ul>
                        <ul className="courses">
                            <h4>Courses In-Progress</h4>
                            <li onClick={() => toggleCourse(10)} className="course">
                                Linear Algebra II
                                {
                                    (viewable_courses.includes(10)) &&
                                    <p>
                                            Course Code: MATH2700<br />
                                            The Gram-Schmidt process; similarity and orthogonal diagonalization; abstract vector spaces and linear transformations over arbitrary fields; change of basis; inner product spaces; norms and distance; least squares and Fourier approximation; singular value decomposition. Applications to differential equations and other topics will be emphasized throughout the course.
                                    </p>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
                
            </main>
        </div>
    )
}