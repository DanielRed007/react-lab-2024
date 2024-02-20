import React, { FC, createContext, useContext, useState } from "react";
import { mockWriters } from "@/util/mocks/mock-data";
import { Writer } from "@/util/models/interfaces";

interface LabContextData {
  isModalOpen: boolean;
  modalType: string;
  openModal: (type: string) => void;
  closeModal: () => void;
  dropdownOptionSelected: Writer;
  setDropdownOption: (option: Writer) => void;
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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");
  const [dropdownOptionSelected, setDropdownOptionSelected] = useState<Writer>(
    mockWriters[0]
  );

  const openModal = (type: string) => {
    setIsModalOpen(true);
    setModalType(type);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const setDropdownOption = (option: Writer) => {
    setDropdownOptionSelected(option);
  };

  const value: LabContextData = {
    isModalOpen,
    openModal,
    closeModal,
    modalType,
    dropdownOptionSelected,
    setDropdownOption,
  };

  return <LabContext.Provider value={value}>{children}</LabContext.Provider>;
};
