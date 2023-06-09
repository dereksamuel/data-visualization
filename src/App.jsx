import React from "react";
import { Provider } from "react-redux";

import { GridContainer } from "./styled-components";
import { MainUI } from "./components/MainUI";
import { store } from "./redux/store";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <Provider store={store}>
      <GridContainer>
        <SideBar />
        <MainUI />
      </GridContainer>
    </Provider>
  );
}

export default App;
