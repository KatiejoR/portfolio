import React from "react";
import  "../css/about.css";
import SrPhoto from "../images/Sr.jpg";
import JrPhoto from "../images/Jr.jpg";
import Navbar from "./Navbar";

const About = () => {
    return (
        <>
        <Navbar />
        <div className="container">
            <h3 className="center-align ">About </h3>
        <div className="row">   
            <div className="col s12">
                <blockquote >
                Improper irrigation design and watering techniques are the main cause of landscape water waste.
                We are dedicated on the design and intallation of the most water efficient lawn sprinkler systems.
                </blockquote>
            </div>
        </div>
        <div className="row">
                <div className="col s6 m6">
                    <div className="card">
                        <div className="card-image">
                        <img src={SrPhoto} />
                            <span className="card-title">Servando Sr.</span>
                        </div>
                        <div className="card-content">
                            <p>Business owner of J&amp;S Irrigation with over 15 years of experience.</p>
                        </div>
                    </div>
                </div>
                <div className="col s6 m6">
                    <div className="card">
                        <div className="card-image">
                        <img src={JrPhoto} />
                            <span className="card-title">Servando Jr.</span>
                        </div>
                        <div className="card-content">
                            <p>Servando Jr. has been licensed since 2015.</p>
                        </div>
                    </div>
                </div>
         </div>
     </div>
     </>
    )
}
export default About