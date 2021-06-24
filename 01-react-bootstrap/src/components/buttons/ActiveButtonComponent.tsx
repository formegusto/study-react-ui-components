import { Button } from "react-bootstrap";

function ActiveButtonComponent() {
  return (
    <>
      <Button active>Active Button</Button>
      <Button>Deactive Button</Button>
      <Button disabled>Disabled Button</Button>
      <Button href="#" disabled>
        Disabled Button
      </Button>
    </>
  );
}

export default ActiveButtonComponent;
