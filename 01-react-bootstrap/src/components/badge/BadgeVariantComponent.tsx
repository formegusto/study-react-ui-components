import { Badge } from "react-bootstrap";

function BadgeVariantComponent() {
  return (
    <div>
      <Badge pill variant="primary">
        primary
      </Badge>
      <Badge pill variant="second">
        second
      </Badge>
      <Badge variant="success">success</Badge>
      <Badge variant="danger">danger</Badge>
      <Badge variant="warning">warning</Badge>
      <Badge variant="info">info</Badge>
      <Badge variant="light">light</Badge>
      <Badge variant="dark">dark</Badge>
    </div>
  );
}

export default BadgeVariantComponent;
