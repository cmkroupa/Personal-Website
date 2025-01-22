import "./index.css"
import Typewriter from '~/Typewriter'
import Nav from "./../Nav/Nav.tsx"
import About from "./../About/About.tsx"
import Skills from "./../Skills/Skills.tsx"

export default function Home() {
    return (
        <div className="master-container">
            <Nav />
            <div className="not-nav">
                <About />
                <Skills/>
            </div>
            
        </div>
    );
}
