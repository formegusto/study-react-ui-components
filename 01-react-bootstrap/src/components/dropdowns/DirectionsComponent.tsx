import {
  ButtonGroup,
  Dropdown,
  DropdownButton,
  SplitButton,
} from "react-bootstrap";

type Direction = "up" | "down" | "start" | "end";
function DirectionsComponent() {
  const directions: Direction[] = ["up", "down", "start", "end"];

  return (
    <>
      <div className="mb-2">
        {directions.map((direction) => (
          <DropdownButton
            as={ButtonGroup}
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="secondary"
            title={` Drop ${direction} `}
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        ))}
      </div>

      <div>
        {directions.map((direction) => (
          <SplitButton
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="secondary"
            title={`Drop ${direction}`}
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </SplitButton>
        ))}
      </div>
    </>
  );
}

export default DirectionsComponent;
