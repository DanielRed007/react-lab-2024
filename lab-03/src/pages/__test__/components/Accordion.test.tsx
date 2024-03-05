import Accordion from "@/components/accordion/Accordion";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { mockWriters, tabData, accordionData } from "@/util/mocks/mock-data";
import { AccordionOption } from "@/util/models/interfaces";

function renderAccordion(data: AccordionOption[] | []) {
  return render(<Accordion options={data} />);
}

describe("Accordion Component", () => {
  it("should render the Accordion Component", () => {
    renderAccordion(accordionData);

    const titusOption = screen.getByTestId("Titus Livi0");
    expect(titusOption).toHaveAttribute("aria-expanded", "false");

    const hannibalOption = screen.getByTestId("Hannibal Barca1");
    expect(hannibalOption).toHaveAttribute("aria-expanded", "false");
  });

  it("should display the Accordion options when click on every option", async () => {
    renderAccordion(accordionData);

    const titusOption = screen.getByTestId("Titus Livi0");
    expect(titusOption).toHaveAttribute("aria-expanded", "false");

    const titusBtn = await screen.getByText("Titus Livi");
    await fireEvent.click(titusBtn);

    const hannibalOption = screen.getByTestId("Hannibal Barca1");
    expect(hannibalOption).toHaveAttribute("aria-expanded", "false");

    const hannibalBtn = await screen.getByText("Hannibal Barca");
    await fireEvent.click(hannibalBtn);

    const titusContent = await screen.getByText(
      "Titus Livis is one of the Greatests Roman writers and historians"
    );
    const hannibalContent = await screen.getByText(
      "Hannibal Barca is one of the Greatests Generals and strategits in the history of the world"
    );

    expect(titusContent).toBeInTheDocument();
    expect(hannibalContent).toBeInTheDocument();

    expect(titusOption).toHaveAttribute("aria-expanded", "true");
    expect(hannibalOption).toHaveAttribute("aria-expanded", "true");
  });

  it("should display an empty container if there is no data", async () => {
    renderAccordion([]);

    const accordionContainer = await screen.getByTestId("accordion-container");
    expect(accordionContainer).toBeEmptyDOMElement();
  });
});
