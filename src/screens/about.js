import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Menu from "../components/Menu";
export default class About extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Container>
                    Hi
                </Container> 
                About Screen
            </div>
            
        )
    }
}