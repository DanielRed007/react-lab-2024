import { FC } from "react";

interface SelectCardProps {
  title: string;
  subtitle: string;
  usersNumber: number;
}

const SelectCard: FC<SelectCardProps> = ({ title, subtitle, usersNumber }) => {
  return (
    <div className="bg-white w-72 h-32 rounded-lg shadow-md p-4 border-2 border-gray-500 text-left m-2">
      <div>
        <h2 className="text-blue-950 text-xl font-semibold mb-2">{title}</h2>
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
