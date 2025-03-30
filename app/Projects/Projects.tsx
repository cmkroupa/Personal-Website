import "./Projects.css";
import Project from "./Project.tsx";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal, faSquareBinary,faEye, faSquare } from '@fortawesome/free-solid-svg-icons';
import { faReact, faJava, faLinux, faCuttlefish, faPython, faEthereum, faGithub, faHtml5, faJs, faCss3 } from '@fortawesome/free-brands-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export default function Projects() {
    // Track the active icon as IconDefinition type
    const [activeIcon, setActiveIcon] = useState<IconDefinition>(faEye);

    const handleIconClick = (icon: IconDefinition) => {
        // Set the clicked icon as active
        setActiveIcon(icon);
    };

    const Projects = [
        {
            title: "Virtual Pet Game",
            github: "",
            who: "Educational Assignment, Western University",
            description: "Term long project. First it started with requirements gathering and building class and activity diagrams. Also made UI Mockups using wireframes. Then we implemented all research to create a final virtual pet game where you feed, exercise, and so on for your created virtual pet.",
            utilized: [faJava],
            date: "March 2025",
            vid: false,
            img: false,
        },{
            title: "Null Terminated Strings - Assembly",
            github: "",
            who: "Educational Assignment, Western University",
            description: "Given a null terminated string, and a key word. You have to transfer the string to a new memory location while removing all instances of the key in the string. Done in under 30 lines of Assembly code.",
            utilized: [faSquareBinary],
            date: "March 2025",
            vid: false,
            img: false,
        },{
            title: "ISBN Verification - Assembly",
            github: "https://github.com/cmkroupa/ISBN-Verification",
            who: "Educational Assignment, Western University",
            description: "Given a string ISBN had to verify that it was a valid ISBN. Utilizing my knowledge from Linear Algebra take the dot product between the code vector and given ISBN then mod 10 must be 0. If it is not 0 it is an invalid ISBN. This was completed in under 17 lines in Asssembly.",
            utilized: [faGithub, faSquareBinary],
            date: "March 2025",
            vid: false,
            img: false,
        },{
            title: "LatticeTalk",
            github: "https://github.com/kalpipatel/LatticeTalk",
            who: "Club Project, Western Cyber Society",
            description: "Current encryption methods, such as RSA, are vulnerable to quantum attacks using Shor's Algorithm. To address this, we leveraged research in post-quantum encryption to develop a JavaScript application that implements lattice-based encryption, ensuring quantum security. This application provides a highly secure, peer-to-peer messaging system.",
            utilized: [faGithub, faReact, faHtml5, faJs, faCss3],
            date: "March 2025",
            vid: false,
            img: false,
        },
        {
            title: "Personal Website",
            github: "https://github.com/cmkroupa/Personal-Website",
            who: "Personal Project",
            description: "I built this personal website as a fun project to showcase my skills, projects, and experiences. The site serves as a dynamic resume, providing an overview of my background in computer science and math.",
            utilized: [faGithub, faReact, faHtml5, faJs, faCss3],
            date: "Feb 2025",
            vid: false,
            img: false,
        },
        {
            title: "GoFundUs",
            github: "https://github.com/AlexanderKubarakos/CodenameGoFundUs",
            vid_src:"https://youtu.be/4ldX1Qp8-f0?si=uLeJ2GLEBx1cUkcK&t=29",
            who: "Project, Western University Hackathon",
            description: "Hackwestern 2024 Prize Winner! GoFundUs is an innovative mutual fund service built on Starknet’s blockchain, designed to enhance transparency, security, and trust in fund management. The platform allows users to create and join funds, but what sets it apart is its unique governance model—fund owners can only withdraw money with majority approval from their members. This decentralized approach ensures collective decision-making, reducing the risk of mismanagement and fraud.",
            utilized: [faGithub, faEthereum, faHtml5, faJs, faCss3],
            date: "Dec 2024",
            vid: true,
            img: false,
        },
        {
            title: "Calendar App",
            github: "https://github.com/cmkroupa/C_Calendar",
            who: "Educational Assignment, CS2211, Western University",
            description: "Developed a feature-rich calendar application in C, enabling users to seamlessly store, manage, and organize reminders. The calendar intelligently detects the current month and accurately aligns dates based on the starting day. Users can add multiple reminders per day, as well as edit or delete them as needed.",
            utilized: [faGithub, faCuttlefish, faLinux, faTerminal],
            date: "Nov 2024",
            vid: false,
            img: true,
            img_src: "/c_add.jpg",
        },
        {
            title: "Maze Graph Solver",
            github: "https://github.com/cmkroupa/MazeGame",
            who: "Educational Assignment, CS2210, Western University",
            description: "This maze solver utilizes a Depth-First Search (DFS) algorithm to explore and find the first path out of the maze, ensuring an efficient and systematic approach. The maze is composed of hallways where coins are placed, and these coins are required to progress through each hallway. The solver is designed to navigate the maze while keeping the total coin usage below a predefined limit.",
            utilized: [faGithub, faJava],
            date: "Nov 2024",
            vid: false,
            img: true,
            img_src: "/maze.jpg",
        },
        {
            title: "West-Scrape",
            github: "https://github.com/cmkroupa/west_scrape",
            who: "Personal Project",
            description: "Western University employs a sophisticated web scraping technique to gather and extract valuable data from their websites, enabling them to efficiently track and manage class requirements, program specifications, and detailed class schedules.",
            utilized: [faGithub, faPython],
            date: "June 2024",
            vid: false,
            img: false,
        },
        {
            title: "Frog Navigation Algorithm",
            github: "https://github.com/cmkroupa/Frog_Path",
            who: "Educational Assignment, CS1027, Western University",
            description: "Utilizing a priority queue in combination with a map of the frog's current state, this algorithm efficiently explores all potential moves the frog can make in its environment.",
            utilized: [faGithub, faJava],
            date: "March 2024",
            vid: false,
            img: false,
        },
        {
            title: "Twitter Sentiment Analysis",
            github: "https://github.com/cmkroupa/Twitter_Sentiment_Analysis",
            who: "Educational Assignment, CS1026, Western University",
            description: "Using Python, this tool leverages a comprehensive database of Twitter tweets to perform in-depth word analysis and gain valuable insights from the data.",
            utilized: [faGithub, faPython],
            date: "November 2023",
            vid: false,
            img: false,
        }
    ];

    const filterProjects = () => {
        return Projects.filter(project => {
            if (activeIcon === faEye) return true;  // Show all projects if "All" is active
            return project.utilized.includes(activeIcon);  // Filter based on active icon
        });
    };

    return (
        <div id="projects" className="projects-container">
            <div className="projects-title">
                <h1 className="title">Projects</h1>
            </div>
            <span className="project-nav">
                <a
                    onClick={() => handleIconClick(faEye)}
                    className={`project-nav-item ${activeIcon === faEye ? 'active' : 'inactive'}`}
                    title={"All"}
                >
                    <FontAwesomeIcon icon={faEye} />
                </a>
                <a
                    onClick={() => handleIconClick(faPython)}
                    className={`project-nav-item ${activeIcon === faPython ? 'active' : 'inactive'}`}
                    title={"Python"}
                >
                    <FontAwesomeIcon icon={faPython} />
                </a>
                <a
                    onClick={() => handleIconClick(faJava)}
                    className={`project-nav-item ${activeIcon === faJava ? 'active' : 'inactive'}`}
                    title={"Java"}
                >
                    <FontAwesomeIcon icon={faJava} />
                </a>
                <a
                    onClick={() => handleIconClick(faCuttlefish)}
                    className={`project-nav-item ${activeIcon === faCuttlefish ? 'active' : 'inactive'}`}
                    title={"C"}
                >
                    <FontAwesomeIcon icon={faCuttlefish} />
                </a>
                <a
                    onClick={() => handleIconClick(faReact)}
                    className={`project-nav-item ${activeIcon === faReact ? 'active' : 'inactive'}`}
                    title={"React"}
                >
                    <FontAwesomeIcon icon={faReact} />
                </a>
                <a
                    onClick={() => handleIconClick(faSquareBinary)}
                    className={`project-nav-item ${activeIcon === faSquareBinary ? 'active' : 'inactive'}`}
                    title={"React"}
                >
                    <FontAwesomeIcon icon={faSquareBinary} />
                </a>
            </span>

            <div className="projects-card">
                {filterProjects().map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        github={project.github}
                        who={project.who}
                        description={project.description}
                        utilized={project.utilized}
                        date={project.date}
                        vid={project.vid}
                        vid_src={project.vid_src}
                        img={ project.img }
                        img_src={ project.img_src }
                    />
                ))}
            </div>
        </div>
    );
}
