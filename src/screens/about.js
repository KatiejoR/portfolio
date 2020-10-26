import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Menu from "../components/Menu";
import Resume from "../images/KRhynes_Resume.pdf";

export default class About extends Component {
    render() {
        return (
            <div>
                <Menu />
                <br/>
                <Container>
                    <Row className="justifty-content-md-center" >
                        <Col md="auto">
                            <object type="application/pdf" data={Resume} style={{height: 800, width: 750}} ></object>
                        </Col>
                    </Row>
                </Container> 
                About Screen
            </div>
            
        )
    }
}