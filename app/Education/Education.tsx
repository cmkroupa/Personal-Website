import "./Education.css"
import Card from "./Card"

import type { IconProp } from '@fortawesome/fontawesome-svg-core'; // Type-only import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal , faSquareBinary} from '@fortawesome/free-solid-svg-icons';
import { faJava, faCuttlefish, faLinux, faPython } from '@fortawesome/free-brands-svg-icons';

export default function Education() {
    const iconMapping: Record<string, IconProp> = {
        "Java": faJava,         
        "C": faCuttlefish,
        "Unix": faLinux,
        "Python": faPython,
        "Terminal": faTerminal,
        "Binary": faSquareBinary,
        
    };

    const CScourses = [[
        {
            title: "Computer Science Fundamentals II",
            description: "Data organization and manipulation; abstract data types and their implementations in a modern programming language; lists, stacks, queues, trees; recursion; file handling and storage.",
            grade: 100,
            avg: 67,
            code: "CS 1027",
            utilized: ["Java"].map((name) => iconMapping[name]),
        },

        {
            title: "Software Tools and Systems Programming ",
            description: "Understanding how programs execute (compilation, linking and loading); an introduction to Unix; scripting languages; the C programming language; system calls; memory management; libraries; multi-component program organization and builds; version control; debuggers and profilers.",
            grade: 98,
            avg: 86,
            code: "CS 2211",
            utilized: ["C", "Unix", "Terminal"].map((name) => iconMapping[name]),
        },
        {
            title: "Computer Science Fundamentals I",
            description: "The design and analysis of algorithms and their implementation as modular, reliable, well-documented programs written in a modern programming language.",
            grade: 97,
            avg:80,
            code: "CS 1026",
            utilized: ["Python"].map((name) => iconMapping[name]),
        },
        {
            title: "Data Structures and Algorithms",
            description: "All sorts of Multiway search trees, graphs and their associated algorithms; file structures; sorting, searching such as Djikstra and Prim Jarnik Algorithms, and hashing techniques; time complexity.",
            grade: 95,
            avg:76,
            code: "CS 2210",
            utilized: ["Java"].map((name) => iconMapping[name]),
        }, {
            title: "Digital Humanities",
            description: "We used the Nominatim geocoder from Geopy for geographic data retrieval and spatial analysis. For text processing, SpaCy enabled efficient tokenization, named entity recognition, and syntactic parsing. SpaCy helped us extract insights from text for tasks like classification and sentiment analysis. Pandas was used for data manipulation, offering a flexible DataFrame structure for handling structured data effectively.",
            grade: 86,
            avg: 76,
            code: "DH1011",
            utilized: ["Python"].map((name) => iconMapping[name]),
        },
                        
    ],
    [
        {
            title: "Artificial Intelligence",
            description: "Slides are modified from University of Berkley’s AI course. Uninformed Search; Informed Search; Adversarial Search; ExpMax Search; Local Search; Probability; Bayesian Networks; Decision Networks; Machine Learning; Deep Neural Networks; Understanding ChatGPT",
            code: "CS 3346",
        },

        {
            title: "Computer Organization and Architecture ",
            description: "The internal representation of various data types and focuses on the architectural components of computers (how these components are interconnected and the nature of the information flow between them). Assembly language is used to reinforce these issues.",
            code: "CS 2208",
            utilized: ["Binary"].map((name) => iconMapping[name]),
        },
        ]];
    
    const Mathcourses =[[
        {
            title: "Linear Algebra I",
            description: "Complex numbers; vectors, lines and planes; solving linear systems; spanning sets and linear independence; matrix algebra; the fundamental subspaces of a matrix, bases, dimension and rank; introduction to linear transformations; determinants; eigenvalues and eigenvectors; similarity and diagonalization; code vectors and their applications; Grahm Schmidt Process",
            grade: 98,
            avg:72,
            code: "Math 1600"
        },

        {
            title: "Calculus II for Mathematical and Physical Sciences ",
            description: "Techniques of integration; The Mean Value Theorem and its consequences; series, Taylor series with applications; parametric and polar curves with applications; first order linear and separable differential equations with applications.",
            grade: 93,
            avg:58,
            code: "Calc 1501",
        },
        {
            title: "Applied Logic for Computer Science ",
            description: "Propositional and predicate logic; representing static and dynamic properties of real-world systems; logic as a tool for representation, reasoning and calculation; logic and programming.",
            grade: 90,
            avg:68,
            code: "CS 2211",
        },
                        
    ],
    [
        {
            title: "Linear Algebra II",
            description: "Abstract vector spaces and linear transformations over arbitrary fields; change of basis; inner product spaces; norms and distance; similarity; least squares and Fourier approximation; singular value decomposition. Applications to differential equations.",
            code: "Math 2700"
        }
    ]];

    return (
        <div id="education" className="education-container">
            <div className="education-title">
                <h1 className='title'>Education</h1>
            </div>
            <div className="education-all">
                <div className="education-course">
                    <Card
                        title="Honours Specialization in Computer Science"
                        university="Western University"
                        courses={CScourses[0]}
                        inprogress={CScourses[1]}
                    />
                </div>
                <div className="education-course">
                    <Card
                        title="Major in Mathematics"
                        university="Western University"
                        courses={Mathcourses[0]}
                        inprogress={Mathcourses[1]}
                    />
                </div>
                
            </div>

        </div>
    )
}