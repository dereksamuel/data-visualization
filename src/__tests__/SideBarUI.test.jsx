import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { Provider } from "react-redux";

import { SideBarUI } from "@/components/SideBarUI";
import { kindOfData } from "@/__mocks__/kindOf.mock";
import { store } from "@/redux/store";

describe("SideBarUI", () => {
  afterEach(cleanup);

  beforeEach(() => {
    render(
      <Provider store={store}>
        <SideBarUI />
      </Provider>,
    );
  });

  it("should render the sidebar", () => {
    const $filterContainer = screen.getByTestId("filter-container");
    expect($filterContainer).toBeTruthy();
  });

  it("should has 5 children elements", () => {
    const $filterContainer = screen.getByTestId("filter-container");
    expect($filterContainer.children.length).toEqual(5);
  });

  it("should has as a default graphic value Barras", () => {
    const $barras = screen.getByText("Barras");
    expect($barras).toBeTruthy();
  });

  it("should render specified filter data", () => {
    kindOfData.forEach((kod) => {
      const $kod = screen.getByText(kod);

      expect($kod).toBeTruthy();
    });
  });
});
