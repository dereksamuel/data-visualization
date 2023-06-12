import { format } from "date-fns";
import db from "@/assets/db/index.json";

export const generateDate = (date) => {
  const dateArray = date.split("-");
  return new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);
};

export const sortedDb = db.sort((a, b) => {
  const firstFinalDate = generateDate(a.Date);
  const secondFinalDate = generateDate(b.Date);

  if (firstFinalDate > secondFinalDate) return -1;
  if (firstFinalDate < secondFinalDate) return 1;
  return 0;
});

export const fromToDateText = (startDate, endDate) => {
  return `${format(new Date(startDate), "PPP")} - ${format(
    new Date(endDate),
    "PPP",
  )}`;
};

export const fromDateToText = (date) => {
  return format(new Date(date), "yyyy-MM-dd");
};
