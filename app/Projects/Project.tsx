import "./Project_Card.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faReact, faLinux,faCuttlefish,faPython,faEthereum,faGithub,faHtml5, faJs, faCss3 } from '@fortawesome/free-brands-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

type Project = {
    title: string;
    description: string;
    github?: string;
    date: string;
    utilized?: IconProp[];
    who: string;
    properties?: IconProp[];
    vid: boolean;
    vid_src?: string;
};

export default function Project_Card({ title, description, utilized, date, github ,who, vid, vid_src}: Project) {

    return (
        <div className="project-container">
            <div className="project-card-title">
                <h1 className="project-card-title-title">{title}</h1>
                <h2 className="project-card-date">{date}</h2>
            </div>
            
            
            <h3>{who}</h3>
            <div>
                {
                    vid &&
                    <iframe width="560" height="315"
                        src="https://www.youtube.com/embed/4ldX1Qp8-f0?start=29&controls=0&disablekb=1&modestbranding=1&rel=0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    >
                    </iframe>

                }
            </div>
                
            <p className="project-card-description">{description}</p>
            <div className="project-card-utilized">
                {utilized !== undefined && (
                    <>
                        {utilized.map((icon, i) => {
                            // Assign the correct iconKey based on the icon
                            let iconKey = '';

                            if (icon === faGithub) {
                                iconKey = 'GitHub';
                            } else if (icon === faReact) {
                                iconKey = 'React';
                            } else if (icon === faHtml5) {
                                iconKey = 'HTML';
                            } else if (icon === faJs) {
                                iconKey = 'Javascript';
                            } else if (icon === faCss3) {
                                iconKey = 'CSS';
                            } else if (icon === faEthereum) {
                                iconKey = 'Ethereum';
                            } else if (icon === faCuttlefish) {
                                iconKey = 'C';
                            } else if (icon === faPython) {
                                iconKey = 'Python';
                            } else if (icon === faTerminal) {
                                iconKey = 'Terminal';
                            } else if (icon === faLinux) {
                                iconKey = 'Linux';
                            }


                            // Conditionally render the link for faGithub, and default for other icons
                            return (
                                icon === faGithub ? (
                                    <a
                                        className="project-icon-github"
                                        href={github}
                                        key={i}
                                        title={iconKey} // Title for the tooltip
                                    >
                                        <FontAwesomeIcon icon={icon} />
                                    </a>
                                ) : (
                                    <a
                                        className="project-icon"
                                        key={i}
                                        title={iconKey} // Title for the tooltip
                                    >
                                        <FontAwesomeIcon icon={icon} />
                                    </a>
                                )
                            );
                        })}
                    </>
                )}
            </div>
            <hr/>
        </div>
    );
}
