import React, { useState } from "react";
import { Input, Table, Tooltip } from "antd";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { GrEdit } from "react-icons/gr";

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
                    <div className="d-flex justify-content-center cursor-pointer">
                        {text}
                        <CiEdit className="fs-24 ms-2" />
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
                    {text}  ₼

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
                    {text}  ₼

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
                    {text}  ₼
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
            key: 1,
            name_surname: "Elvin Məmmədov",
            number: "0501234567",
            mail: "elvin@example.com",
            car_count: 3,
            interest_rate: "15%",
            debt: "1200",
            cost: "500",
            net_profit: "700",
        },
        {
            key: 2,
            name_surname: "Aygün Əliyeva",
            number: "0707654321",
            mail: "aygun@example.com",
            car_count: 1,
            interest_rate: "20%",
            debt: "0",
            cost: "200",
            net_profit: "800",
        },
        {
            key: 3,
            name_surname: "Rəşad Hüseynov",
            number: "0779876543",
            mail: "reshad@example.com",
            car_count: 5,
            interest_rate: "10%",
            debt: "3000",
            cost: "1200",
            net_profit: "1800",
        },
        {
            key: 4,
            name_surname: "Leyla Quliyeva",
            number: "0555555555",
            mail: "leyla@example.com",
            car_count: 2,
            interest_rate: "12%",
            debt: "700",
            cost: "300",
            net_profit: "400",
        },
    ];


    return (
        <>
            {/* Input alanı */}
            <div className="col mt-3 d-flex justify-content-between">
                <div className={`${isFocused || inputValue ? "focused" : ""}`}>
                    {/* Label'in for/id bağlanması ve onClick ile input'a odaklanma */}
                    <Input
                        placeholder="Adı soyadı" // label yerine placeholder kullanıyoruz
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
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
