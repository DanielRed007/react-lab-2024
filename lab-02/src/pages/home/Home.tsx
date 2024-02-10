import React from "react";
import SelectCard from "../components/select-card/SelectCard";
import { selectCardMockData } from "../util/mock/data.mock";

const Home = () => {
  return (
    <div className="h-screen">
      <div className="w-2/3 md:mx-auto flex flex-wrap justify-between mt-9">
        <h1 className="text-3xl text-blue-700">Home</h1>
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
    </div>
  );
};

export default Home;
