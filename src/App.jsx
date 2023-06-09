import React from "react";
import { GridContainer } from "./styled-components";
import { SideBarUI } from "./components/SideBarUI";
import { MainUI } from "./components/MainUI";

function App() {
  return (
    <GridContainer>
      <SideBarUI />
      <MainUI />
    </GridContainer>
  );
}

export default App;
