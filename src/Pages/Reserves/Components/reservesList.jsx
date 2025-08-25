import React, { useState } from "react";

import { Table, Drawer, Tooltip, Button } from "antd";

import { FilterOutlined } from "@ant-design/icons";
import { MdBusinessCenter, MdDelete } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
import { IoMdInformationCircle } from "react-icons/io";

import Filters from "./filters";

const RezerveList = () => {



    const columns = [
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 100,
            ellipsis: { showTitle: false },
            render: (text) => {
                const getStatusColor = (status) => {
                    switch (status) {
                        case "Ofis":
                            return "ofis"; // qirmizi
                        case "Web":
                            return "web"; // cyan
                        default:
                            return "status-default";
                    }
                };
                return (
                    <Tooltip title={<TooltipContent messages={[text]} />}>
                        <div className={` ${getStatusColor(text)}`}>
                            <div className={`${getStatusColor(text)}-border`}></div>
                            {text}
                        </div>
                    </Tooltip>
                )
            },

        },
        {
            title: "R.kodu",
            dataIndex: "name",
            key: "name",
            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text, "Kod təsdiqləndi"]} />}>
                    {text}
                </Tooltip>
            ),
        },
        {
            title: "Brend - Model",
            dataIndex: "price",
            key: "price",
            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text, "VIP Müştəri", "Ödəniş tamamlandı"]} />}>
                    {text}
                    <IoMdInformationCircle className="fs-24 text_blue" />
                </Tooltip>
            ),
        },
        {
            title: "Müştəri",
            dataIndex: "type",
            key: "type",
            ellipsis: { showTitle: false },
            render: (text) => (
                <div className="d-flex justify-content-center">
                    <Tooltip title={<TooltipContent messages={[text, "Sifariş sabahdır", "Tarix dəyişdirildi"]} />}>
                        <IoMdInformationCircle className="fs-24" />
                    </Tooltip>
                </div>
            ),
        },
        {
            title: "Gün sayı",
            dataIndex: "net_profit",
            key: "net_profit",
            width: 100,
            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text, "Sifariş sabahdır", "Tarix dəyişdirildi"]} />}>
                    {text}

                    <IoMdInformationCircle className="fs-24 text_blue" />
                </Tooltip>

            ),
        },
        {
            title: "Ü.Məbləğ",
            dataIndex: "net_profit",
            key: "net_profit",
            width: 100,
            ellipsis: { showTitle: false },
            render: (text) => (
                { text }
            ),
        },
        {
            title: "Xidmət",
            dataIndex: "net_profit",
            key: "net_profit",
            width: 100,
            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text, "Sifariş sabahdır", "Tarix dəyişdirildi"]} />}>
                    {text}

                    <IoMdInformationCircle className="fs-24 text_blue" />
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
                <button className="thon_tableButtonDarkBlue">
                    <MdBusinessCenter className="fs-24 me-2" />
                    Rezerv Təhvili
                </button>
            ),
        },
        {
            title: "",
            dataIndex: "extendyourtime",
            key: "extendyourtime",
            width: 100,
            ellipsis: { showTitle: false },
            render: () => (
                <button className="thon_tableButtonTransparent">
                    <CiTimer className="fs-24 me-2" />
                    Vaxtini uzat
                </button>
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
            status: "Ofis",
            name: "RK-001",
            price: "Toyota Prius 2015",
            type: "Hüseyn Əsədov",
            net_profit: "5",       // Gün sayı
            total_amount: "250 AZN", // Ü.Məbləğ üçün ayrıca key əlavə etmək olar
            service: "Full Paket",
        },
        {
            key: "2",
            status: "Web",
            name: "RK-002",
            price: "BMW X5 2018",
            type: "Elvin Məmmədov",
            net_profit: "3",
            total_amount: "450 AZN",
            service: "Yalnız maşın",
        },
    ];

    const [open, setOpen] = useState(false);
    return (
        <>
            {/* Filtre İkonu (Mobilde Görünecek) */}
            <div className="d-md-none mt-3 mb-2">
                <Button
                    type="primary"
                    icon={<FilterOutlined />}
                    onClick={() => setOpen(true)}
                />
            </div>

            {/* Filtreler (Masaüstünde Normal Göster, Mobilde Drawer İçinde) */}
            <div className="col mt-3 d-none d-md-flex flex-wrap align-items-center">
                <Filters />
            </div>

            {/* Drawer - Mobilde Filtreyi Aç/Kapat */}
            <Drawer
                title="Filtrlər"
                placement="left"
                onClose={() => setOpen(false)}
                open={open}
            >
                <Filters />
            </Drawer>

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

export default RezerveList;
