import React from "react";
import { useState } from "react";
import Alert from "react-bootstrap/esm/Alert";
import Button from "react-bootstrap/esm/Button";

function CustomButtonComponent() {
  const [show, setShow] = useState<boolean>(true);

  return (
    <>
      <Alert variant="success" show={show}>
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button variant="outline-success" onClick={() => setShow(false)}>
            Close me y'all!
          </Button>
        </div>
      </Alert>
      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

export default CustomButtonComponent;
