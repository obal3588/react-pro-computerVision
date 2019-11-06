import React, { Component } from 'react'
import Uploadfile from "./faceAPI/Uploadfile"
import { Row, Col, Container, Form, Button, CardGroup } from "react-bootstrap";

export class FaceAPI extends Component {

    // constructor(props){

    //     this.state={
    //         newFile=false,
    //     }
    // }


    render() {
        return (
            <Container className="justify-content-right">
            <Row>
                <div id="upload">
                <Uploadfile/>
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
        )
    }
}

export default FaceAPI
