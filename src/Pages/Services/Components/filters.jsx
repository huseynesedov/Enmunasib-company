import React from "react";
import { Select, Input, Space } from "antd";
import { useFilter } from "../../../Contexts/Services/filters";

const { Option } = Select;

const Filters = () => {
    const {
        selectedStatus, setSelectedStatus,
        selectedType, setSelectedType,
        inputValue, setInputValue
    } = useFilter();

    return (
        <Space size="middle" wrap>

            {/* Status Dropdown */}
            <Select
                placeholder="Status Seçiniz..."
                value={selectedStatus}
                onChange={setSelectedStatus}
                style={{ minWidth: 150 }}
            >
                {["Hamisi", "Seçenek 1", "Seçenek 2", "Seçenek 3", "Seçenek 4"].map((item) => (
                    <Option key={item} value={item}>
                        {item}
                    </Option>
                ))}
            </Select>
            {/* Input Alanı */}
            <Input
                placeholder="Adı"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{ minWidth: 200 }}
            />
            {/* Type Dropdown */}
            <Select
                placeholder="Type Seçiniz..."
                value={selectedType}
                onChange={setSelectedType}
                style={{ minWidth: 150 }}
            >
                {["Hamisi", "Seçenek 1", "Seçenek 2", "Seçenek 3", "Seçenek 4"].map((item) => (
                    <Option key={item} value={item}>
                        {item}
                    </Option>
                ))}
            </Select>


        </Space>
    );
};

export default Filters;
