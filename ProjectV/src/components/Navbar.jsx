import NavLink from './NavLink.jsx';
import '../styles/navbar.css'
import {Link} from 'react-router-dom'


export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="nav__logo">Logo</Link>
            <ul className="nav__links">
                <NavLink to="/" title="Home" />
                <NavLink to="/contact" title="Contact" />
                <NavLink to="/register" title="Register" />
                <NavLink to="/leaderboard" title="Leaderboard" />
                {/* {links.map((link, index) => (
                    <NavLink key={index} {...link} />
                ))} */}
            </ul>
        </nav>
    )
}