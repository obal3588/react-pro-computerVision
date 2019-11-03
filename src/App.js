import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as style from "react-bootstrap";
import $ from "jquery";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home.js";
import AboutMe from "./pages/AboutMe.js";
import ComputerVison from "./pages/ComputerVision.js";
import Errors from "./pages/Errors.js";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  newComment = data => {
    console.log(data);
    this.setState({
      comments: [data, ...this.state.comments]
    })
    
  };

  render() {
    return (
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav" id="mainBar">
              <Link to="/" className="nav-item nav-link " id="Home">
                Home{" "}
              </Link>
              <Link to="/aboutme" className="nav-item nav-link" id="AboutMe">
                About{" "}
              </Link>
              <Link
                to="/computervision"
                className="nav-item nav-link "
                id="ComputerVision"
              >
                Computer Vsion{" "}
              </Link>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/aboutme"
            component={() => (
              <AboutMe
                newComment={this.newComment}
                commentsArr ={this.state.comments}
              />
            )}
          />
          <Route path="/computervision" component={ComputerVison} />
          <Route component={Errors} />
        </Switch>
      </Router>
    );
  }
}

export default App;
