import React, { useContext } from "react";
import { AccordionContext, useAccordionToggle } from "react-bootstrap";
import { Accordion, Card } from "react-bootstrap";

type AtomProps = {
  eventKey: string;
};

function ContextAwareToggle({
  eventKey,
  children,
}: React.PropsWithChildren<AtomProps>) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(eventKey);

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? "pink" : "lavender" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function ContextAwareComponent() {
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <ContextAwareToggle eventKey="0">Click Me!</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <ContextAwareToggle eventKey="1">Click Me!</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default ContextAwareComponent;
