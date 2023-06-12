import React from "react";
import { DateRange } from "react-date-range";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { format } from "date-fns";

import { sortedDb } from "@/utils/dates.js";
import { RedDay } from "@/styled-components/";

function DateRangeUI({ label, onChange, range }) {
  const newRangeResult = [
    {
      ...range[0],
      startDate: new Date(range[0].startDate),
      endDate: new Date(range[0].endDate),
    },
  ];
  const customDayContent = (day) => {
    const isInDb = sortedDb.find(
      (item) => item.Date === format(new Date(day), "dd-MM-yyyy"),
    );
    if (isInDb) {
      return <RedDay>{format(day, "d")}</RedDay>;
    }
  };

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
      <DateRange
        dayContentRenderer={customDayContent}
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
