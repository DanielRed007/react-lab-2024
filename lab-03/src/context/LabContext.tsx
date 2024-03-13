import React, { FC, createContext, useContext, useState } from "react";
import {
  mockWriters,
  tabData,
  accordionData,
  checkoutData,
} from "@/util/mocks/mock-data";
import { CheckoutDataOption, Writer } from "@/util/models/interfaces";

interface LabContextData {
  isModalOpen: boolean;
  modalType: string;
  openModal: (type: string) => void;
  closeModal: () => void;
  dropdownOptionSelected: Writer;
  setDropdownOption: (option: Writer) => void;
  toggleEnabled: boolean;
  setToggleSwitch: () => void;
  radioEnabled: boolean;
  setRadioToggle: () => void;
  tabGroupData: any;
  accordionDataSet: any;
  checkoutAccData: CheckoutDataOption[];
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
  const [toggleEnabled, switchToggleEnabled] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");
  const [dropdownOptionSelected, setDropdownOptionSelected] = useState<Writer>(
    mockWriters[0]
  );
  const [radioEnabled, setRadioEnabled] = useState<boolean>(false);
  const [tabGroupData, setTabData] = useState(tabData);
  const [accordionDataSet, setAccordionData] = useState(accordionData);
  const [checkoutAccData, setCheckoutAccData] = useState(checkoutData);

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

  const setToggleSwitch = () => {
    switchToggleEnabled(!toggleEnabled);
  };

  const setRadioToggle = () => {
    setRadioEnabled(!radioEnabled);
  };

  const value: LabContextData = {
    isModalOpen,
    openModal,
    closeModal,
    modalType,
    dropdownOptionSelected,
    setDropdownOption,
    setToggleSwitch,
    toggleEnabled,
    radioEnabled,
    setRadioToggle,
    tabGroupData,
    accordionDataSet,
    checkoutAccData,
  };

  return <LabContext.Provider value={value}>{children}</LabContext.Provider>;
};
