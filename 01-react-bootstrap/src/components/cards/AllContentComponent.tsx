import { Card, ListGroup } from "react-bootstrap";
import "holderjs";

function AllContentComponent() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>Card Testing</Card.Header>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Subtitle>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link>Card Link</Card.Link>
        <Card.Link>Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default AllContentComponent;
