import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Menu from "../components/Menu";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
export default class Contact extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Container>
                    <br />

                    <Row className="justify-content-center">
                        <fieldset>
                            <legend>
                                <h1>Let's talk.</h1>

                                <Form >
                                    <Form.Group>
                                        <Form.Label>
                                            Name
                            </Form.Label>
                                        <Col md="12">
                                            <Form.Control type="text" placeholder="Enter your Name"></Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>
                                            E-mail
                            </Form.Label>
                                        <Col md="12">
                                            <Form.Control type="email" placeholder="Enter your E-mail"></Form.Control>
                                        </Col>
                                    </Form.Group><Form.Group>
                                        <Form.Label>
                                            Message
                            </Form.Label>
                                        <Col md="12">
                                            <Form.Control as="textarea" rows={3} placeholder="Enter your Message here"></Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Button variant="secondary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </legend>
                        </fieldset>
                    </Row>
                </Container>

            </div>

        )
    }
}