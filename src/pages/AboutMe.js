import React from "react";
import { Row, Col, Container, Form, Button, CardGroup } from "react-bootstrap";
import $ from "jquery";
import CommentCol from "./aboutme/CommentCol";
import CommentsList from "./aboutme/CommentsList";

class AboutMe extends React.Component {
  render() {
    $("#Home").removeClass("active");
    $("#ComputerVision").removeClass("active");
    $("#AboutMe").addClass("active");
    const allComments = this.props.commentsArr.map((comment, index) => {
      return <CommentsList card={comment} key={index} />;
    });

    return (
      <Container>
        <Row>
          <Col></Col>
          <Col  md={{ span: 4, offset: 8 }}>write comment</Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>

          <CommentCol newComment={this.props.newComment} />
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 8 }}>
            <CardGroup>{allComments}</CardGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default AboutMe;
