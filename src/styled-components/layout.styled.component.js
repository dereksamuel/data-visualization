import styled from "styled-components";
import { colorSecondary } from "./variables.styled.component.js";
import { size } from "./breakpoint.styled.component.js";

export const FilterLayout = styled.ul`
  max-height: 100%;
  width: 100%;
  display: block;
  /* background-color: ${colorSecondary}; */
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  border-right: 2px solid ${colorSecondary};
  box-shadow: 0 0 35px ${colorSecondary};
  overflow-y: auto;

  @media screen and (max-width: ${size.desktopBreakPoint}) {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
    overflow-y: initial;
  }
`;

export const MainLayout = styled.main`
  height: 100%;
  padding: 30px;
  width: 100%;
  display: block;
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  display: flex;
  align-items: center;
  justify-content: center;

  canvas {
    position: sticky;
    top: 0;
    max-width: 600px;
    max-height: 600px;
  }

  @media screen and (max-width: ${size.desktopBreakPoint}) {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
  }
`;

export const ContainerChart = styled.div`
  width: 600px;
  height: fit-content;

  @media screen and (max-width: ${size.desktopBreakPoint}) {
    width: 400px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 500px) 1fr;
  height: 100%;

  @media screen and (max-width: ${size.desktopBreakPoint}) {
    grid-template-rows: 500px 100%;
  }
`;

export const RedDay = styled.span`
  color: red !important;
  background-color: white;
  padding: 3px;
  font-weight: 900;
  font-size: 16px;
`;
