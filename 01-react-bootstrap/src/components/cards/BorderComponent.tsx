import { Card } from "react-bootstrap";

function BorderComponent() {
  return (
    <>
      {[
        "Primary",
        "Secondary",
        "Success",
        "Warning",
        "Danger",
        "Info",
        "Dark",
        "White",
      ].map((variant, idx) => (
        <Card
          border={variant.toLowerCase()}
          key={idx}
          className="mb-2"
          style={{
            width: "18rem",
          }}
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default BorderComponent;
