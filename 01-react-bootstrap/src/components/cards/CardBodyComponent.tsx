import { Card } from "react-bootstrap";

function CardBodyComponent() {
  return (
    <>
      <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
      <Card body>This is some text within a card body.</Card>
    </>
  );
}

export default CardBodyComponent;
