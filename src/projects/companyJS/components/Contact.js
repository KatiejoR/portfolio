import React, { useState } from "react";
import Navbar from "./Navbar";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const Contact = () => {
    
    // Declare a new state variable, which we'll call "fname"
    // useState returns a pair: the current state value and a function
    // that lets you update it. You can call this function from an event handler
    // or somewhere else.
    // const [fname, setFname] = useState(""); // useState("") is initialized to "" - an empty string

    const handleSubmit = e => {
        e.preventDefault();
        // setFname(document.getElementById('first_name').value);
        window.alert(`Thanks ${document.getElementById('first_name').value} for your comments. We will get back to you shortly.`);
    }

    return (
        <>
        <Navbar />
        <div className="container">
            <h3 className="center-align">Get a Quote!</h3>

            <Row className="justify-content-md-center">
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                <Row>
                    <Col sm="auto">
                    <div className="input-field">
                        <input  id="first_name" type="text" className="validate" placeholder="First Name"/>
                        <label htmlFor="first_name"></label>
                    </div>
                    </Col>
                    
                </Row>
                <Row>
                    <Col sm="auto">
                        <div className="input-field">
                           <input  id="last_name" type="text" className="validate" placeholder="Last Name"/>
                            <label htmlFor="last_name"></label> 
                        </div>
                        
                    </Col>
                </Row>
                </Form.Group>
                
                <Form.Group as={Row}>
                    <i className="fas fa-phone-alt left"></i>
                      <div className="input-field">
                        <input id="icon_telephone" type="tel" className="validate" placeholder="Telephone"/>
                    </div>  
                </Form.Group>  
                    
                <Form.Group as={Row}>
                    <i className="fas fa-paper-plane left"></i>
                    <div className="input-field">
                        <input id="email" type="text" className="validate" placeholder="Email"/>
                    </div>
                </Form.Group>
                    
                <Form.Group as={Row}>
                    <i className="fas fa-comment left"></i>
                        <div className="input-field">
                            <textarea id="textarea1" className="materialize-textarea" placeholder="Message"></textarea>
                        </div>
                </Form.Group>
                        
                    

                    
                     <div>                
                        <Button as="input" type="submit" value="Submit"/>
                     </div>
            </Form>
            </Row>
            
            {/* <div>
                <h4>Thanks {fname} for your comments. We will get back to you shortly.</h4>
            </div> */}
        </div>
        </>
        
    )
}
export default Contact