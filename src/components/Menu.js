import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Menu() {
    return (
        <Navbar expand="lg" style={{backgroundColor: "#E2B62F"}}>
            <Navbar.Brand><Link  style={{color: "black", hover: "#577671"}} to="/">Katherine Rhynes</Link></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="ml-auto">
                    <Nav.Link><Link style={{color: "black"}} to="/about">About</Link></Nav.Link>
                    <Nav.Link><Link style={{color: "black"}} to="/contact">Contact</Link></Nav.Link>
                    <Nav.Link><Link style={{color: "black"}} to="/portfolio">Portfolio</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}