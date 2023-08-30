import {Link, useMatch, useResolvedPath} from 'react-router-dom'

export default function NavLink({ to, title, ...props }) {
    // const path = window.location.pathname;
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}><Link to={to} {...props}>{title}</Link></li>
    )
}