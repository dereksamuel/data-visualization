import React from "react";
import { DateRange } from "react-date-range";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { useChangeValue } from "../hooks/useChangeValue";

function DateRangeUI({ label, handleChange }) {
  const [range, onChange] = useChangeValue(
    [
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ],
    handleChange,
  );
  const onChangeHandler = (item) =>
    onChange({ target: { value: [item.selection] } });

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
      <DateRange
        onChange={onChangeHandler}
        ranges={range}
        months={1}
        direction="horizontal"
        moveRangeOnFirstSelection={false}
        editableDateInputs={false}
        className="calendarElement"
      />
    </FormControl>
  );
}

export { DateRangeUI };
