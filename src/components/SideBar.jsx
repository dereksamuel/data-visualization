import React from "react";
import { SideBarUI } from "./SideBarUI";
import { useDispatch } from "react-redux";
import { change } from "../redux/states/filter";

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

  return <SideBarUI onChange={onChange} />;
}

export { SideBar };
