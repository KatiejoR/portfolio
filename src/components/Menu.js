import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Menu() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand><Link to="/">Katherine Rhynes</Link></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="ml-auto">
                    <Nav.Link><Link to="/about">About</Link></Nav.Link>
                    <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                    <Nav.Link><Link to="/projects">Projects</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}