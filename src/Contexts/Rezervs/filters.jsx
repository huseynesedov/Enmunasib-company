import { notification } from 'antd';
import React, { createContext, useState, useContext, useRef, useEffect } from 'react';

export const FiltersContext = createContext();

export const useFilter = () => {
    return useContext(FiltersContext);
};

export const RezervsFiltersProvider = ({ children }) => {
    const [isOpenStatus, setIsOpenStatus] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState("Status");
    const dropdownRefStatus = useRef(null);

    const [isOpenType, setIsOpenType] = useState(false);
    const [selectedType, setSelectedType] = useState("Növü");
    const dropdownRefType = useRef(null);

    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const minStartDate = "2025-01-02T00:00";  // Format: YYYY-MM-DDTHH:mm

    // Function to open notification
    const openNotification = (message) => {
        notification.error({
            message: 'Invalid Date',
            description: message,
            duration: 2,  // Duration of the notification
        });
    };

    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();

        const firstDay = new Date(year, month, 1, 0, 1);
        const lastDay = new Date(year, month + 1, 0, 23, 59);

        const formatDate = (date) => {
            const tzOffset = date.getTimezoneOffset() * 60000;
            return new Date(date - tzOffset).toISOString().slice(0, 16);
        };

        setStartDate(formatDate(firstDay));
        setEndDate(formatDate(lastDay));
    }, []);

    const handleStartDateChange = (e) => {
        const value = e.target.value;
        const enteredDate = new Date(value);
        const minDate = new Date(minStartDate);

        if (enteredDate >= minDate) {
            setStartDate(value);
        } else {
            // Delay the notification to ensure the state update is completed
            setTimeout(() => {
                openNotification(`Date cannot be earlier than ${minStartDate}`);
                setStartDate(minStartDate);  // Reset to min date
            }, 100);  
        }
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

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

            startDate,
            setStartDate,
            endDate,
            setEndDate,
            minStartDate,
            handleStartDateChange,
            handleEndDateChange
        }} >
            {children}
        </FiltersContext.Provider>
    );
};
