import { ButtonGroup, Button } from "react-bootstrap";

function ButtonGroupComponent() {
  return (
    <ButtonGroup aria-label="Basic Example">
      <Button variant="secondary">Left</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Right</Button>
    </ButtonGroup>
  );
}

export default ButtonGroupComponent;
