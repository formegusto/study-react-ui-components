import { Button, Badge } from "react-bootstrap";

function ChildBadgeComponent() {
  return (
    <Button variant="primary">
      Profile <Badge bg="light">9</Badge>
      <span className="sr-only">unread messages</span>
    </Button>
  );
}

export default ChildBadgeComponent;
