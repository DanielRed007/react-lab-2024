import { AccordionOption } from "@/util/models/interfaces";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { FC } from "react";

interface AccordionProps {
  options: AccordionOption[];
}

const Accordion: FC<AccordionProps> = ({ options }) => {
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        {options.map((option: AccordionOption, index: number) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  data-testid={option.title + index}
                  className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-1 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75"
                >
                  <span>{option.title}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-blue-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                  {option.content}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
