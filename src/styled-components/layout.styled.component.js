import styled from "styled-components";
import { colorSecondary } from "./variables.styled.component.js";

export const FilterLayout = styled.ul`
  max-height: 100%;
  width: 100%;
  display: block;
  /* background-color: ${colorSecondary}; */
  grid-column: 1 / 2;
  border-right: 2px solid ${colorSecondary};
  box-shadow: 0 0 35px ${colorSecondary};
  overflow-y: auto;
`;

export const MainLayout = styled.main`
  height: 100%;
  padding: 30px;
  width: 100%;
  display: block;
  grid-column: 2 / 3;
  display: flex;
  align-items: center;
  justify-content: center;

  canvas {
    position: sticky;
    top: 0;
    max-width: 600px;
    max-height: 600px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 500px) 1fr;
  height: 100%;
`;
