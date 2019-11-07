
// import React from "react"
// import { CardColumns,Card,Button} from "react-bootstrap";

// const handleClick=(e)=>{
//     e.stopPropagation()
//     console.log(e);
// }
// const CommentsList = (props) => {
   
    
//     return (
//         <CardColumns >
//         <Card style={{ width: '18rem' }}>
//         <Card.Body  >
//         <Card.Title>{props.card.name}</Card.Title>
//         <Card.Text>
//         {props.card.comment}
//         </Card.Text>
      
//         </Card.Body>
//         <Button variant="primary" key={props.deleteComment}  >Delete</Button>
//         </Card>
        
//         </CardColumns>
//     );

// }

// export default CommentsList;


import React, { Component } from 'react'
 import { CardColumns,Card,Button} from "react-bootstrap";
 import $ from "jquery";
export class CommentsList extends Component {

constructor(props){
    super(props);

    this.state={
        index:this.props.index
    }
};

 handleClick=(e)=>{
   
    console.log(e)
this.props.deleteComment(12)
}
    render() {
        console.log(this.state.index)
        return (
        <CardColumns >
        <Card style={{ width: '18rem' }}>
        <Card.Body  >
        <Card.Title>{this.props.card.name}</Card.Title>
        <Card.Text>
        {this.props.card.comment}
        </Card.Text>
      
        </Card.Body>
        <Button  onClick={this.handleClick(this.props.index)}  >Delete</Button>
        </Card>
         
        </CardColumns>
        )
    }
}

export default CommentsList


