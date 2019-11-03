// return the comment colom 
import React, { Component } from 'react'

import { Row, Col, Container, Form, Button } from "react-bootstrap";
import $ from "jquery";






export class CommentCol extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          comment: ""
        };
      }
    
    handleClick = (e) => {
        e.preventDefault();
        this.props.newComment(this.state);
      };
    
      handleChange =(e)=>{      
        this.setState({
            [e.target.name]:e.target.value,
        })
    }


    render() {
        return (
            <Col>
            <Form>
            <Form.Group controlId="nameId">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="name" onChange ={this.handleChange} name="name" />
            </Form.Group>
    
            <Form.Group controlId="commentId">
              <Form.Label>Comments</Form.Label>
              <Form.Control as="textarea" rows="3" onChange ={this.handleChange} name="comment" />
            </Form.Group>
            <Button onClick={this.handleClick} variant="primary">
            Done </Button>
          </Form>
          </Col>
          
         
  
        );
    }
}

export default CommentCol
