import {Form, NavLink, useRouteLoaderData } from "react-router-dom";
import account  from "../assets/account.svg";


function Header() {
const token = useRouteLoaderData('root');

console.log(token)

    return <>
    <nav className="navbar navbar-expand-lg  nav">
        <div className="container-fluid">
            <a className="navbar-brand nav__logo" href="#">careerHunt</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item nav__item--jobs">
                <NavLink to='/' className="nav-link active" aria-current="page">Jobs</NavLink>
            </li>
            <li className="nav-item nav__item--about">
                <NavLink to='/about' className="nav-link">About</NavLink>
            </li>
            {!token &&
                <li className="nav-item nav__item--signin">
                <NavLink to='/signin' className="nav-link">Signin</NavLink>
                </li>
            }
            
            {!token &&
                <li className="nav-item nav__item--register">
                <NavLink to='/register' className="nav-link">Register</NavLink>
                </li>
            }
           
            {token &&
            <li className="nav-item nav__item--logout">
                 <Form action='/logout' method='post'>
                    <button className="nav-link " >Logout</button>
                </Form>
            </li> }
           
           {token &&
            <li className="nav-item nav__item--savedjobs">
                <NavLink to='/savedjobs' className="nav-link">
                    Saved Jobs
                </NavLink>
            </li>
           }

           {token &&

            <li className="nav-item dropdown nav__item--delete-account ">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={account} alt="" />
            </a>
            <ul className="dropdown-menu delete">
                
                    <Form action='/deleteUser' method='post' >
                        <button className="nav-link">Delete Account</button>
                    </Form>
               
               
            </ul>
            </li>

           }
            
      </ul>
    </div>
  </div>
</nav>        
    </>
}

export default Header;