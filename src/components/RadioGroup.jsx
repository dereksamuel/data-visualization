import React from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";

import { useChangeValue } from "../hooks/useChangeValue";

function RadioGroupUI({ label, children, handleChange, defaultValue }) {
  const [value, onChange] = useChangeValue(defaultValue, handleChange);

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={value}
        label={label}
        onChange={onChange}
      >
        {children}
      </RadioGroup>
    </FormControl>
  );
}

export { RadioGroupUI };
