import React, { useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiExitDoor } from "react-icons/gi";


import { useFilter } from "../../../Contexts/Drivers/filter";

const Filters = () => {
    const {
        isOpenStatus, setIsOpenStatus, selectedStatus, setSelectedStatus,
        nameInputValue, setNameInputValue,
        phoneInputValue, setPhoneInputValue,
        isNameFocused, setIsNameFocused,
        isPhoneFocused, setIsPhoneFocused
    } = useFilter();

    // Dropdown ve input için referanslar
    const dropdownRefStatus = useRef(null);
    const inputNameRef = useRef(null);
    const inputPhoneRef = useRef(null);

    // Sayfanın herhangi bir yerine tıklandığında dropdown ve inputları kontrol eden fonksiyon
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRefStatus.current && !dropdownRefStatus.current.contains(event.target) &&
                inputNameRef.current && !inputNameRef.current.contains(event.target) &&
                inputPhoneRef.current && !inputPhoneRef.current.contains(event.target)
            ) {
                setIsOpenStatus(false);
                setIsNameFocused(false);
                setIsPhoneFocused(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Status dropdown açıldığında diğer dropdownları kapat
    const toggleStatusDropdown = () => {
        setIsOpenStatus((prev) => !prev);
    };

    const handleSelectStatus = (value) => {
        setSelectedStatus(value);
        setIsOpenStatus(false);
    };

    return (
        <>
            <div className="d-flex align-items-center w-100 justify-content-between">
                <div className="d-flex align-items-center">
                    {/* Status Dropdown */}
                    <div className="me-3">
                        <div className="dropdown-container" ref={dropdownRefStatus}>
                            <div className="dropdown" onClick={toggleStatusDropdown}>
                                <div className="dropdown-selected d-flex justify-content-between">
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

                    {/* Adı Input */}
                    <div className={`input-container me-3 ${isNameFocused || nameInputValue ? "focused" : ""}`} ref={inputNameRef}>
                        <label htmlFor="custom-inputName" className="input-label" onClick={() => setIsNameFocused(true)}>
                            Adı
                        </label>
                        <input
                            id="custom-inputName"
                            type="text"
                            onFocus={() => setIsNameFocused(true)}
                            onBlur={() => setIsNameFocused(false)}
                            onChange={(e) => setNameInputValue(e.target.value)}
                            value={nameInputValue}
                        />
                    </div>

                    {/* Mobil Nömrə Input */}
                    <div className={`input-container me-3 ${isPhoneFocused || phoneInputValue ? "focused" : ""}`} ref={inputPhoneRef}>
                        <label htmlFor="custom-inputPhone" className="input-label" onClick={() => setIsPhoneFocused(true)}>
                            Mobil nömrə
                        </label>
                        <input
                            id="custom-inputPhone"
                            type="text"
                            onFocus={() => setIsPhoneFocused(true)}
                            onBlur={() => setIsPhoneFocused(false)}
                            onChange={(e) => setPhoneInputValue(e.target.value)}
                            value={phoneInputValue}
                        />
                    </div>
                </div>

                <div>
                    <button className="thon_tableButtonTransparent">
                    <GiExitDoor className="fs-24 me-2" />
                        Işdən Çıxart
                    </button>
                </div>
            </div>

        </>
    );
};

export default Filters;
