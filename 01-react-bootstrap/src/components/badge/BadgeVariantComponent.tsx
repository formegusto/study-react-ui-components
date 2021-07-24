import { Badge } from "react-bootstrap";

function BadgeVariantComponent() {
  return (
    <div>
      <Badge pill bg="primary">
        primary
      </Badge>
      <Badge pill bg="second">
        second
      </Badge>
      <Badge bg="success">success</Badge>
      <Badge bg="danger">danger</Badge>
      <Badge bg="warning">warning</Badge>
      <Badge bg="info">info</Badge>
      <Badge bg="light">light</Badge>
      <Badge bg="dark">dark</Badge>
    </div>
  );
}

export default BadgeVariantComponent;
