import { FC, useState } from "react";
import { RadioGroup } from "@headlessui/react";

import { Philosopher } from "@/util/models/interfaces";
import { CheckIcon } from "@/util/assets/icons/CheckIcon";

interface RadioGroupSelectProps {
  options: any[];
}

const RadioGroupSelect: FC<RadioGroupSelectProps> = ({ options }) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {options.map((philosopher: Philosopher) => (
              <RadioGroup.Option
                key={philosopher.name}
                value={philosopher}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white/60 ring-offset-2 ring-offset-blue-300"
                      : ""
                  }
                    ${checked ? "bg-blue-900/75 text-white" : "bg-white"}
                      relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {philosopher.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-blue-100" : "text-gray-500"
                            }`}
                          >
                            <span>{philosopher.country}</span>{" "}
                            <span aria-hidden="true">&middot;</span>{" "}
                            <span>{philosopher.role}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default RadioGroupSelect;
