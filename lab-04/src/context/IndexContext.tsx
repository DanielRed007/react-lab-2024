import React, { FC, createContext, useContext, useState } from "react";

interface IndexContext {}

const IndexContext = createContext<IndexContext | undefined>(undefined);

export const useIndexContext = () => {
  const context = useContext(IndexContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};

interface IndexContextProviderProps {
  children: any;
}

export const IndexContextProvider: FC<IndexContextProviderProps> = ({
  children,
}) => {
  return <IndexContext.Provider value={{}}>{children}</IndexContext.Provider>;
};
