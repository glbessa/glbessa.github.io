import "./Header.css";

import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
            </nav>
        </header>
    );
}