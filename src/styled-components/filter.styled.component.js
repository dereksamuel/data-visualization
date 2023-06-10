import styled from "styled-components";
import { size } from "./breakpoint.styled.component";

const generalItemStyles = `
  list-style: none;
  padding: 30px;
`;

export const RegularFilterItem = styled.li`
  ${generalItemStyles}
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FilterItem = styled.li`
  ${generalItemStyles}
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-right: none;
  border-left: none;
`;

export const FilterItemClose = styled.li`
  ${generalItemStyles}
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
  display: none;
  align-items: center;
  justify-content: stretch;

  @media screen and (max-width: ${size.desktopBreakPoint}) {
    display: flex;
  }
`;
