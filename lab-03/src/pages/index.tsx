import { useState, useEffect } from "react";
import { useLabContext } from "@/context/LabContext";
import ButtonCard from "@/components/button-card/ButtonCard";
import Dropdown from "@/components/dropdown/Dropdown";
import { mockWriters } from "@/util/mocks/mock-data";
import { Writer } from "@/util/models/interfaces";

export default function Index() {
  const [dropdownOptionSelected, setDropdownOptionSelected] = useState(
    mockWriters[0]
  );
  const { openModal } = useLabContext();

  const handleOpenModal = (type: string) => {
    openModal(type);
  };

  const handleDropdownOption = (option: Writer) => {
    setDropdownOptionSelected(option);
  };

  return (
    <div>
      <main className="container mx-auto py-8 h-dvh">
        <h2 className="text-4xl font-bold mb-4">
          NextJS + Context API Workshop
        </h2>

        <div className="flex justify-center items-center mt-10">
          <h2 className="text-2xl font-bold mb-4 mr-9">Modals</h2>
          <div className="max-w-xs w-48 h-48 rounded bg-yellow-500 overflow-hidden shadow-lg mx-4">
            <ButtonCard
              title="Payments"
              type="payments"
              onClickButton={handleOpenModal}
            />
          </div>
          <div className="max-w-xs w-48 h-48 rounded bg-yellow-500 overflow-hidden shadow-lg mx-4">
            <ButtonCard
              title="Form Sample"
              type="form"
              onClickButton={handleOpenModal}
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <h2 className="text-2xl font-bold mb-4 mr-9">Dropdown</h2>
          <div className="flex justify-center items-center max-w-xs w-96 h-72 rounded bg-yellow-500 shadow-lg mx-4">
            <Dropdown
              options={mockWriters}
              selectedOption={dropdownOptionSelected}
              optionChange={handleDropdownOption}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
