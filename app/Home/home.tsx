import "./index.css"
import Typewriter from '~/Typewriter'
import Nav from "./../Nav/Nav.tsx"
import About from "./../About/About.tsx"
export default function Home() {
    
    return (
        <div className="master-container">
            <Nav />
            <div>
                <About />
            </div>
        </div>
    )
}