import { BellIcon, SettingsIcon, WarningIcon } from "@/pages/util/icons/icons";
import { FC } from "react";
import PopoverTooltip from "../popover/PopoverTooltip";

interface SelectCardProps {
  title: string;
  subtitle: string;
  usersNumber: number;
  cardType: string;
}

const SelectCard: FC<SelectCardProps> = ({
  title,
  subtitle,
  usersNumber,
  cardType,
}) => {
  const getIconWidget = (cardType: string) => {
    console.log(cardType);
  };

  const getCardIcon = () => {
    return cardType === "settings" ? (
      <PopoverTooltip testId="popover-tooltip" />
    ) : cardType === "notification" ? (
      <PopoverTooltip testId="popover-tooltip" />
    ) : cardType === "tooltip" ? (
      <PopoverTooltip testId="popover-tooltip" />
    ) : null;
  };

  return (
    <div className="bg-white w-72 h-32 rounded-lg shadow-md p-4 border-2 border-gray-500 text-left m-2">
      <div className="flex justify-between">
        <h2 className="text-blue-950 text-xl font-semibold mb-2">{title}</h2>
        {getCardIcon()}
      </div>
      <p className="text-gray-600 mb-1">{subtitle}</p>
      <div className="flex items-center justify-left">
        <p className="text-gray-950">
          <span className="text-xl font-bold text-blue-700">{usersNumber}</span>{" "}
          users
        </p>
      </div>
    </div>
  );
};

export default SelectCard;
