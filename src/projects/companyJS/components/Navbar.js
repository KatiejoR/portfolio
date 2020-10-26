import React from "react";
import { Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import logo from "../images/logo1.png";

const Navbar = () => {
    return (
        <nav className="nav-wrapper light-green ">
            <div className="container">
                <a href="https://js-irrigation.business.site/" className="brand-logo"><img src={logo} /> Irrigation</a>
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