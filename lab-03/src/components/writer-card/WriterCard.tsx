import { Writer } from "@/util/models/interfaces";
import { FC } from "react";

interface WriterCardProps {
  selected: Writer;
}

const WriterCard: FC<WriterCardProps> = ({ selected }) => {
  return (
    <div className="mt-4 mb-4 bg-zinc-500 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{selected.name}</div>
        <p className="text-gray-700 text-base">Birthday: {selected.birthday}</p>
        <p className="text-gray-700 text-base">Gender: {selected.gender}</p>
        <p className="text-gray-700 text-base">Country: {selected.country}</p>
      </div>
    </div>
  );
};

export default WriterCard;
