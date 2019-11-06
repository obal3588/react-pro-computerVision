
import React from "react"
import { CardColumns,Card} from "react-bootstrap";

const CommentsList = (props) => {
   

    return (
        <CardColumns>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>{props.card.name}</Card.Title>
        <Card.Text>
        {props.card.comment}
        </Card.Text>
        </Card.Body>
        </Card>
        </CardColumns>
    );

}

export default CommentsList;
    // {/* <Card.Link href="#">Edit</Card.Link>
    // <Card.Link href="#">Delet</Card.Link> */}