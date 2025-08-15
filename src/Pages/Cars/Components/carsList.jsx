import React, { useState, useEffect, useRef } from "react";
import { Table, Tooltip } from "antd";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { TiTick } from "react-icons/ti";
import { GrEdit } from "react-icons/gr";
const CarsList = () => {
    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);


    const handleInputChange = (e) => {
        let value = e.target.value;

        // Yalnızca rakam ve harfleri kabul et
        value = value.replace(/[^a-zA-Z0-9]/g, "");

        // 7 karakter sınırına ulaşıldığında daha fazla yazılmasını engelle
        if (value.length > 7) {
            value = value.slice(0, 7);
        }

        // İlk 2 rakam, - sonra 2 harf, - ve son 3 rakam ekleniyor
        if (value.length > 2) {
            value = value.slice(0, 2) + "-" + value.slice(2);
        }
        if (value.length > 5) {
            value = value.slice(0, 5) + "-" + value.slice(5);
        }

        // Hedef formatta olmasını sağla: 
        // ilk iki rakam, ardından iki harf, ve son üç rakam
        if (value.length > 2 && value.length <= 4) {
            // İki harf olmalı
            if (!/^[a-zA-Z]{2}$/.test(value.slice(3, 5))) {
                value = value.slice(0, 4); // Yalnızca iki harfe izin ver
            }
        }

        setInputValue(value);
    };
    const [selectedValue, setSelectedValue] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    // Dropdown'un dışındaki alanlara tıklanıp tıklanmadığını kontrol etmek için
    const dropdownRef = useRef(null);

    // Dışarıya tıklanmayı kontrol etmek için useEffect kullanıyoruz
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false); // Eğer dropdown dışına tıklanırsa kapanacak
            }
        };

        // Tüm tıklamaları dinliyoruz
        document.addEventListener("mousedown", handleClickOutside);

        // Temizleme fonksiyonu: Component unmount olduğunda event listener'ı kaldırır
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []); // boş array, sadece component mount olduğunda çalışır

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (value) => {
        setSelectedValue(value);
        setIsOpen(false); // Seçim yapıldığında dropdown kapanır
    };

    const columns = [
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width:100,
            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text, "Maşın aktivdir", "Servisə gedəcək"]} />}>
                    
                    <div className="rezerv">
                        <div className="rezerv-border"></div>
                        {text}

                    </div>

                </Tooltip>
            ),
        },
        {
            title: "Brend-Model",
            dataIndex: "brend",
            key: "brend",
            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text, "Kod təsdiqləndi"]} />}>
                    {text}
                </Tooltip>
            ),
        },
        {
            title: "Nömrə",
            dataIndex: "number",
            key: "number",
            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text, "VIP Müştəri", "Ödəniş tamamlandı"]} />}>
                    {text}
                </Tooltip>
            ),
        },
        {
            title: "Tərəfdaş K.",
            dataIndex: "partner_count",
            key: "partner_count",
            width: 50,
            ellipsis: { showTitle: false },
            render: (text) => (
                <div className="d-flex justify-content-center">
                    <Tooltip title={<TooltipContent messages={[text, "Sifariş sabahdır", "Tarix dəyişdirildi"]} />}>
                        {text}
                    </Tooltip>
                </div>
            ),
        },
        {
            title: "Depozit",
            dataIndex: "depozit",
            key: "depozit",
            width: 100,
            ellipsis: { showTitle: false },
            render: (text) => (
                <>
                    <div className="d-flex justify-content-center">
                        <Tooltip title={<TooltipContent messages={[text, "Yağ dəyişimi edildi", "Əlavə xidmət yoxdur"]} />}>
                            {text}
                            30%
                            <CiEdit className="fs-24 ms-2" />
                        </Tooltip>
                    </div>
                </>
            ),
        },
        {
            title: "G.Qiymət",
            dataIndex: "g_price",
            key: "g_price",
            width: 100,
            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text, "Yağ dəyişimi edildi", "Əlavə xidmət yoxdur"]} />}>
                    {text}

                </Tooltip>
            ),
        },
        {
            title: "Xidmətlər",
            dataIndex: "services",
            key: "services",
            width: 100,
            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text, "Yağ dəyişimi edildi", "Əlavə xidmət yoxdur"]} />}>
                    {text}

                </Tooltip>
            ),
        },
        {
            title: "",
            dataIndex: "net_profit",
            key: "net_profit",
            width: 100,
            ellipsis: { showTitle: false },
            render: (text) => (
                <button className="thon_tableButtonTransparentGreen">
                    <TiTick className="fs-24" />
                    Aktiv et
                </button>
            ),
        },
        {
            title: "",
            dataIndex: "net_profit",
            key: "net_profit",
            width: 100,
            ellipsis: { showTitle: false },
            render: (text) => (
                <div className="d-flex  justify-content-center">
                    <button className="thon_tableButtonTransparentYellow">
                        <GrEdit className="fs-24" />
                    </button>
                </div>
            ),
        },
        {
            title: "",
            dataIndex: "extendyourtime",
            key: "extendyourtime",
            width: 100,
            ellipsis: { showTitle: false },
            render: () => (
                <button className="thon_tableButtonTransparentRed">
                    <MdDelete className="fs-24" />
                </button>
            ),
        },
    ];

    const data = [
        {
            key: "1",
            status: "Rezervde",
            status_number: "1",
            number: "77-HH-005",
            name: "Hüseyn Əsədov",
            age: "34BH67Z",
            date: "2025-03-15",
            services: "Yağ Dəyişimi",
        },
        {
            key: "2",
            number: "99-XX-123",
            name: "Elvin Məmmədov",
            age: "98GH45A",
            date: "2025-04-20",
            services: "Təkər Dəyişimi",
        },
    ];

    return (
        <>
            <div className="col mt-3 d-flex align-items-center">
                <div className="me-3">
                    <div className="dropdown-container">
                        <div
                            className="dropdown"
                            onClick={toggleDropdown}
                            ref={dropdownRef} // Ref'yi burada kullanıyoruz
                        >
                            <div className="dropdown-selected">
                                {selectedValue || "Status"}
                            </div>
                            <div className={`dropdown-arrow ${isOpen ? "open" : ""}`}></div>
                            <div className={`dropdown-options ${isOpen ? "open" : ""}`}>
                                <div className="dropdown-option" onClick={() => handleSelect("Seçenek 1")}>
                                    Hamisi
                                </div>
                                <div className="dropdown-option" onClick={() => handleSelect("Seçenek 1")}>
                                    Seçenek 1
                                </div>
                                <div className="dropdown-option" onClick={() => handleSelect("Seçenek 2")}>
                                    Seçenek 2
                                </div>
                                <div className="dropdown-option" onClick={() => handleSelect("Seçenek 3")}>
                                    Seçenek 3
                                </div>
                                <div className="dropdown-option" onClick={() => handleSelect("Seçenek 4")}>
                                    Seçenek 4
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`input-container ${isFocused || inputValue ? "focused" : ""}`}>
                    <label
                        htmlFor="custom-input"
                        className="input-label"
                        onClick={() => document.getElementById("custom-input").focus()}
                    >
                        Nömrəsi
                    </label>
                    <input
                        id="custom-input"
                        type="text"
                        placeholder={isFocused ? "10-AB-123" : ""}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChange={handleInputChange}
                        value={inputValue}
                    />
                </div>
            </div>

            {/* Cədvəl */}
            <div className="table-responsive-wrapper mt-4">
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    locale={{ emptyText: "Rezervdə maşın yoxdur!" }}
                    scroll={{ x: true }}
                />
            </div>
        </>
    );
};

const TooltipContent = ({ messages }) => (
    <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
        {messages.map((msg, index) => (
            <li key={index} style={{ fontSize: "14px", marginBottom: "4px" }}>
                {msg}
            </li>
        ))}
    </ul>
);

export default CarsList;
