import React from "react";
import $ from "jquery";
import ComputerV from "./computerVision/ComputerV";
import { Row, Col, Container, Form, Button, CardGroup } from "react-bootstrap";

class ComputerVision extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stopVideo: false
    };
  }

  render() {
    $("#Home").removeClass("active");
    $("#AboutMe").removeClass("active");
    $("#ComputerVision").addClass("active");
    return (
      <Container>
         <h1>ComputerVision</h1>{" "}
        <Row>
          <Col>
            {" "}
           
          </Col>
        </Row>
        <Row>
          <Col>
            <ComputerV stopVideo={this.state.stopVideo} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default ComputerVision;
