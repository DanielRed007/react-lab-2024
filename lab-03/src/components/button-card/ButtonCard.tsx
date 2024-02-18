import React, { FC } from "react";
import { useLabContext } from "@/context/LabContext";

interface ButtonCardProps {
  title: string;
  type: string;
  onClickButton(type: string): void;
}

const ButtonCard: FC<ButtonCardProps> = ({ title, type, onClickButton }) => {
  return (
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-center mt-9">{title}</div>
      <button
        data-testid={type}
        onClick={() => onClickButton(type)}
        className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto block"
      >
        Just Click
      </button>
    </div>
  );
};

export default ButtonCard;
