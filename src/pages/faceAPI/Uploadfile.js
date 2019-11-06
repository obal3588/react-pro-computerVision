import React, { Component } from "react";
import { Row, Col, Container, Form, Button, CardGroup } from "react-bootstrap";
import $ from "jquery";
import { file } from "@babel/types";

export class FaceAPI extends Component {
  constructor(props) {
    super(props);

    
  }

  handleClick = event => {
    const temp =this;
    const file1 = event.target.files[0];
    let reader = new FileReader();
    const subscriptionKey = "d56a00a55f9c44c9a0372880cfa969da";

    const uriBase =
      "https://reconface.cognitiveservices.azure.com/face/v1.0/detect";

    // Request parameters.
    const params = {
      returnFaceId: "true",
      returnFaceLandmarks: "true",
      returnFaceAttributes:
        "age,gender,headPose,smile,facialHair,glasses,emotion," +
        "hair,makeup,occlusion,accessories,blur,exposure,noise"
    };
    let obj;


    reader.onload = event => {
      console.log("ss", event);
      document.getElementById("imgx").src = event.target.result;

      const postRec = new XMLHttpRequest();
      const url =
        "https://reconface.cognitiveservices.azure.com/face/v1.0/detect?" +
        $.param(params);
      postRec.open("POST", url, true);

      postRec.setRequestHeader("Content-Type", "application/octet-stream");
      postRec.setRequestHeader(
        "Ocp-Apim-Subscription-Key",
        "d56a00a55f9c44c9a0372880cfa969da"
      );

      postRec.send(file1);
      postRec.onreadystatechange = function(response) {
        if (this.readyState == 4 && this.status == 200) {
           obj = JSON.parse(this.responseText);
         

          const oleft = document.getElementById("imgx").offsetLeft;
          const otop = document.getElementById("imgx").offsetTop;
          const faceRec = document.createElement("div");

          const fc = document.getElementById("face");
          const fet = document.getElementById("features");

          console.log(obj);
          obj.forEach(obj => {
            const faceRec = document.createElement("div");
            const points = document.createElement("span");
            faceRec.style.left = oleft + obj.faceRectangle.left + "px";
            faceRec.style.top = otop + obj.faceRectangle.top + "px";
            faceRec.style.width = obj.faceRectangle.width + "px";
            faceRec.style.height = obj.faceRectangle.height + "px";
            faceRec.style.border = "2px solid purple";
            faceRec.style.position = "absolute";
            faceRec.id = "faceRec";
            fc.append(faceRec);
            points.style.left =
              oleft + obj.faceLandmarks.eyeLeftBottom.x + "px";
            points.style.top = otop + obj.faceLandmarks.eyeLeftBottom.x + "px";
            faceRec.append(points);
            fet.style.color = "black";
           
 
         

          });

          
        }
      };
    };

    reader.readAsDataURL(event.target.files[0]);
    temp.props.newImage({inf:obj, pic:event.target.files[0]});
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
            onChange={this.handleClick}
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
