import { ButtonGroup, Button } from "react-bootstrap";

function ButtonSizingComponent() {
  return (
    <>
      <ButtonGroup size="lg">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup size="sm">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </ButtonGroup>
    </>
  );
}

export default ButtonSizingComponent;
