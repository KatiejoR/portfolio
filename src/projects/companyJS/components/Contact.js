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
                <Row>
                    <Col sm="auto">
                    <div class="input-field">
                        <input  id="first_name" type="text" class="validate"/>
                        <label for="first_name">First Name</label>
                    </div>
                    </Col>
                    
                </Row>
                <Row>
                    <Col sm="auto">
                        <div class="input-field">
                           <input  id="last_name" type="text" class="validate "/>
                            <label for="last_name">Last Name</label> 
                        </div>
                        
                    </Col>
                </Row>
                        
                <Row>
                    <Col sm="auto">
                      <div class="input-field">
                        <input id="icon_telephone" type="tel" class="validate"/>
                        <label for="icon_telephone"><i class="fas fa-phone-alt left"></i> Telephone</label>
                    </div>  
                    </Col>
                </Row>     
                
                <Row>
                    <Col sm="auto">
                        <div class="input-field">
                            <input id="email" type="text" class="validate"/>
                            <label for="email"><i class="fas fa-paper-plane left"></i> Email</label>
                        </div>
                    </Col>
                </Row>
                
                <Row>
                    <Col sm="auto">
                       <div class="input-field">
                            <textarea id="textarea1" class="materialize-textarea"></textarea>
                            <label for="textarea1"><i class="fas fa-comment left"></i> Message</label>
                        </div> 
                    </Col>
                </Row>
                    

                    
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