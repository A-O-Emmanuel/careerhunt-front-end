import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <>
        <div className="footer">
        <NavLink to='/'>Jobs</NavLink>
        <NavLink to='/signin'>Signin</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/privacypolicies'>Privacy Policies</NavLink>
        <NavLink to='/disclaimers'>Disclaimers</NavLink>
        </div>
       
        </>
    )
}

export default Footer;