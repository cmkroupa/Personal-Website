import "./Nav.css"

export default function Nav() {
    
    return (
        <nav className="font">
            <ul className="nav-container">
                <a className="nav house" href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                </svg>
                </a>
                <a  className="nav" href="/education">Education</a>
                <a  className="nav" href="/projects" >Projects</a>
                <a  className="nav" href="/experience">Experience</a>
                <a className="nav" href="/contact">Contact</a>
            </ul>
        </nav>
    )
}