import React, { createContext, useState, useContext, useRef } from 'react';

export const FiltersContext = createContext();

export const useFilter = () => {
    return useContext(FiltersContext);
};

export const DriversFiltersProvider = ({ children }) => {
    const [isOpenStatus, setIsOpenStatus] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState("");
    const [isOpenType, setIsOpenType] = useState(false);
    const [selectedType, setSelectedType] = useState("");

    // Adı ve Mobil nömrə için ayrı state'ler
    const [nameInputValue, setNameInputValue] = useState("");
    const [phoneInputValue, setPhoneInputValue] = useState("");
    const [isNameFocused, setIsNameFocused] = useState(false);
    const [isPhoneFocused, setIsPhoneFocused] = useState(false);

    

    return (
        <FiltersContext.Provider value={{
            isOpenStatus, setIsOpenStatus, selectedStatus, setSelectedStatus,
            isOpenType, setIsOpenType, selectedType, setSelectedType,
            nameInputValue, setNameInputValue,
            phoneInputValue, setPhoneInputValue,
            isNameFocused, setIsNameFocused,
            isPhoneFocused, setIsPhoneFocused
        }}
        >
            {children}
        </FiltersContext.Provider>
    );
};
