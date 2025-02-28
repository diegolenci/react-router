import { Link, NavLink } from "react-router-dom";

export default function MainNav() {
    return (
        <nav>
            <Link to="/">Home Page</Link>
            <NavLink to="/lista">Lista post</NavLink>
        </nav>
    )
}