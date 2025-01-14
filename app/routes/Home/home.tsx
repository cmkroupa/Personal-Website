import { useState, useEffect} from "react";
import Nav from "../../Nav/Nav.tsx";
import "./Home.css";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Home() {
    const [isAnimationFinished, setIsAnimationFinished] = useState(false);
    useEffect(() => {
        // Set a delay for the animation (e.g., 3 seconds)
        const timer = setTimeout(() => {
            setIsAnimationFinished(true); // Switch to webpage content
        }, 1800); // 3000ms = 3 seconds
    }, []);

    const [Web, setWebDev] = useState(false);
    const [Prog, setProg] = useState(false);
    const [DB, setDB] = useState(false);
    const [Tools, setTools] = useState(false);
    const [Skills, setSkills] = useState(false);

    const [chess, setChess] = useState(false);
    const [books, setBooks] = useState(false);
    const [movies, setMovies] = useState(false);
    
    const toggleDropDown = (num: Number) => {
        switch (num) {
            case 1:{
                setWebDev(!Web);
                break;
            } case 2:{
                setProg(!Prog);
                break;
            } case 3:{
                setDB(!DB);
                break;
            } case 4:{
                setTools(!Tools);
                break;
            } case 5:{
                setSkills(!Skills);
                break;
            }
            case 6:{
                setChess(!chess);
                break;
            }case 7:{
                setBooks(!books);
                break;
            }case 8:{
                setMovies(!movies);
                break;
            }
        }
    }
    return (
        <>
            <Nav data={0} />
            <main className="font">
                <div className="animation">
                    <DotLottieReact
                        src="https://lottie.host/0ca9bef0-5438-4250-aabc-0873d45b31c3/AETxKEF68k.lottie"
                        autoplay
                    />
                </div>
                {isAnimationFinished &&
                    <div className="body">
                        <div className="intro">
                            <h1>My name is Cameron Kroupa</h1>
                            <p>
                                I am a second year student at Western University pursuing a dual degree in Computer Science and Mathematics.
                                I'm passionate about finding creative and unique solutions to problems. I enjoy watching random youtube videos that go into incredible
                                depth of how technologies work.
                                I am interested in all the fields of computers and mathematics
                                but have particular interests in artificial intelligence, cryptography, and cyber security.
                            </p>
                        </div>
                    
                    <div className="extra">
                        <ul className="fun facts">
                            <h2>Fun Facts About Me:</h2>
                            <li className="skills"  onClick={() => { toggleDropDown(6)}}>
                                    Chess Ratings
                                    {
                                        chess && <ul className="facts">
                                        <li>Bullet: 1550</li>
                                        <li>Blitz: 1650</li>
                                        <li>Puzzle: 2000</li>
                                    </ul>
                                    }
                                
                            </li>
                            <li className="skills"onClick={() => { toggleDropDown(7)}} >
                                    Currently Reading
                                    {
                                        books && <ul className="facts">
                                    <li>Steve Jobs by Walter Isaacson</li>
                                    <li>Hacking: The Art of Explotation by Jon Erickson</li>
                                </ul>
                                }
                                
                            </li>
                            <li className="skills"  onClick={() => { toggleDropDown(8) }}>
                                    Favourite Shows and Movies
                                    {
                                        movies && <ul className="facts">
                                    
                                    <li>Snowden</li>
                                    <li>The Imitation Game</li>
                                    <li>Inception</li>
                                    <li>Mr.Robot</li>
                                </ul>
                                    }
                                
                            </li>

                        </ul>
                        <ul className="facts">
                            <h2>Skills:</h2>
                            <li className="skills" onClick={() => { toggleDropDown(1) }}>
                                Web Development
                                {Web == true && 
                                    <ul className="facts">
                                        <li>React</li>
                                        <li>Javascript</li>
                                        <li>CSS</li>
                                        <li>HTML</li>
                                    </ul>
                                }
                            </li>
                            <li className="skills" onClick={() => { toggleDropDown(2) }}>
                                Programming Languages
                                {Prog == true &&
                                    <ul className="facts">
                                        <li>Java</li>
                                        <li>Python</li>
                                        <li>C</li>
                                    </ul>
                                }
                            </li>
                            <li className="skills" onClick={() => { toggleDropDown(3) }}>
                                Data & Backend
                                {DB == true &&
                                    <ul className="facts">
                                        <li>SQL</li>
                                        <li>MongoDB</li>
                                    </ul>
                                }
                            </li>
                            <li className="skills" onClick={() => { toggleDropDown(4) }}>
                                DevOPS & Tools
                                {Tools == true &&
                                    <ul className="facts">
                                        <li>Git</li>
                                        <li>Docker</li>
                                    </ul>
                                }
                            </li>
                            <li className="skills" onClick={() => { toggleDropDown(5) }}>
                                Soft Skills
                                {Skills == true &&
                                    <ul className="facts">
                                        <li>Critical Thinking</li>
                                        <li>Team Collaboration</li>
                                    </ul>
                                }
                            </li>

                        </ul>
                    </div>
                </div>
                }
                
            </main>
        </>
    )
}

