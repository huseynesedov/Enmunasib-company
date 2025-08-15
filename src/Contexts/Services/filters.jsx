import React, { createContext, useState, useContext, useRef } from 'react';

export const FiltersContext = createContext();

export const useFilter = () => {
    return useContext(FiltersContext);
};

export const ServicesFiltersProvider = ({ children }) => {
    const [isOpenStatus, setIsOpenStatus] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState("Status");
    const dropdownRefStatus = useRef(null);

    const [isOpenType, setIsOpenType] = useState(false);
    const [selectedType, setSelectedType] = useState("Növü");
    const dropdownRefType = useRef(null);

    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);


    return (
        <FiltersContext.Provider value={{
            isOpenStatus,
            setIsOpenStatus,
            selectedStatus,
            setSelectedStatus,
            dropdownRefStatus,
            isOpenType,
            setIsOpenType,
            selectedType,
            setSelectedType,
            dropdownRefType,
            inputValue,
            setInputValue,
            isFocused,
            setIsFocused,
        }} >
            {children}
        </FiltersContext.Provider>
    );
};
