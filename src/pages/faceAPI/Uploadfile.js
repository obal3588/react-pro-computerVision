import React, { Component } from "react";
import { Row, Col, Container, Form, Button, CardGroup } from "react-bootstrap";
import CallAPI from "./CallAPI";
import { file } from "@babel/types";


export class FaceAPI extends Component {
  constructor(props) {
    super(props);
  }

//   componentDidMount(){
//     document.getElementById('inputGroupFile01').addEventListener('change',this.handleClick, false);
 
//     // $("#inputGroupFile01").change(this.handleClick);
//   }

  handleClick = event => {
    
   
      const file1 = event.target.files[0];
      let reader = new FileReader();
   
      reader.onload = event => {
        console.log("ss",event)
        document.getElementById("imgx").src = event.target.result;
       CallAPI(file1)
      };
    
   reader.readAsDataURL(event.target.files[0]);
  };

  render() {
    return (

            <div className="input-group ">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupFileAddon01">
                  Upload
                </span>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                  aria-describedby="inputGroupFileAddon01"
                  onChange ={this.handleClick}

                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                  Choose file
                </label>
              </div>
            </div>

    );
  }
}

export default FaceAPI;
