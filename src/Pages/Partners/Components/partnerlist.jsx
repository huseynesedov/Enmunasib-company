import React, { useState } from "react";
import { Table, Tooltip } from "antd";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const PartnersList = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState("");


    const columns = [
        {
            title: "Ad soyad",
            dataIndex: "name_surname",
            key: "name_surname",
            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text, "Maşın aktivdir", "Servisə gedəcək"]} />}>
                    {text}
                </Tooltip>
            ),
        },
        {
            title: "Nömrəsi",
            dataIndex: "number",
            key: "number",
            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text, "Kod təsdiqləndi"]} />}>
                    {text}
                </Tooltip>
            ),
        },
        {
            title: "Email",
            dataIndex: "mail",
            key: "mail",
            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text, "VIP Müştəri", "Ödəniş tamamlandı"]} />}>
                    {text}
                </Tooltip>
            ),
        },
        {
            title: "Maşın sayı ",
            dataIndex: "car_count",
            key: "car_count",
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
            title: "Faiz dərəcəsi",
            dataIndex: "interest_rate",
            key: "interest_rate",
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
            title: "Borc",
            dataIndex: "debt",
            key: "debt",
            width: 100,
            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text, "Yağ dəyişimi edildi", "Əlavə xidmət yoxdur"]} />}>
                    {text}

                </Tooltip>
            ),
        },
        {
            title: "Xərc",
            dataIndex: "cost",
            key: "cost",
            width: 100,
            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text, "Yağ dəyişimi edildi", "Əlavə xidmət yoxdur"]} />}>
                    {text}

                </Tooltip>
            ),
        },
        {
            title: "Xalis mənfəət",
            dataIndex: "net_profit",
            key: "net_profit",
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
            {/* Input alanı */}
            <div className="col mt-3 d-flex justify-content-between">
                <div className={`input-container ${isFocused || inputValue ? "focused" : ""}`}>
                    {/* Label'in for/id bağlanması ve onClick ile input'a odaklanma */}
                    <label
                        htmlFor="custom-input"
                        className="input-label"
                        onClick={() => document.getElementById("custom-input").focus()}
                    >
                        Adı soyadı
                    </label>
                    <input
                        id="custom-input"
                        type="text"
                        // placeholder={isFocused ? "example@gmail.com" : ""}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChange={(e) => setInputValue(e.target.value)}
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

export default PartnersList;
