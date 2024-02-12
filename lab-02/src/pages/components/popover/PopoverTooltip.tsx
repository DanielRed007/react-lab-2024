import { ChartBarSquare, ChartPieSquare } from "@/pages/util/icons/icons";
import { Popover, Transition } from "@headlessui/react";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import { FC, Fragment } from "react";

const solutions = [
  {
    name: "Chart Bar Graphic",
    description: "Chart Bar Graphic Description",
    href: "##",
    icon: ChartBarSquare,
  },
  {
    name: "Chart Pie Graphic",
    description: "Chart Pie Graphic Description",
    href: "##",
    icon: ChartPieSquare,
  },
];

interface PopoverTooltipProps {
  testId?: string;
}

const PopoverTooltip: FC<PopoverTooltipProps> = ({ testId }) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            data-test-id={testId}
            className={`${open ? "text-white" : "text-white/90"}`}
          >
            <CheckBadgeIcon
              className={`${open ? "text-blue-500" : "text-blue-700"}
                   h-6 w-6 transition duration-150 ease-in-out group-hover:text-blue-300/80`}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/50"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                        <item.icon />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default PopoverTooltip;
