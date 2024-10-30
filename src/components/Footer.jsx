import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <>
        <ul className="footer__items">
            <li className="footer__item--jobs">
                <NavLink to='/'>Jobs</NavLink>
            </li>
            <li className="footer__item--signin">
                <NavLink to='/signin' >Signin</NavLink>
            </li>
            <li>
                <NavLink to='/register' >Register</NavLink>
            </li>
            <li className="footer__item--privacy">
                <NavLink to='/privacypolicies' >Privacy Policies</NavLink>
            </li>
            <li className="footer__item--disclaimer">
                <NavLink to='/disclaimers' >Disclaimers</NavLink>
            </li>
            <p className="copyright">&copy; 2024 careerHunt</p>
        </ul>          
        </>
    )
}

export default Footer;