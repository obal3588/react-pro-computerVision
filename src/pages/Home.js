import React from 'react'
import $ from "jquery";
import { ListGroup } from "react-bootstrap";

class Home extends React.Component {


  render() {
 
    $("#AboutMe").removeClass("active");
    $("#ComputerVision").removeClass("active");
    $("#Home").addClass("active")
    return(

     
<ListGroup>
  <br></br>
<h4>computer Vision </h4>
<ListGroup.Item> @tensorflow-models/coco-ssd</ListGroup.Item>
      <ListGroup.Item> tensorflow/tfjs-converter</ListGroup.Item>
      <ListGroup.Item> tensorflow/tfjs-core</ListGroup.Item>
      <ListGroup.Item> face-api.js</ListGroup.Item>
      <ListGroup.Item> p5</ListGroup.Item>
      <ListGroup.Item> react-p5-wrapper</ListGroup.Item>
<h4>Microsoft Azure Face API </h4> 


</ListGroup>
    )
    

  }
}
export default Home