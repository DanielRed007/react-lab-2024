// Import the necessary dependencies and interfaces
import React from "react";
import { render, fireEvent, renderHook } from "@testing-library/react";

import { mockWriters } from "../../../util/mocks/mock-data";
import { LabContextProvider, useLabContext } from "@/context/LabContext";

// Mock Writer interface for testing purposes
jest.mock("../../../util/mocks/mock-data", () => ({
  mockWriters: [{ id: 1, name: "Test Writer" }], // Mocking a single writer for simplicity
}));

// Mock ChildComponent consuming the context
const ChildComponent = () => {
  const {
    isModalOpen,
    modalType,
    openModal,
    closeModal,
    dropdownOptionSelected,
    setDropdownOption,
  } = useLabContext();

  return (
    <div>
      <span data-testid="is-modal-open">{String(isModalOpen)}</span>
      <span data-testid="modal-type">{modalType}</span>
      <button onClick={() => openModal("test")} data-testid="open-modal-button">
        Open Modal
      </button>
      <button onClick={closeModal} data-testid="close-modal-button">
        Close Modal
      </button>
      <span data-testid="dropdown-option">{dropdownOptionSelected.name}</span>
      <button
        onClick={() => setDropdownOption(mockWriters[0])}
        data-testid="set-dropdown-option-button"
      >
        Set Dropdown Option
      </button>
    </div>
  );
};

describe("LabContextProvider", () => {
  it("should provide lab context to its children", () => {
    const { getByTestId } = render(
      <LabContextProvider>
        <ChildComponent />
      </LabContextProvider>
    );

    const isModalOpenElement = getByTestId("is-modal-open");
    const modalTypeElement = getByTestId("modal-type");
    const dropdownOptionElement = getByTestId("dropdown-option");

    // Initial values
    expect(isModalOpenElement.textContent).toBe("false");
    expect(modalTypeElement.textContent).toBe("");
    expect(dropdownOptionElement.textContent).toBe("Test Writer");

    // Testing functions
    fireEvent.click(getByTestId("open-modal-button"));
    expect(isModalOpenElement.textContent).toBe("true");
    expect(modalTypeElement.textContent).toBe("test");

    fireEvent.click(getByTestId("close-modal-button"));
    expect(isModalOpenElement.textContent).toBe("false");

    fireEvent.click(getByTestId("set-dropdown-option-button"));
    expect(dropdownOptionElement.textContent).toBe("Test Writer");
  });
});
