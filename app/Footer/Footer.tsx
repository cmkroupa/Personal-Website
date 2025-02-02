import "./Footer.css"

export default function Home() {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Cameron Kroupa. All rights reserved.</p>
            <p>Website designed and developed by <a href="">Cameron Kroupa</a>.</p>
        </footer>

    );
}