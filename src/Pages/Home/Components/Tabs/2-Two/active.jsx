import React, { useState } from "react";
import { Badge, Input, Table, Tooltip } from "antd";
import { MdCarRepair } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { IoPrintSharp } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

import { FaSearch } from "react-icons/fa";


const Active = () => {

    const [showSearch, setShowSearch] = useState(false);
    const columns = [
        {
            title: "Maşın Şəkili",
            dataIndex: "number",
            key: "number",
            width: 100,
            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text, "Maşın aktivdir", "Servisə gedəcək"]} />}>
                    {/* {text} */}
                    <div className="d-flex align-items-center">
                        <div className="thon_activeCar d-flex align-items-center me-3">
                            <img className="" src="https://www.car-mart.com/wp-content/uploads/2025/02/white-ford-SUV-2024.webp" alt="" />
                        </div>
                        <MdLocationPin className="fs-24 text_green" />
                    </div>
                </Tooltip>
            ),
        },
        {
            title: "Maşın nömrəsi",
            dataIndex: "number",
            key: "number",
            width: 100,

            ellipsis: { showTitle: false },
            render: (text) => (
                <div className="d-flex justify-content-center">
                    <Tooltip title={<TooltipContent messages={[text, "Kod təsdiqləndi"]} />}>
                        {text}
                    </Tooltip>
                </div>
            ),
        },
        {
            title: "Qiymət",
            dataIndex: "price",
            key: "price",
            width: 100,

            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text]} />}>
                    {text}
                </Tooltip>
            ),
        },
        {
            title: "Depozit",
            dataIndex: "depozit",
            key: "depozit",
            width: 100,

            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text]} />}>
                    {text}
                </Tooltip>
            ),
        },
        {
            title: "Hazırki km",
            dataIndex: "minkm",
            key: "minkm",
            width: 100,

            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text]} />}>
                    {text}
                </Tooltip>
            ),
        },
        {
            title: "Zəmanət km",
            dataIndex: "maxkm",
            key: "maxkm",
            width: 100,

            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text]} />}>
                    {text}
                </Tooltip>
            ),
        },
        {
            title: "",
            dataIndex: "reservehandover",
            key: "reservehandover",
            width: 100,
            ellipsis: { showTitle: false },
            render: (text) => (
                <>
                    <div className="d-flex justify-content-center">
                        <button className="thon_tableButtonDarkBlue">
                            <MdCarRepair className="fs-24 me-2" />
                            Təmirə göndər
                        </button>
                    </div>

                </>
            ),
        },
        {
            title: "",
            dataIndex: "extendyourtime",
            key: "extendyourtime",
            width: 100,

            ellipsis: { showTitle: false },
            render: (text) => (
                <>
                    <div className="d-flex justify-content-center">
                        <button className="thon_tableButtonDarkBlue">
                            <MdBusinessCenter className="fs-24 me-2" />
                            Rezerv et
                        </button>
                    </div>
                </>
            ),
        },
    ];

    const data = [
        {
            key: "1",
            number: "77-HH-005",
            name: "Huseyn Esedov",
            age: "34BH67Z",
            address: "İstanbul, Kadıköy, Moda Mahallesi",
            date: "2025-03-15",
            services: "Yağ Dəyişimi",
        },
        {
            key: "2",
            number: "77-HH-005",
            name: "Huseyn Esedov",
            age: "34BH67Z",
            address: "İstanbul, Kadıköy, Moda Mahallesi",
            date: "2025-03-15",
            services: "Yağ Dəyişimi",
        },
        {
            key: "3",
            number: "77-HH-005",
            name: "Huseyn Esedov",
            age: "34BH67Z",
            address: "İstanbul, Kadıköy, Moda Mahallesi",
            date: "2025-03-15",
            services: "Yağ Dəyişimi",
        },
        {
            key: "4",
            number: "77-HH-005",
            name: "Huseyn Esedov",
            age: "34BH67Z",
            address: "İstanbul, Kadıköy, Moda Mahallesi",
            date: "2025-03-15",
            services: "Yağ Dəyişimi",
        },
    ];

    return (
        <>
            <div className="col mt-3 d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <button className="thon_TableButton thon_new me-3">
                        <IoIosAddCircle className="fs-24 me-2" />
                        Yeni maşın əlavə et
                    </button>
                </div>

                <div className="d-flex align-items-center gap-4">
                    <div className="d-flex align-items-center gap-2">
                        <AnimatePresence>
                            {showSearch && (
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: 200, opacity: 1 }}
                                    exit={{ width: 0, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="ms-2"
                                >
                                    <Input
                                        placeholder="Axtar..."
                                        autoFocus
                                        style={{ borderRadius: "12px" }}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <FaSearch
                            className="thon_new fs-20 cursor-pointer thon_homeSearchIcon"
                            style={{ marginLeft: showSearch ? 0 : 8 }}
                            onClick={() => setShowSearch((prev) => !prev)}
                        />
                    </div>


                    <Badge.Ribbon text="Tezliklə" color="orange">
                        <div style={{ pointerEvents: 'none', opacity: 0.6 }}>
                            <button className="thon_TableButton thon_print d-flex align-items-center">
                                <IoPrintSharp className="fs-24 me-2" />
                                Çıxart
                            </button>
                        </div>
                    </Badge.Ribbon>
                </div>
            </div>

            <div className="table-responsive-wrapper mt-4">
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    locale={{ emptyText: 'Rezervdə maşın yoxdu !' }}
                    scroll={{ x: true }}
                    responsive
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

export default Active;
