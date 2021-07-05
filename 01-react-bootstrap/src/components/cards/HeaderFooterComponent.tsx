import { Card, Button } from "react-bootstrap";

function HeaderFooterComponent() {
  return (
    <Card className="text-center" style={{ width: "18rem" }}>
      <Card.Header as="h5">Header</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{" "}
          </p>
        </blockquote>
        <footer className="blockquote-footer mb-2">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
        <Button>Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 Days ago</Card.Footer>
    </Card>
  );
}

export default HeaderFooterComponent;
