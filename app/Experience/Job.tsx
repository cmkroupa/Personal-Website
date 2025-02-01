import "./Job.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faReact, faLinux,faCuttlefish,faPython,faEthereum,faGithub,faHtml5, faJs, faCss3 } from '@fortawesome/free-brands-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

type Job = {
    title: string;
    where: string;
    company: string;
    description: string;
    utilized?: IconProp[];
    when: string;

};

export default function Job_Card({ title, where, company, description, utilized ,when}: Job) {

    return (
        <div className="job-container">
            <div className="job-card-title">
                <h1 className="job-card-title">{title}</h1>
                <h2 className="job-card-when">{when}</h2>
            </div>
            <h3>{company} - {where}</h3>
            <p className="job-card-description">{description}</p>
            <div className="job-card-utilized">
                {utilized !== undefined && (
                                                                <>
                                                                    {utilized.map((icon, i) => (
                                                                        <>
                                                                            <FontAwesomeIcon key={i} icon={icon} />
                                                                            <span>&nbsp;&nbsp;</span>
                                                                        </>
                                                                    ))}
                                                                </>
                                                            )}
            </div>
            <hr/>
        </div>
    );
}
