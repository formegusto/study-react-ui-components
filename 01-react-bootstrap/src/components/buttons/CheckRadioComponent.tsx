import { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

const RadioGroup = [
  { name: "Active", value: "1" },
  { name: "Radio", value: "2" },
  { name: "Radio", value: "3" },
];

function CheckRadioComponent() {
  const [checked, setChecked] = useState<boolean>(false);
  const [radioValue, setRadioValue] = useState<string>("1");
  return (
    <>
      <ButtonGroup className="mb-2">
        <ToggleButton
          type="checkbox"
          variant="secondary"
          checked={checked}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
          Checked
        </ToggleButton>
      </ButtonGroup>
      <br />
      <ButtonGroup>
        {RadioGroup.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            value={radio.value}
            name="radio"
            variant="secondary"
            checked={radio.value === radioValue}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

export default CheckRadioComponent;
