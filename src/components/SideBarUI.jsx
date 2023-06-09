import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
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

function SideBarUI() {
  const kindOfGraphs = [
    "Barras",
    "Líneas",
    "Torta",
    "Dona",
    "Burbujas",
    "Radar",
    "Area",
  ];
  const kindOfData = [
    "Datos de ventas por región",
    "Datos de usuarios registrados por mes",
  ];

  return (
    <FilterLayout>
      <RegularFilterItem>
        <Title>
          <FilterAltOutlined /> Filtros:
        </Title>
      </RegularFilterItem>
      <FilterItem>
        <Filter label="Tipo de gráfica" defaultValue="Barras">
          {kindOfGraphs.map((graph, index) => (
            <MenuItem value={graph} key={index}>
              {graph}
            </MenuItem>
          ))}
        </Filter>
      </FilterItem>
      <FilterItem>
        <RadioGroupUI
          label="Datos del gráfico:"
          defaultValue="Datos de ventas por región"
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
        <DateRangeUI label="Datos por rango de fecha:" />
      </FilterItem>
    </FilterLayout>
  );
}

export { SideBarUI };
