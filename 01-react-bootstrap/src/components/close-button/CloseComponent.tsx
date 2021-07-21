import { CloseButton } from "react-bootstrap";

function CloseComponent() {
  return (
    <>
      <CloseButton />
      <CloseButton disabled />
      <div className="bg-dark p-3">
        <CloseButton
          style={{
            color: "white",
          }}
        />
        <CloseButton
          style={{
            color: "white",
          }}
          disabled
        />
      </div>
    </>
  );
}

export default CloseComponent;
