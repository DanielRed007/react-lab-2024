import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { LabContextProvider } from "@/context/LabContext";
import Home from "../index";
import Header from "@/components/header/Header";
import DialogModal from "@/components/dialog-modal/DialogModal";
import Footer from "@/components/footer/Footer";

function renderIndexComponent() {
  return render(
    <LabContextProvider>
      <Header />
      <Home />
      <Footer />
      <DialogModal />
    </LabContextProvider>
  );
}

describe("Home", () => {
  it("renders full homepage", () => {
    renderIndexComponent();

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
    renderIndexComponent();

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
    renderIndexComponent();

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

  it("displays a dropdown whick can switch options and changes the content on the writer card", async () => {
    renderIndexComponent();

    const writersDropdownButton = await screen.getByTestId(
      "writers-dropdown-button"
    );

    expect(writersDropdownButton).toBeInTheDocument();

    await fireEvent.click(writersDropdownButton);

    const phillipDick = await screen.getByRole("writer-option-1");
    expect(phillipDick).toBeInTheDocument();

    await fireEvent.click(phillipDick);

    const phillipDickBirthday = screen.getByText("Birthday: 12/12/2001");
    expect(phillipDickBirthday).toBeInTheDocument();
  });

  it("triggers the toggle button", async () => {
    renderIndexComponent();
    // Section must be inactive
    const inactiveSection = screen.getByText(
      "Activate toggle to see the Accordion"
    );
    expect(inactiveSection).toBeInTheDocument();

    // get toggle button
    const toggleButton = await screen.getByTestId("toggle-switch");
    fireEvent.click(toggleButton);

    // Click on Titus Livi option
    const titusLiviOption = await screen.getByText("Titus Livi");
    expect(titusLiviOption).toBeInTheDocument();
    fireEvent.click(titusLiviOption);

    // Titus Livi content must be rendered
    const titusLiviContent = await screen.getByText(
      "Titus Livis is one of the Greatests Roman writers and historians"
    );
    expect(titusLiviContent).toBeInTheDocument();
  });

  it("switches option in the Radio Select tool", async () => {
    renderIndexComponent();

    const baruchOption = screen.getByRole("radio", { name: /Baruch Spinoza/i });
    expect(baruchOption).toBeInTheDocument();
    expect(baruchOption).toHaveAttribute("aria-checked", "true");

    const aristotleOption = screen.getByRole("radio", { name: /Aristoteles/i });
    expect(aristotleOption).toBeInTheDocument();
    expect(aristotleOption).toHaveAttribute("aria-checked", "false");

    await fireEvent.click(aristotleOption);

    expect(aristotleOption).toHaveAttribute("aria-checked", "true");
    expect(baruchOption).toHaveAttribute("aria-checked", "false");
  });

  it("navigates options in the Tab Group Component", async () => {
    renderIndexComponent();

    const maxentiusContent = screen.getByText("Undervalued Roman Emperor");
    expect(maxentiusContent).toBeInTheDocument();

    const aurelianusButton = await screen.getByTestId("Aurelianus1");
    fireEvent.click(aurelianusButton);

    const aurelianusContent = screen.getByText(
      "He restored the empire in critical times"
    );
    expect(aurelianusContent).toBeInTheDocument();

    const majorianButton = await screen.getByTestId("Majorian2");
    fireEvent.click(majorianButton);

    const majorianContent = screen.getByText("The last great roman emperor");
    expect(majorianContent).toBeInTheDocument();
  });
});
