import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Menu from "../components/Menu";
import Logo from "../images/logo.png";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Container>
                    <br />
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <img src={Logo} alt="logo"></img>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            Katherine Rhynes
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            Web Designer
                        </Col>
                    </Row>
                </Container> 
            </div>
            
        )
    }
}