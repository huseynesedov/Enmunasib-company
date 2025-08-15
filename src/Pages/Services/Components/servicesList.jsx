import React, { useState, useEffect, useRef } from "react";
import { Table, Tooltip, Switch, Drawer, Button } from "antd";
import { MdDelete } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { FilterOutlined } from "@ant-design/icons";

import Filters from "./filters";


const ServicesList = () => {

    const [switchStates, setSwitchStates] = useState({});

    // Switch durumunu değiştiren fonksiyon
    const handleSwitchChange = (key) => {
        setSwitchStates((prevState) => ({
            ...prevState,
            [key]: !prevState[key], // Mevcut durumu tersine çevir
        }));
    };



   



    const columns = [
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text, "Maşın aktivdir", "Servisə gedəcək"]} />}>
                    {text}
                </Tooltip>
            ),
        },
        {
            title: "Ad",
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
            title: "Qiyməti",
            dataIndex: "price",
            key: "price",
            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text, "VIP Müştəri", "Ödəniş tamamlandı"]} />}>
                    {text}
                </Tooltip>
            ),
        },
        {
            title: "Növü",
            dataIndex: "type",
            key: "type",
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
            title: "",
            dataIndex: "net_profit",
            key: "net_profit",
            width: 100,
            ellipsis: { showTitle: false },
            render: (text, record) => (
                <div className="p-3">
                    <Switch
                        checked={switchStates[record.key] || false} // Eğer değer yoksa false yap
                        onChange={() => handleSwitchChange(record.key)}
                    />
                </div>
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

export default ServicesList;
