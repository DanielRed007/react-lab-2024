import { useLabContext } from "@/context/LabContext";
import ButtonCard from "@/components/button-card/ButtonCard";
import Dropdown from "@/components/dropdown/Dropdown";
import { mockWriters } from "@/util/mocks/mock-data";
import WriterCard from "@/components/writer-card/WriterCard";
import ToggleSwitch from "@/components/toggle-switch/ToggleSwitch";
import Accordion from "@/components/accordion/Accordion";
import RadioGroupSelect from "@/components/radio-group/RadioGroupSelect";
import { philosophers } from "@/util/mocks/mock-data";

export default function Index() {
  const {
    openModal,
    setDropdownOption,
    dropdownOptionSelected,
    toggleEnabled,
    setToggleSwitch,
  } = useLabContext();

  return (
    <div>
      <main className="container mx-auto my-auto py-8 h-auto">
        <h2 className="text-4xl font-bold mb-4">
          NextJS + Context API Workshop
        </h2>

        <div className="flex justify-center items-center mt-10">
          <h2 className="text-2xl font-bold mb-4 mr-9">Modals</h2>
          <div className="max-w-xs w-48 h-48 rounded bg-yellow-500 overflow-hidden shadow-lg mx-4">
            <ButtonCard
              title="Payments"
              type="payments"
              onClickButton={() => openModal("payments")}
            />
          </div>
          <div className="max-w-xs w-48 h-48 rounded bg-yellow-500 overflow-hidden shadow-lg mx-4">
            <ButtonCard
              title="Form Sample"
              type="form"
              onClickButton={() => openModal("form")}
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <h2 className="text-2xl font-bold mb-4 mr-9">Dropdown</h2>
          <div className="flex justify-center flex-row w-3/6 h-72 rounded bg-yellow-500 shadow-lg mx-4">
            <Dropdown
              options={mockWriters}
              selectedOption={dropdownOptionSelected}
              optionChange={setDropdownOption}
            />

            <WriterCard selected={dropdownOptionSelected} />
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <h2 className="text-2xl font-bold mb-4 mr-9">Toggle & Radio Group</h2>
          <div className="flex justify-center flex-row w-3/6 h-96 rounded bg-yellow-500 shadow-lg mx-4">
            <ToggleSwitch
              enabled={toggleEnabled}
              onChangeSwitch={setToggleSwitch}
            />

            <div className="mt-4 mb-4 w-4/6 bg-zinc-500 rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                {toggleEnabled ? (
                  <Accordion />
                ) : (
                  <div className="w-full h-full flex justify-center align-center">
                    <h3>Activate toggle to see the Accordion</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <h2 className="text-2xl font-bold mb-4 mr-9">Toggle & Radio Group</h2>
          <div className="flex justify-center flex-row w-3/6 h-96 rounded bg-yellow-500 shadow-lg mx-4">
            <RadioGroupSelect options={philosophers} />
          </div>
        </div>
      </main>
    </div>
  );
}
