import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Index from "../index";

describe("Index Test Suite", () => {
  it("renders home page", () => {
    render(<Index />);

    const homeTitle = screen.getByText("Home");

    expect(homeTitle).toBeInTheDocument();
  });

  it("renders a set of select cards", () => {
    render(<Index />);

    const firstCard = screen.getByText("Card 1");
    const lastCard = screen.getByText("Card 8");

    expect(firstCard).toBeInTheDocument();
    expect(lastCard).toBeInTheDocument();
  });
});
