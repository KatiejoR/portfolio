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
                           <h2> Katherine Rhynes</h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            Web Designer
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="1"><a href="https://twitter.com/" style={{color:"inherit"}}><i className="fab fa-twitter fa-2x" ></i></a></Col>
                        <Col md="1"><a href="https://www.instagram.com/" style={{color:"inherit"}}><i class="fab fa-instagram fa-2x"></i></a></Col>
                        <Col md="1"><a href="https://www.facebook.com/" style={{color:"inherit"}}><i class="fab fa-facebook fa-2x"></i></a></Col>
                        <Col md="1"><a href="https://github.com/" style={{color:"inherit"}}><i class="fab fa-github fa-2x"></i></a></Col>
                    </Row>
                </Container> 
            </div>
            
        )
    }
}