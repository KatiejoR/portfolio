import React from "react";
import Navbar from "./Navbar";

const Services = () => {
    
    return (
        <>
        <Navbar></Navbar>
        <div className="container">
            <h3 className="center-align">Services</h3>
            <div className="row">
                <div className="col s12">
                    <blockquote className="z-depth-1">
                    <p>We are knowledgeable about the lawn sprinkler industry and sprinkler system repairs.</p>
                    <p>With over 15 years of experience, we are proud to help homeowners who are having problems with their sprinkler systems and those who are looking for the best water efficient lawn sprinkler system.</p>
                    <p>If you have any sprinkler system problems or questions, feel free to contact us today. We are more than happy to help.</p>
                    </blockquote>
                </div>
            </div>
            <div className="row">
            <div className="col s6">
                    <table className="striped">
                        <thead className="z-depth-1">
                            <tr>
                                <th>System Installation</th>
                            </tr>
                        </thead>
                        <tbody className="z-depth-1">
                            <tr>
                                <td>Discuss with the property owner.</td>
                            </tr>
                            <tr>
                                <td>Measure property.</td>
                            </tr>
                            <tr>
                                <td>Design a lawn sprinkler system.</td>
                            </tr>
                            <tr>
                                <td>Approve design with owner.</td>
                            </tr>
                            <tr>
                                <td>Obtain city permit.</td>
                            </tr>
                            <tr>
                                <td>Schedule date of installation.</td>
                            </tr>
                            <tr>
                                <td>Finish installation.</td>
                            </tr>
                            <tr>
                                <td>Schedule city inspections.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col s6">
                    <table className="striped">
                        <thead className="z-depth-1">
                            <tr>
                                <th>System Repair</th>
                            </tr>
                        </thead>
                        <tbody className="z-depth-1">
                            <tr>
                                <td>Broken sprinkler heads</td>
                            </tr>
                            <tr>
                                <td>Leaking valves</td>
                            </tr>
                            <tr>
                                <td>Broken pipes</td>
                            </tr>
                            <tr>
                                <td>Faulty controller</td>
                            </tr>
                            <tr>
                                <td>Electrical troubleshooting</td>
                            </tr>
                            <tr>
                                <td>Wire/valve location</td>
                            </tr>
                            <tr>
                                <td>Rain/freeze sensor installation</td>
                            </tr>
                            <tr>
                                <td>and more!</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
         
        </div>
        </>
    )
}

export default Services