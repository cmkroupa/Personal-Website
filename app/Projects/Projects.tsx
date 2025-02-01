import "./Projects.css"
import Project from "./Project.tsx"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal, faTh } from '@fortawesome/free-solid-svg-icons';
import { faReact, faJava, faLinux, faCuttlefish, faPython, faEthereum, faGithub, faHtml5, faJs, faCss3 } from '@fortawesome/free-brands-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export default function Projects() {
    // Track the active icons
    const [activeIcons, setActiveIcons] = useState<IconProp[]>([faTh]);

    const handleIconClick = (icon: IconProp) => {
        // Toggle the icon's active state
        setActiveIcons(prevState => {
            if (prevState.includes(icon)) {
                return prevState.filter(i => i !== icon);  // Remove icon if it's already active
            } else {
                return [...prevState, icon];  // Add icon if it's not already active
            }
        });
    };

    const Projects = [
        {
            title: "LatticeTalk",
            github: "https://github.com/kalpipatel/LatticeTalk",
            who: "Club Project, Western Cyber Society",
            description: "Current encryption methods, such as RSA, are vulnerable to quantum attacks using Shor's Algorithm. To address this, we leveraged research in post-quantum encryption to develop a JavaScript application that implements lattice-based encryption, ensuring quantum security. This application provides a highly secure, peer-to-peer messaging system.",
            utilized: [faGithub, faReact, faHtml5, faJs, faCss3],
            date: "In Progress"
        },
        {
            title: "Personal Website",
            github: "https://github.com/cmkroupa/Personal-Website",
            who: "Personal Project",
            description: "This website.",
            utilized: [faGithub, faReact, faHtml5, faJs, faCss3],
            date: "March 2024"
        },
        {
            title: "GoFundUs",
            github: "https://github.com/AlexanderKubarakos/CodenameGoFundUs",
            who: "Project, Western University Hackathon",
            description: "GoFundUs is an innovative mutual fund service built on Starknet’s blockchain, designed to enhance transparency, security, and trust in fund management. The platform allows users to create and join funds, but what sets it apart is its unique governance model—fund owners can only withdraw money with majority approval from their members. This decentralized approach ensures collective decision-making, reducing the risk of mismanagement and fraud.",
            utilized: [faGithub, faEthereum, faHtml5, faJs, faCss3],
            date: "Dec 2024"
        },
        {
            title: "Calendar App",
            github: "https://github.com/cmkroupa/C_Calendar",
            who: "Educational Project, Western University",
            description: "Developed a feature-rich calendar application in C, enabling users to seamlessly store, manage, and organize reminders. The calendar intelligently detects the current month and accurately aligns dates based on the starting day. Users can add multiple reminders per day, as well as edit or delete them as needed.",
            utilized: [faGithub, faCuttlefish, faLinux, faTerminal],
            date: "Nov 2024"
        },
        {
            title: "Maze Graph Solver",
            github: "https://github.com/cmkroupa/MazeGame",
            who: "Educational Project, Western University",
            description: "This maze solver utilizes a Depth-First Search (DFS) algorithm to explore and find the first path out of the maze, ensuring an efficient and systematic approach. The maze is composed of hallways where coins are placed, and these coins are required to progress through each hallway. The solver is designed to navigate the maze while keeping the total coin usage below a predefined limit.",
            utilized: [faGithub, faJava],
            date: "Nov 2024"
        },
        {
            title: "West-Scrape",
            github: "https://github.com/cmkroupa/west_scrape",
            who: "Personal Project",
            description: "Western University employs a sophisticated web scraping technique to gather and extract valuable data from their websites, enabling them to efficiently track and manage class requirements, program specifications, and detailed class schedules.",
            utilized: [faGithub, faPython],
            date: "June 2024"
        },
        {
            title: "Frog Navigation Algorithm",
            github: "https://github.com/cmkroupa/Frog_Path",
            who: "Educational Project, Western University",
            description: "Utilizing a priority queue in combination with a map of the frog's current state, this algorithm efficiently explores all potential moves the frog can make in its environment.",
            utilized: [faGithub, faJava],
            date: "March 2024"
        },
        {
            title: "Twitter Sentiment Analysis",
            github: "https://github.com/cmkroupa/Twitter_Sentiment_Analysis",
            who: "Educational Project, Western University",
            description: "Using Python, this tool leverages a comprehensive database of Twitter tweets to perform in-depth word analysis and gain valuable insights from the data.",
            utilized: [faGithub, faPython],
            date: "November 2023"
        }
    ];

    const filterProjects = () => {
        return Projects.filter(project => {
            if (activeIcons.includes(faTh)) return true;  // Show all projects if "All" is active
            return project.utilized.some(icon => activeIcons.includes(icon));  // Filter based on active icons
        });
    };

    return (
        <div id="projects" className="projects-container">
            <div className="projects-title">
                <h1 className="title">Projects</h1>
            </div>
            <span className="project-nav">
                <a
                    onClick={() => handleIconClick(faTh)}
                    className={`project-nav-item ${activeIcons.includes(faTh) ? 'active' : 'inactive'}`}
                    title={"All"}
                >
                    <FontAwesomeIcon icon={faTh} />
                </a>
                <a
                    onClick={() => handleIconClick(faJava)}
                    className={`project-nav-item ${activeIcons.includes(faJava) ? 'active' : 'inactive'}`}
                    title={"Java"}
                >
                    <FontAwesomeIcon icon={faJava} />
                </a>
                <a
                    onClick={() => handleIconClick(faCuttlefish)}
                    className={`project-nav-item ${activeIcons.includes(faCuttlefish) ? 'active' : 'inactive'}`}
                    title={"C"}
                >
                    <FontAwesomeIcon icon={faCuttlefish} />
                </a>
                <a
                    onClick={() => handleIconClick(faPython)}
                    className={`project-nav-item ${activeIcons.includes(faPython) ? 'active' : 'inactive'}`}
                    title={"Python"}
                >
                    <FontAwesomeIcon icon={faPython} />
                </a>
                <a
                    onClick={() => handleIconClick(faReact)}
                    className={`project-nav-item ${activeIcons.includes(faReact) ? 'active' : 'inactive'}`}
                    title={"React"}
                >
                    <FontAwesomeIcon icon={faReact} />
                </a>
                <a
                    onClick={() => handleIconClick(faHtml5)}
                    className={`project-nav-item ${activeIcons.includes(faHtml5) ? 'active' : 'inactive'}`}
                    title={"HTML"}
                >
                    <FontAwesomeIcon icon={faHtml5} />
                </a>
                <a
                    onClick={() => handleIconClick(faJs)}
                    className={`project-nav-item ${activeIcons.includes(faJs) ? 'active' : 'inactive'}`}
                    title={"Javascript"}
                >
                    <FontAwesomeIcon icon={faJs} />
                </a>
                <a
                    onClick={() => handleIconClick(faCss3)}
                    className={`project-nav-item ${activeIcons.includes(faCss3) ? 'active' : 'inactive'}`}
                    title={"CSS"}
                >
                    <FontAwesomeIcon icon={faCss3} />
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
                    />
                ))}
            </div>
        </div>
    );
}
