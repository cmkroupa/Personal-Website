
import "./Projects.css"
import Project from "./Project.tsx"
import { faTerminal , faSquareBinary} from '@fortawesome/free-solid-svg-icons';
import { faJava, faCuttlefish, faLinux, faPython } from '@fortawesome/free-brands-svg-icons';

export default function Projects() {
    
    
    return (
        <div id="projects" className="projects-container">
            <div className="projects-title">
                <h1 className="title">Projects</h1>
            </div>
            <div className="">
                <div className="projects-nav">

                </div>
                <div className="projects-card">
                    <Project
                        title="Project 1"
                        description="Project 1 description"
                        utilized={[faJava]}
                    />
                    <Project
                        title="Project 2"
                        description="Project 2 description"
                        utilized={[faJava]}
                    />
                    <Project
                        title="Project 3"
                        description="Project 3 description"
                        utilized={[faJava]}
                    />
                    <Project
                        title="Project 4"
                        description="Project 4 description"
                        utilized={[faJava]}
                    />
                </div>
            </div>
            
            
        </div>
    )
}
