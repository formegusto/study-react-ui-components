import {
  ButtonToolbar,
  Button,
  ButtonGroup,
  InputGroup,
  FormControl,
} from "react-bootstrap";

function ToolbarInputComponent() {
  return (
    <>
      <ButtonToolbar>
        <ButtonGroup className="mr-2">
          <Button variant="secondary">1</Button>
          <Button variant="secondary">2</Button>
          <Button variant="secondary">3</Button>
        </ButtonGroup>
        <InputGroup>
          {/* <InputGroup.Prepend>
            <InputGroup.Text>@</InputGroup.Text>
          </InputGroup.Prepend> */}
          <FormControl
            type="text"
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
          />
        </InputGroup>
      </ButtonToolbar>
      <ButtonToolbar className="justify-content-between mt-2">
        <ButtonGroup className="mr-2">
          <Button variant="secondary">1</Button>
          <Button variant="secondary">2</Button>
          <Button variant="secondary">3</Button>
        </ButtonGroup>
        <InputGroup>
          {/* <InputGroup.Prepend>
            <InputGroup.Text>@</InputGroup.Text>
          </InputGroup.Prepend> */}
          <FormControl
            type="text"
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
          />
        </InputGroup>
      </ButtonToolbar>
    </>
  );
}

export default ToolbarInputComponent;
