import "./Projects.css"
import Nav from "../../Nav/Nav.tsx";

export default function Projects() {
    return (
        <div>
            <Nav data={ 2} />
            <main className="raleway-font">
                <div className="Projects">
                    <h1>Projects</h1>
                    <h5>click on a project title for the github link</h5>
                    <h6>pictures coming soon to each</h6>
                    <div className="project">
                        <div className="info">
                            <h2><a>Lattice Talk</a></h2>
                            <h4>Club Project - Western Cyber Society</h4>
                            <h5>In Progress</h5>
                            <p>
                                Real time messaging application designed with the future of secure communication in mind. 
                                Utlizing lattice-based cryptography, a post-quantum encryption system, LatticeTalk features quantum safe end-to-end encryption to ensure highly secure user communication
                                <br />
                                <ul className="impact">
                                    <h4>My Impact?</h4>
                                    <li>Algorithms behind the encryption</li>
                                    <li>Database</li>
                                    <li>API Fetching</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="project">
                        <div className="info">
                            <h2><a href="https://github.com/AlexanderKubarakos/CodenameGoFundUs">GoFundUs</a></h2>
                            <h4>Group Hackathon Project - Hack Western 11</h4>
                            <h5>Dec 2024</h5>
                            <p>
                                Designed and implemented a platform utilizing StarkNet's blockchain technology to enable users to create a "group fund", which other people could then donate to.
                                The power of the group fund was in a democratic decision-making process where when the owner of the fund wanted to withdrawal, the withdrawal is only processed when majority of the fund members approve, addressing mistrust in collaborative funding systems and ensuring accountability.
                                <h4>Hackathon Prize Winner!</h4>
                                <br />
                                <ul className="impact">
                                    <h4>My Impact?</h4>
                                    <li>In StarkNet's Cairo language built smart contracts that were deployed onto the blockchain</li>
                                    <li>Created the algorithms behind the fund member approval process</li>
                                </ul>
                            </p>
                        </div>
                        <img></img>
                    </div>
                    <div className="project">
                        <div className="info">
                            <h2><a href="https://github.com/cmkroupa/MazeGame">Maze Graph Solver</a></h2>
                            <h4>Assignment - CS2210</h4>
                            <h5>Nov 2024</h5>
                            <p>
                                Developed a weighted graph data structure to model a maze with walls, rooms, and key-restricted corridors. Used a Depth First Search (DFS) to find the a solution in the given the maze layout and key availability.
                            </p>
                        </div>
                        <img></img>
                    </div>
                    <div className="project">
                        <div className="info">
                            <h2><a href="https://github.com/cmkroupa/west_scrape">Western Scrape</a></h2>
                            <h4>Personal Project</h4>
                            <h5>June 2024</h5>
                            <p>
                                Built a web scraper that signs into Western’s Draft My service which shows all scheduling information for classes and scrapes all the data. This will be used in a future personal project to make a much better Draft My service
                            </p>
                        </div>
                        <img></img>
                    </div>
                    <div className="project">
                        <div className="info">
                            <h2>Frog Pathing Game</h2>
                            <h4>Assignment - CS1027</h4>
                            <h5>Mar 2024</h5>
                            <p>
                                Utilized proficient Java coding language knowledge to create a movement strategy game for a frog, navigating through pond cells while avoiding alligators and hazardous mud.
                                The frog must reach his mate by making decisions based on cell types, including lily pads, reeds, and mud, which influence his movement and safety.
                                Developed a preference-based decision making system using a priority queue to determine optimal sequence of moves based on environmental factors.
                            </p>
                        </div>
                        <img></img>
                    </div>
                </div>
            </main>
        </div>
    )
}