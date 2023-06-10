import styled from "styled-components";

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
