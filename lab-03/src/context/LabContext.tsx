import React, { FC, createContext, useContext, useState } from "react";

interface LabContextData {
  isModalOpen: boolean;
  modalType: string;
  openModal: (type: string) => void;
  closeModal: () => void;
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type: string) => {
    setIsModalOpen(true);
    setModalType(type);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const value: LabContextData = {
    isModalOpen,
    openModal,
    closeModal,
    modalType,
  };

  return <LabContext.Provider value={value}>{children}</LabContext.Provider>;
};
