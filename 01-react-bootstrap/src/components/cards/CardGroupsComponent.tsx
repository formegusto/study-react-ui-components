import { CardGroup, Card } from "react-bootstrap";
import "holderjs";

function CardGroupComponent() {
  return (
    <CardGroup>
      {[0, 1, 2].map((number, idx) => (
        <Card key={idx}>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      ))}
    </CardGroup>
  );
}

export default CardGroupComponent;
