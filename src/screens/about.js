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
                <br />
                <Container>
                    <div style={{textAlign: "center"}}>
                        <object type="application/pdf" data={Resume} style={{ height: "90vh", width: "75%"}} ></object>
                    </div>
                </Container>

            </div>

        )
    }
}