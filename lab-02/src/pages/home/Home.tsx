import React, { useState } from "react";
import SelectCard from "../components/select-card/SelectCard";
import { selectCardMockData } from "../util/mock/data.mock";
import LabModal from "../components/modal/LabModal";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="h-screen">
      <div className="w-2/3 md:mx-auto flex flex-wrap justify-between mt-9">
        <h1 className="text-3xl text-blue-400" data-test-id="home-title">
          Home
        </h1>

        <h3 className="text-xl text-white" data-test-id="home-title">
          Select Cards
        </h3>
      </div>
      <div className="w-2/3 md:mx-auto flex flex-wrap justify-between mt-9">
        {selectCardMockData.map((card, index) => (
          <SelectCard
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            usersNumber={card.usersNumber}
            cardType={card.cardType}
          />
        ))}
      </div>
      <div className="w-2/3 md:mx-auto flex flex-wrap justify-between mt-9">
        <h1 className="text-3xl text-blue-400" data-test-id="home-title">
          Home
        </h1>

        <h3 className="text-xl text-white" data-test-id="home-title">
          Modal Samples
        </h3>
      </div>
      <div className="w-2/3 md:mx-auto flex flex-wrap justify-between mt-9">
        <div className="">
          <button
            type="button"
            onClick={toggleModal}
            className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            Payment Modal
          </button>
        </div>
      </div>
      <LabModal
        isOpen={modalOpen}
        closeModal={closeModal}
        title="Payments Modal"
      >
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Your payment has been successfully submitted. We’ve sent you an
            email with all of the details of your order.
          </p>
        </div>
      </LabModal>
    </div>
  );
};

export default Home;
