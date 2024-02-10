import React from "react";
import SelectCard from "../components/select-card/SelectCard";
import { selectCardMockData } from "../util/mock/data.mock";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="flex items-center justify-between">
        {selectCardMockData.map((card, index) => (
          <SelectCard
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            usersNumber={card.usersNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
