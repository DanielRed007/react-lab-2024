import { FC, ReactNode, useState } from "react";

interface TooltipProps {
  text: string;
  children?: ReactNode;
}

const Tooltip: FC<TooltipProps> = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative flex flex-col items-center group">
      <svg
        data-test-id="home-tooltip"
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
      <div className="absolute bottom-4 flex flex-col items-center hidden mb-5 group-hover:flex">
        <span className="relative rounded-md z-10 p-4 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
          A simple Tooltip
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
      </div>
    </div>
  );
};

export default Tooltip;
