import { NavLink } from "react-router-dom";

function Header() {
    return <>
        <NavLink to='/'>Jobs</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/signin'>Signin</NavLink>
        <NavLink to='/register'>Register</NavLink>
    </>
}

export default Header;