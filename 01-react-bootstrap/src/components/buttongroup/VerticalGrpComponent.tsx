import { ButtonGroup, Button, DropdownButton, Dropdown } from "react-bootstrap";

function VerticalGrpComponent() {
  return (
    <ButtonGroup vertical>
      <Button>1</Button>
      <Button>2</Button>
      <DropdownButton as={ButtonGroup} title="Dropdown">
        <Dropdown.Item eventKey="1">1</Dropdown.Item>
        <Dropdown.Item eventKey="2">2</Dropdown.Item>
      </DropdownButton>
      <Button>3</Button>
      <DropdownButton as={ButtonGroup} title="Dropdown">
        <Dropdown.Item eventKey="1">1</Dropdown.Item>
        <Dropdown.Item eventKey="2">2</Dropdown.Item>
      </DropdownButton>
      <DropdownButton as={ButtonGroup} title="Dropdown">
        <Dropdown.Item eventKey="1">1</Dropdown.Item>
        <Dropdown.Item eventKey="2">2</Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
  );
}

export default VerticalGrpComponent;
