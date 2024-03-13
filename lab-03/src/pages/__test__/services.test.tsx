import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { LabContextProvider } from "@/context/LabContext";
import Services from "../services";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

function renderIndexComponent() {
  return render(
    <LabContextProvider>
      <Header />
      <Services />
      <Footer />
    </LabContextProvider>
  );
}

describe("Services Page Tests", () => {
  it("renders services page", () => {
    renderIndexComponent();

    const servicesTitle = screen.getByText("Test Checkout Component");
    const componentTitle = screen.getByText("Dropdown");

    expect(servicesTitle).toBeInTheDocument();
    expect(componentTitle).toBeInTheDocument();
  });
});
