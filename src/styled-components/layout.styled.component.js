import styled from "styled-components";
import { colorSecondary } from "./variables.styled.component.js";

export const FilterLayout = styled.ul`
  max-height: 100%;
  width: 100%;
  display: block;
  /* background-color: ${colorSecondary}; */
  grid-area: "filter-layout";
  border-right: 2px solid ${colorSecondary};
  box-shadow: 0 0 35px ${colorSecondary};
  overflow-y: auto;
`;

export const MainLayout = styled.main`
  height: 100%;
  padding: 30px;
  width: 100%;
  display: block;
  grid-area: "main-layout";
  display: flex;
  align-items: center;

  canvas {
    position: sticky;
    top: 0;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas: "filter-layout main-layout main-layout";
  grid-template-columns: minmax(300px, 400px);
  height: 100%;
`;
