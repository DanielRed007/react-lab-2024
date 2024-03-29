import { Listbox, Transition, ListboxOptionProps } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '../../utils/icons/icons'
import { ChangeEvent, Fragment, useState } from 'react'

interface IDropdown {
  onChange: (value: any) => void
  options: IDropdownOption[]
  testId?: string
  selected: IDropdownOption
}

interface IDropdownOption {
  name: string
  value: string
}

const Dropdown = ({ onChange, options, testId, selected }: IDropdown) => {
  return (
    <div className="w-72">
      <Listbox value={selected} onChange={(e: any) => onChange(e)}>
        <div className="relative mt-1">
          <Listbox.Button
            data-testid={testId}
            className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-center shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <span className="block text-blue-500">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon customClass="h-5 w-5 text-gray-400" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon customClass="h-5 w-5" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default Dropdown
