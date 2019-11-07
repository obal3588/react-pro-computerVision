import React, { Component } from 'react'
import Uploadfile from "./faceAPI/Uploadfile"
import { Tabs,Tab,Row, Col, Container, Form, Button, CardGroup } from "react-bootstrap";
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import ImageHistory from "./faceAPI/ImageHistory"
export class FaceAPI extends Component {

    constructor(props){
        super(props);
    }


    callAdd=(d)=>{
        console.log("call")
        this.props.newImage(d)
    }

    render() {
        return (
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="upload" title="Upload">
            <Container className="justify-content-right">
            <Row>
                <div id="upload">
                <Uploadfile newImage={this.callAdd} images={this.props.images}/>
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
             {/* <ImageHistory list={this.props.images}/> */}
            </Tab>
            
          </Tabs>
        )
    }
}

export default FaceAPI
