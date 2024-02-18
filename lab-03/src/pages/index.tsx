import { useLabContext } from "@/context/LabContext";
import ButtonCard from "@/components/button-card/ButtonCard";

export default function Index() {
  const { openModal, modalType } = useLabContext();

  const handleOpenModal = (type: string) => {
    openModal(type);
  };

  return (
    <div>
      <main className="container mx-auto py-8 h-dvh">
        <h2 className="text-4xl font-bold mb-4">
          NextJS + Context API Workshop
        </h2>

        <div className="flex justify-center mt-10">
          <div className="max-w-xs w-48 h-48 rounded bg-yellow-500 overflow-hidden shadow-lg mx-4">
            <ButtonCard
              title="Payments"
              type="payments"
              onClickButton={handleOpenModal}
            />
          </div>
          <div className="max-w-xs w-48 h-48 rounded bg-yellow-500 overflow-hidden shadow-lg mx-4">
            <ButtonCard
              title="Form Sample"
              type="form"
              onClickButton={handleOpenModal}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
