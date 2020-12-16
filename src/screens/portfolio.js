import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button"
import Menu from "../components/Menu";
import Table from "react-bootstrap/Table";

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <Menu />
                <br/>
                <Container>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Assignment </th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td> Feb 16, 2020 </td>
                            <td> Weather app </td>
                            <td> 
                                <Link to="/portfolio/weatherProject">
                                    <Button variant="link">Weather app</Button>
                                </Link>    
                            </td>
                        </tr>
                        <tr>
                            <td> March 11, 2020 </td>
                            <td> J&amp;S Irrigation Website </td>
                            <td> 
                                <Link to="/portfolio/companyJS/home">
                                    <Button variant="link">J&amp;S Irrigation Website</Button>
                                </Link>    
                            </td>
                        </tr>
                        <tr>
                            <td> &nbsp; </td>
                            <td> &nbsp; </td>
                            <td> &nbsp; </td>
                        </tr>
                        <tr>
                            <td> &nbsp; </td>
                            <td> &nbsp; </td>
                            <td> &nbsp; </td>
                        </tr>
                        <tr>
                            <td> &nbsp; </td>
                            <td> &nbsp; </td>
                            <td> &nbsp; </td>
                        </tr>
                        <tr>
                            <td> &nbsp; </td>
                            <td> &nbsp; </td>
                            <td> &nbsp; </td>
                        </tr>
                        <tr>
                            <td> &nbsp; </td>
                            <td> &nbsp; </td>
                            <td> &nbsp; </td>
                        </tr>
                        <tr>
                            <td> &nbsp; </td>
                            <td> &nbsp; </td>
                            <td> &nbsp; </td>
                        </tr>
                        <tr>
                            <td> &nbsp; </td>
                            <td> &nbsp; </td>
                            <td> &nbsp; </td>
                        </tr>

                    </tbody>
                    </Table>
                </Container>
                
            </div>
            
        )
    }
}