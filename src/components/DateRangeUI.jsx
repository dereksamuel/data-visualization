import React from "react";
import { DateRange } from "react-date-range";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function DateRangeUI({ label, onChange, range }) {
  const newRangeResult = [
    {
      ...range[0],
      startDate: new Date(range[0].startDate),
      endDate: new Date(range[0].endDate),
    },
  ];

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
      <DateRange
        onChange={onChange}
        ranges={newRangeResult}
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
