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
import FaceAPI from "./pages/FaceAPI"

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      images:[]
    };
  }

  newComment = data => {
    console.log(data);
    this.setState({
      comments: [data, ...this.state.comments]
    })
    
  };


  newImage = data => {
    console.log(data);
    this.setState({
      images: [data, ...this.state.images]
    })

    console.log("newimag",this.state.images)
  };

  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav" id="mainBar">
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
              <Link
                to="/faceapi"
                className="nav-item nav-link "
                id="FaceAPI"
              >
                FaceAPI{" "}
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
          <Route path="/faceapi"  component={()=> (
            <FaceAPI
             newImage={this.newImage} 
             images={this.state.images} 
             />
             )}/>
          <Route component={Errors} />
        </Switch>
      </Router>
    );
  }
}

export default App;
