import React from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import Navbar from "./Navbar";
import logo2 from "../images/logo2.png";
import plan1 from "../images/plan1.jpg";
import plan2 from "../images/plan2.jpg";
import plan3 from "../images/plan3.jpg";
import "../css/home.css";


const slideImages = [
    plan1,
    plan2,
    plan3
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const Home = () => {

    return (
        <>
        <Navbar />
        <div className="container">
            <h3 className="center-align"><img src={logo2} /></h3>
            <div class="row">
                <div class="col s6">
                    <p class="flow-text" >
                    J&amp;S Irrigation is a family owned business with over a decade of experience in the irrigation industry.
                    Our goal is to educate our customers about good lawn watering practices in order to conserve water.
                    Overwatering is main cause of landscape water waste and contributes to more than 50% waste
                    due to evaporation and runoff.
                    </p>
                    <p class="flow-text">Designing an efficient sprinkler system is a key step towards conserving water and maintaing a healthy lawn.</p>
                </div>
                <div class="col s6" >
                    <ul class="collection" >
                        <li class="collection-item avatar">
                            <i class="far fa-address-card left"></i>
                            <span class="title"> John Doe</span>
                            <p>Got my sprinkler system installed by these guys and my lawn is so green!</p>
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
                        </li>
                        <li class="collection-item avatar">
                            <i class="far fa-address-card left"></i>
                            <span class="title"> Sarah Smith</span>
                            <p>I called them for an emergency repair and they showed up quick and fixed the problem.</p>
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        </li>
                    </ul>
                </div>
                    <div class="row">
                        <div class="col s6">
                                <div class="card-panel cyan darken-1">
                                    <div className="center-align">
                                        <span class="white-text">
                                            <h6>Call or Email us at:</h6>
                                            (469) 360-6894
                                             <br/>
                                            js_irrigation@outlook.com
                                        </span>
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
            <div class="row">
                <div class="col s12">
                    <h4 className="center-align">Sample designs</h4>
                </div>
            </div>
            <Slide {...properties}>

                    <div className="each-slide" >
                        <div className="photo" style={{'backgroundImage': `url(${slideImages[0]})`}}>
                        </div>
                    </div>

                    <div className="each-slide">
                        <div className="photo" style={{'backgroundImage': `url(${slideImages[1]})`}}>
                        </div>
                    </div>

                    <div className="each-slide">
                        <div className="photo" style={{'backgroundImage': `url(${slideImages[2]})`}}>
                        </div>
                    </div>
            </Slide>
        </div>
        </>
    )
}

export default Home