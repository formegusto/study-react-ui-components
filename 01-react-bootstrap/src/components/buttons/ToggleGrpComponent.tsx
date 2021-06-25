import { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

function ToggleGrpComponent() {
  const [value, setValue] = useState<number[]>([1, 2]);

  const handleChange = (val: number[]) => setValue(val);
  return (
    <>
      <ToggleButtonGroup
        type="checkbox"
        value={value}
        className="mb-2"
        onChange={handleChange}
      >
        <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>
        <ToggleButton value={2}>Checkbox 2</ToggleButton>
        <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
        <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>
        <ToggleButton value={2}>Checkbox 2</ToggleButton>
        <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>
        <ToggleButton value={2}>Radio 2</ToggleButton>
        <ToggleButton value={3}>Radio 3</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

export default ToggleGrpComponent;
