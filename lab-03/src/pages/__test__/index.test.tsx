import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { LabContextProvider } from "@/context/LabContext";
import Home from "../index";
import Header from "@/components/header/Header";
import DialogModal from "@/components/dialog-modal/DialogModal";
import Footer from "@/components/footer/Footer";

describe("Home", () => {
  it("renders full homepage", () => {
    render(
      <LabContextProvider>
        <Header />
        <Home />
        <Footer />
        <DialogModal />
      </LabContextProvider>
    );

    // Get Header content box and footer
    const header = screen.getByText("Lab 03 - Next Page Router");
    const body = screen.getByText("NextJS + Context API Workshop");
    const footer = screen.getByText(
      "© 2024 Your Website. All rights reserved."
    );

    // They must be rendered
    expect(header).toBeInTheDocument();
    expect(body).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  it("a payments modal can be activated and closed", async () => {
    render(
      <LabContextProvider>
        <Header />
        <Home />
        <Footer />
        <DialogModal />
      </LabContextProvider>
    );

    // get payments button
    const paymentsButton = screen.getByTestId("payments");
    // click button
    fireEvent.click(paymentsButton);

    // modal container must appear
    const dialogContainer = await screen.getByRole("modal-container");
    expect(dialogContainer).toBeInTheDocument();

    // get close modal button
    const closeModalButton = await screen.getByRole("close-modal-button");
    // click button
    await fireEvent.click(closeModalButton);
    // modal must disappear
    expect(dialogContainer).not.toBeInTheDocument();
  });

  it("displays a dropdown option when clicking the writers dropdown", async () => {
    render(
      <LabContextProvider>
        <Header />
        <Home />
        <Footer />
        <DialogModal />
      </LabContextProvider>
    );

    // get dropdown button
    const writersDropdownButton = await screen.getByTestId(
      "writers-dropdown-button"
    );

    expect(writersDropdownButton).toBeInTheDocument();

    // Click on dropdown
    await fireEvent.click(writersDropdownButton);

    // Clarice must be there
    const clariceLispector = await screen.getByText("Clarice Lispector");
    expect(clariceLispector).toBeInTheDocument();

    // Click again to close the dropdown
    await fireEvent.click(writersDropdownButton);

    // Assert that Clarice Lispector is no longer present
    expect(clariceLispector).not.toBeInTheDocument();
  });
});
