import React, { FC, createContext, useContext, useState } from "react";

interface LabContextData {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const LabContext = createContext<LabContextData | undefined>(undefined);

export const useLabContext = () => {
  const context = useContext(LabContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};

interface LabContextProviderProps {
  children: any;
}

export const LabContextProvider: FC<LabContextProviderProps> = ({
  children,
}) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  const value: LabContextData = {
    count,
    increment,
    decrement,
  };

  return <LabContext.Provider value={value}>{children}</LabContext.Provider>;
};
