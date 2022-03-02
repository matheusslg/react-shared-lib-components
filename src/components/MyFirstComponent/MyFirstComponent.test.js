import React from "react";
import { render, screen } from "@testing-library/react";

import MyFirstComponent from "./MyFirstComponent";

describe("MyFirstComponent Component", () => {
  test("should be visible", () => {
    render(<MyFirstComponent data-testid="my-first-component" />);

    expect(screen.getByTestId("my-first-component")).toBeVisible();
  });
});
