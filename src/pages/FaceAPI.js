import React, { Component } from 'react'
import Uploadfile from "./faceAPI/Uploadfile"
import { Tabs,Tab,Row, Col, Container, Form, Button, CardGroup } from "react-bootstrap";
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

export class FaceAPI extends Component {

    constructor(props){
        super(props)
    }


    render() {
        return (
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="upload" title="Upload">
            <Container className="justify-content-right">
            <Row>
                <div id="upload">
                <Uploadfile newImage={this.props.newImage} images={this.props.images}/>
                </div>
              
            </Row>
            <Row>
                
                <div id="getFaceDetails">
                <img id="imgx" class="img-fluid" />
                <div id="face"></div>
                <ul id="features" class="collection"></ul>
                </div>
           
            </Row>
          </Container>
            </Tab>
            <Tab eventKey="profile" title="History">
             a
            </Tab>
            
          </Tabs>
        )
    }
}

export default FaceAPI
