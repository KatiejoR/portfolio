import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo1.png";

const Navbar = () => {
    return (
        <nav className="nav-wrapper light-green ">
            <div className="container">
                <img src={logo} /><span>Irrigation</span>
                <ul className="right">
                    <li><NavLink to="/portfolio/companyJS/home">Home</NavLink></li>
                    <li><NavLink to="/portfolio/companyJS/about">About</NavLink></li>
                    <li><NavLink to="/portfolio/companyJS/contact">Contact</NavLink></li>
                    <li><NavLink to="/portfolio/companyJS/services">Services</NavLink></li>
                    <li><NavLink to="/portfolio">Back to Porfolio</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar