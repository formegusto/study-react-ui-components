import { Button, Container, Row, Col } from "react-bootstrap";

function ButtonSizeComponent() {
  return (
    <Container>
      <Row className="mb-2">
        <Col>
          <Button variant="primary" size="lg">
            Large Button
          </Button>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <Button variant="primary" size="sm">
            Small Button
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" block>
            Block Button
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ButtonSizeComponent;
