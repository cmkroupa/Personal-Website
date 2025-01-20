import "./index.css"
import Nav from "./../Nav/Nav.tsx"
import Intro from "./../Intro/Intro.tsx"
import Projects from "./../Projects/Projects.tsx"
import Experience from "./../Experience/Experience.tsx"
import Contact from "./../Contact/Contact.tsx"
export default function Home() {
    
    return (
        <>
            <Nav />
            <Intro />
            <Projects />
            <Experience />
            <Contact/>
        </>
    )
}