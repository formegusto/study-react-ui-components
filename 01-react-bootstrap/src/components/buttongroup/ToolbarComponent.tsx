import { ButtonToolbar, ButtonGroup, Button } from "react-bootstrap";

function ToolbarComponent() {
  return (
    <ButtonToolbar aria-label="button toolbar with buttonGrp">
      <ButtonGroup className="mr-2">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </ButtonGroup>
      <ButtonGroup className="mr-2">
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>8</Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default ToolbarComponent;
