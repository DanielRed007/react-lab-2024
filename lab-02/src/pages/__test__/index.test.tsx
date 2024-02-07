import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Index from "../index";

describe("Index Test Suite", () => {
  it("renders a home title", () => {
    render(<Index />);

    const homeTitle = screen.getByText("Home Page");

    expect(homeTitle).toBeInTheDocument();
  });
});
