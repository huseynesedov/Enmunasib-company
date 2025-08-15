import React, { useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { useFilter } from "../../../Contexts/Rezervs/filters";

const Filters = () => {
    const {
        isOpenStatus, setIsOpenStatus, selectedStatus, setSelectedStatus,
        isOpenType, setIsOpenType, selectedType, setSelectedType,
        inputValue, setInputValue, isFocused, setIsFocused, startDate, handleStartDateChange,
        minStartDate,endDate,handleEndDateChange
    } = useFilter();

    // Dropdown'lar ve input için referanslar
    const dropdownRefStatus = useRef(null);
    const dropdownRefType = useRef(null);
    const inputRef = useRef(null);

    // Sayfanın herhangi bir yerine tıklandığında dropdown'ları kontrol eden fonksiyon
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Eğer dışarıya tıklanmışsa dropdown'ları kapat
            if (
                dropdownRefStatus.current && !dropdownRefStatus.current.contains(event.target) &&
                dropdownRefType.current && !dropdownRefType.current.contains(event.target) &&
                inputRef.current && !inputRef.current.contains(event.target)
            ) {
                setIsOpenStatus(false);
                setIsOpenType(false);
                setIsFocused(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Status dropdown açıldığında Type dropdown kapanır
    const toggleStatusDropdown = () => {
        setIsOpenStatus((prev) => !prev);
        setIsOpenType(false); // Diğer dropdownu kapat
    };

    // Type dropdown açıldığında Status dropdown kapanır
    const toggleTypeDropdown = () => {
        setIsOpenType((prev) => !prev);
        setIsOpenStatus(false); // Diğer dropdownu kapat
    };

    const handleSelectStatus = (value) => {
        setSelectedStatus(value);
        setTimeout(() => setIsOpenStatus(false), 100); // Küçük bir gecikme ekledik
    };

    const handleSelectType = (value) => {
        setSelectedType(value);
        setTimeout(() => setIsOpenType(false), 100);
    };


    // Input'a tıklandığında dropdown'ları kapat
    const handleInputFocus = () => {
        setIsFocused(true);
        setIsOpenStatus(false);
        setIsOpenType(false);
    };

    return (
        <>
            {/* Status Dropdown */}
            <div className="me-3">
                <div className="dropdown-container" ref={dropdownRefStatus}>
                    <div className="dropdown" onClick={toggleStatusDropdown}>
                        <div className="dropdown-selected d-flex">
                            {selectedStatus || "Seçiniz..."}
                            <div className="ms-3">
                                <MdOutlineKeyboardArrowDown />
                            </div>
                        </div>
                        <div className={`dropdown-options ${isOpenStatus ? "open" : ""}`}>
                            {["Hamisi", "Seçenek 1", "Seçenek 2", "Seçenek 3", "Seçenek 4"].map((item) => (
                                <div key={item} className="dropdown-option" onClick={() => handleSelectStatus(item)}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Type Dropdown */}
            <div className="me-3">
                <div className="dropdown-container" ref={dropdownRefType}>
                    <div className="dropdown" onClick={toggleTypeDropdown}>
                        <div className="dropdown-selected d-flex">
                            {selectedType || "Seçiniz..."}
                            <div className="ms-3">
                                <MdOutlineKeyboardArrowDown />
                            </div>
                        </div>
                        <div className={`dropdown-options ${isOpenType ? "open" : ""}`}>
                            {["Hamisi", "Seçenek 1", "Seçenek 2", "Seçenek 3", "Seçenek 4"].map((item) => (
                                <div key={item} className="dropdown-option" onClick={() => handleSelectType(item)}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Input Alanı */}
            <div className={`input-container me-3 ${isFocused || inputValue ? "focused" : ""}`} ref={inputRef}>
                <label htmlFor="custom-inputService" className="input-label" onClick={handleInputFocus}>
                    Rezerv Kodu
                </label>
                <input
                    id="custom-inputService"
                    type="text"
                    onFocus={handleInputFocus}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                />
            </div>

            <div className="thon_home_datepickers">
                <input
                    className="date-picker-input-rezervs "
                    type="datetime-local"
                    value={startDate}
                    onChange={handleStartDateChange}
                    min={minStartDate}
                />
                <p className="m-3 fs-18 fw-600">-</p>
                <input
                    className="date-picker-input-rezervs"
                    type="datetime-local"
                    value={endDate}
                    onChange={handleEndDateChange}
                />
            </div>
        </>
    );
};

export default Filters;
