import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Menu from "../components/Menu";
import Resume from "../images/KRhynes_Resume.pdf";

export default class About extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Container>
                    <div><a href={Resume}></a></div>
                </Container> 
                About Screen
            </div>
            
        )
    }
}