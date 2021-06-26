import { ButtonGroup, Button, DropdownButton, Dropdown } from "react-bootstrap";

function NestingComponent() {
  return (
    <ButtonGroup>
      <Button>1</Button>
      <Button>2</Button>
      <DropdownButton as={ButtonGroup} title="dropdown">
        <Dropdown.Item eventKey={1}>Dropdown Link</Dropdown.Item>
        <Dropdown.Item eventKey={2}>Dropdown Link</Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
  );
}

export default NestingComponent;
