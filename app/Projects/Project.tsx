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
};

export default function Project_Card({ title, description, utilized, date, github ,who}: Project) {

    return (
        <div className="project-container">
            <h1 className="project-card-title">{title} - {date}</h1>
            <h3>{who}</h3>
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
        </div>
    );
}
