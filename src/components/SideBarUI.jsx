import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import FilterAltOutlined from "@mui/icons-material/FilterAltOutlined";

import {
  FilterItem,
  FilterLayout,
  RegularFilterItem,
  Title,
} from "../styled-components";
import { Filter } from "./Filter";
import { RadioGroupUI } from "./RadioGroup";
import { DateRangeUI } from "./DateRangeUI";

function SideBarUI({ onChange, onRestartFilters }) {
  const filterState = useSelector((store) => store.filter);
  const kindOfGraphs = ["Barras", "Líneas", "Dona", "Torta", "Radar"];
  const kindOfData = [
    "Datos de ventas por región",
    "Datos de videos por región",
  ];

  return (
    <FilterLayout>
      <RegularFilterItem>
        <Title>
          <FilterAltOutlined /> Filtros:
        </Title>
        <Button variant="contained" onClick={onRestartFilters}>
          REINICIAR
        </Button>
      </RegularFilterItem>
      <FilterItem>
        <Filter
          label="Tipo de gráfica"
          value={filterState.kindOfGraph}
          onChange={(e) => onChange("kindOfGraph", e)}
        >
          {kindOfGraphs.map((graph, index) => (
            <MenuItem value={graph} key={index}>
              {graph}
            </MenuItem>
          ))}
        </Filter>
      </FilterItem>
      <FilterItem>
        <RadioGroupUI
          label="Gráfico de consumo internacional de Netflix:"
          value={filterState.kindOfData}
          onChange={(e) => onChange("kindOfData", e)}
        >
          {kindOfData.map((data, index) => (
            <FormControlLabel
              key={index}
              value={data}
              control={<Radio />}
              label={data}
            />
          ))}
        </RadioGroupUI>
      </FilterItem>
      <FilterItem>
        <DateRangeUI
          label="Datos por rango de fecha:"
          onChange={(e) => onChange("perRange", e)}
          range={filterState.perRange}
        />
      </FilterItem>
    </FilterLayout>
  );
}

export { SideBarUI };
