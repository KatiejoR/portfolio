import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./screens/about";
import Home from "./screens/home";
import Portfolio from "./screens/portfolio";
import Contact from "./screens/contact";
import Weather from "./components/Weather";

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
                </Switch>
            </Router>
        )
    }
}