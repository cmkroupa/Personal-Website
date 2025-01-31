
import "./Project_Card.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core'; 

type Project = {
    title: string;
    description: string;
    utilized?: IconProp[]; // Array of FontAwesome icon props
};


export default function Project_Card({ title, description, utilized }: Project) {
    return (
        <div className="project-container">
            <h1>{title}</h1>
            <p>{description}</p>
            <div>
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
        </div>
    )
}
