import React from "react";
import  "../css/about.css";
import SrPhoto from "../images/Sr.jpg";
import JrPhoto from "../images/Jr.jpg";
import Navbar from "./Navbar";

const About = () => {
    return (
        <>
        <Navbar />
        <div class="container">
            <h3 class="center-align ">About </h3>
        <div class="row">   
            <div class="col s12">
                <blockquote >
                Improper irrigation design and watering techniques are the main cause of landscape water waste.
                We are dedicated on the design and intallation of the most water efficient lawn sprinkler systems.
                </blockquote>
            </div>
        </div>
        <div class="row">
                <div class="col s6 m6">
                    <div class="card">
                        <div class="card-image">
                        <img src={SrPhoto} />
                            <span class="card-title">Servando Sr.</span>
                        </div>
                        <div class="card-content">
                            <p>Business owner of J&amp;S Irrigation with over 15 years of experience.</p>
                        </div>
                    </div>
                </div>
                <div class="col s6 m6">
                    <div class="card">
                        <div class="card-image">
                        <img src={JrPhoto} />
                            <span class="card-title">Servando Jr.</span>
                        </div>
                        <div class="card-content">
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