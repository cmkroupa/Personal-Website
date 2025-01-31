import "./index.css"
import Typewriter from '~/Typewriter'
import Spacer from '~/Spacer'
import Nav from "./../Nav/Nav.tsx"
import About from "./../About/About.tsx"
import Skills from "./../Skills/Skills.tsx"
import Education from "./../Education/Education.tsx"
import Projects from "./../Projects/Projects.tsx"

export default function Home() {
    return (
        <div className="master-container">
            <Nav />
            <div className="not-nav">
                <Spacer id="start" />
                <About />
                <Spacer />
                <Skills />
                <Spacer />
                <Education />
                <Spacer />
                <Projects/>
            </div>

        </div>
    );
}