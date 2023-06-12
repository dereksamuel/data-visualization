import React from "react";
import { SideBarUI } from "./SideBarUI";
import { useDispatch } from "react-redux";
import { change } from "@/redux/states/filter";
import { generateDate, sortedDb } from "@/utils/dates";

function SideBar() {
  const dispatch = useDispatch();
  const onChange = (key, event) => {
    let value = null;

    if (key === "perRange") {
      const selection = event.selection;
      value = [
        {
          ...selection,
          startDate: `${selection.startDate}`,
          endDate: `${selection.endDate}`,
        },
      ];
    } else {
      value = event.target.value;
    }

    dispatch(change({ [key]: value }));
  };
  const onRestartFilters = () => {
    dispatch(change({ kindOfGraph: "Barras" }));
    dispatch(change({ kindOfData: "Datos de ventas por región" }));
    dispatch(
      change({
        perRange: [
          {
            startDate: `${generateDate(sortedDb[sortedDb.length - 1].Date)}`,
            endDate: `${generateDate(sortedDb[0].Date)}`,
            key: "selection",
          },
        ],
      }),
    );
  };
  const onShowMenu = () => {
    const $filterLayout = document.getElementById("filter-layout");
    const $overlay = document.getElementById("overlay");

    $filterLayout.classList.add("displayMenu");
    $overlay.classList.add("hide");
  };
  const onHideMenu = () => {
    const $filterLayout = document.getElementById("filter-layout");
    const $overlay = document.getElementById("overlay");

    $filterLayout.classList.remove("displayMenu");
    $overlay.classList.remove("hide");
  };

  return (
    <SideBarUI
      onChange={onChange}
      onRestartFilters={onRestartFilters}
      onShowMenu={onShowMenu}
      onHideMenu={onHideMenu}
    />
  );
}

export { SideBar };
