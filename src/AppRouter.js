import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./screens/about";
import Home from "./screens/home";
import Portfolio from "./screens/portfolio";
import Contact from "./screens/contact";
import Weather from "./projects/weatherapp/Weather";
import JSHome from "./projects/companyJS/components/Home";
import JSContact from "./projects/companyJS/components/Contact";
import JSServices from "./projects/companyJS/components/Services";
import JSAbout from "./projects/companyJS/components/About";

export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home></Home>
                    </Route>
                    <Route path="/about" exact>
                        <About></About>
                    </Route>
                    <Route path="/contact" exact>
                        <Contact></Contact>
                    </Route>
                    <Route path="/portfolio" exact>
                        <Portfolio></Portfolio>
                    </Route>
                    <Route path="/portfolio/weatherProject" exact>
                        <Weather></Weather>
                    </Route>
                    <Route path="/portfolio/companyJS/home" exact>
                        <JSHome></JSHome>
                    </Route>
                    <Route path="/portfolio/companyJS/about" exact>
                        <JSAbout></JSAbout>
                    </Route>
                    <Route path="/portfolio/companyJS/contact" exact>
                        <JSContact></JSContact>
                    </Route><Route path="/portfolio/companyJS/services" exact>
                        <JSServices></JSServices>
                    </Route>
                </Switch>
            </Router>
        )
    }
}