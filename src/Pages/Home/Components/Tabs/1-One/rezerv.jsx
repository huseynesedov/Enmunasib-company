import React, { useState } from "react";
import { Badge, Input, Table, Tooltip } from "antd";
import { IoMdInformationCircle } from "react-icons/io";
import { CiTimer } from "react-icons/ci";
import { MdBusinessCenter } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { IoPrintSharp } from "react-icons/io5"
import { FaSearch } from "react-icons/fa";;
import { motion, AnimatePresence } from "framer-motion";

import AddRezerv from "@modals/Rezerve/rezerv.add";

const Rezerv = () => {
    const [isModalRezerv, setIsModalRezerv] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const columns = [
        {
            title: "Maşın nömrəsi",
            dataIndex: "number",
            key: "numberz",
            sorter: (a, b) => a.name.localeCompare(b.name),
            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text, "Maşın aktivdir", "Servisə gedəcək"]} />}>
                    {text}
                </Tooltip>
            ),
        },
        {
            title: "Rezerv kodu",
            dataIndex: "age",
            key: "age",
            sorter: (a, b) => a.age - b.age,
            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text, "Kod təsdiqləndi"]} />}>
                    {text}
                </Tooltip>
            ),
        },
        {
            title: "Müştəri məlumatları",
            dataIndex: "name",
            key: "name",
            ellipsis: { showTitle: false },
            render: (text) => (
                <Tooltip title={<TooltipContent messages={[text, "VIP Müştəri", "Ödəniş tamamlandı"]} />}>
                    {text} <IoMdInformationCircle className="fs-24 text_blue" />
                </Tooltip>
            ),
        },
        {
            title: "Tarix",
            dataIndex: "date",
            key: "date",
            width: 50,
            ellipsis: { showTitle: false },
            render: (text) => (
                <>
                    <div className="d-flex justify-content-center">
                        <Tooltip title={<TooltipContent messages={[text, "Sifariş sabahdır", "Tarix dəyişdirildi"]} />}>
                            <IoMdInformationCircle className="fs-24 text_blue" />
                        </Tooltip>
                    </div>
                </>
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
                    2 ed <IoMdInformationCircle className="fs-24 text_blue" />
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
                    <button className="thon_tableButtonDarkBlue">
                        <MdBusinessCenter className="fs-24 me-2" />
                        Rezerv Təhvili
                    </button>
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
                    <button className="thon_tableButtonTransparent">
                        <CiTimer className="fs-24 me-2" />
                        Vaxtini uzat
                    </button>
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
                    <button className="thon_TableButton thon_new me-3" onClick={() => setIsModalRezerv(true)}>
                        <IoIosAddCircle className="fs-24 me-2" />
                        Yeni Rezerv
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

            <AddRezerv
                isOpen={isModalRezerv}
                onClose={() => setIsModalRezerv(false)}
            />

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

export default Rezerv;
