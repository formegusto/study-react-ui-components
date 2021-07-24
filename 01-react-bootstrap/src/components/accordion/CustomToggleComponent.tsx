import React from "react";
// import { useAccordionToggle } from "react-bootstrap";
import { Accordion, Card } from "react-bootstrap";

interface AtomProps extends React.PropsWithChildren<{ eventKey: string }> {}

function CustomToggle({ eventKey, children }: AtomProps) {
  // const decoratedOnClick = useAccordionToggle(eventKey, () =>
  //   console.log("Change Toggle!")
  // );

  return (
    <button
      type="button"
      style={{ backgroundColor: "pink" }}
      // onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function CustomToggleComponent() {
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0">Click Me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Click Me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default CustomToggleComponent;
