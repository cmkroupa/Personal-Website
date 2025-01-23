import "./Education.css"
import Card from "./Card"
export default function Education() {
    const CScourses =[[
        {
            title: "Computer Science Fundamentals II",
            description: " Data organization and manipulation; abstract data types and their implementations in a modern programming language; lists, stacks, queues, trees; recursion; file handling and storage.",
            grade: 100,
            code: "CS 1027",
            utilized: ["Java"]
        },

        {
            title: "Software Tools and Systems Programming ",
            description: "Understanding how programs execute (compilation, linking and loading); an introduction to a complex operating system (UNIX); scripting languages; the C programming language; system calls; memory management; libraries; multi-component program organization and builds; version control; debuggers and profilers.",
            grade: 98,
            code: "CS 2211",
            utilized: ["C", "Unix"]
        },
        {
            title: "Computer Science Fundamentals I",
            description: "he design and analysis of algorithms and their implementation as modular, reliable, well-documented programs written in a modern programming language.",
            grade: 97,
            code: "CS 1026"
        },
        {
            title: "Data Structures and Algorithms",
            description: "All sorts of Multiway search trees, graphs and their associated algorithms; file structures; sorting, searching such as Djikstra and Prim Jarnik Algorithms, and hashing techniques; time complexity.",
            grade: 95,
            code: "CS 2210",
            utilized: ["Java"]
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
            utilized: ["Assembly"]
        },
        ]];
    
    const Mathcourses =[[
        {
            title: "Linear Algebra I",
            description: "Complex numbers; vectors, lines and planes; solving linear systems; spanning sets and linear independence; matrix algebra; the fundamental subspaces of a matrix, bases, dimension and rank; introduction to linear transformations; determinants; eigenvalues and eigenvectors; similarity and diagonalization; code vectors and their applications; Grahm Schmidt Process",
            grade: 98,
            code: "Math 1600"
        },

        {
            title: "Calculus II for Mathematical and Physical Sciences ",
            description: "Techniques of integration; The Mean Value Theorem and its consequences; series, Taylor series with applications; parametric and polar curves with applications; first order linear and separable differential equations with applications.",
            grade: 93,
            code: "Calc 1501",
        },
        {
            title: "Applied Logic for Computer Science ",
            description: "Propositional and predicate logic; representing static and dynamic properties of real-world systems; logic as a tool for representation, reasoning and calculation; logic and programming.",
            grade: 98,
            code: "CS 2211",
        },
                        
    ],
    [
        {
            title: "Linear Algebra II",
            description: "Abstract vector spaces and linear transformations over arbitrary fields; change of basis; inner product spaces; norms and distance; least squares and Fourier approximation; singular value decomposition. Applications to differential equations.",
            code: "Math 2700"
        }
    ]];

    return (
        <div id="education" className="education-container">
            <div className="education-title">
                <h1 className='about-title'>Education</h1>
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