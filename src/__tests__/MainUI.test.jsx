import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { Provider } from "react-redux";

import { SideBarUI } from "../components/SideBarUI";
import { MainUI } from "../components/MainUI";
import { store } from "../redux/store";
import { getContext } from "../__mocks__/canvas.mock";

describe("MainUI", () => {
  afterEach(cleanup);

  beforeEach(() => {
    window.HTMLCanvasElement.prototype.getContext = getContext;
    render(
      <Provider store={store}>
        <SideBarUI />
        <MainUI />
      </Provider>,
    );
  });

  it("should render the mainUi", () => {
    const $mainContainer = screen.getByTestId("main-container");
    expect($mainContainer).toBeTruthy();
  });

  it("should render a canvas", () => {
    const $canvas = screen.getByTestId("canvas");
    expect($canvas).toBeTruthy();
  });

  it("should render always the title", () => {
    const $title = screen.getByText("Consumo internacional de Netflix");
    expect($title).toBeTruthy();
  });

  it("should render the subtitle default", () => {
    const $subtitle = screen.getByText(
      "March 13th, 2012 - December 31st, 2023",
    );
    expect($subtitle).toBeTruthy();
  });
});
