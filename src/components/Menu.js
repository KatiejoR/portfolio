import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

export default function Menu() {
    return (
        <Navbar expand="lg" style={{backgroundColor: "#E2B62F"}}>
            <Navbar.Brand><Link  style={{color: "black", hover: "#577671"}} to="/"><img src={Logo} style={{height:"25%", width:"25%"}} className="d-inline-block "></img></Link></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="ml-auto">
                    <Nav.Link href="/about" style={{color: "black"}}>About</Nav.Link>
                    <Nav.Link href="/contact" style={{color: "black"}}>Contact</Nav.Link>
                    <Nav.Link href="/portfolio" style={{color: "black"}}>Portfolio</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}