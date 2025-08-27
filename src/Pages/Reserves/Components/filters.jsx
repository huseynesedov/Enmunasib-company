import React from "react";
import { Select, Input, DatePicker, Row, Col } from "antd";
import dayjs from "dayjs";
import { useFilter } from "@contexts/Rezervs/filters";

const { Option } = Select;
const { RangePicker } = DatePicker;

const Filters = () => {
    const {
        selectedStatus,
        setSelectedStatus,
        selectedType,
        setSelectedType,
        inputValue,
        setInputValue,
        startDate,
        handleStartDateChange,
        endDate,
        handleEndDateChange,
    } = useFilter();

    // Əgər startDate / endDate stringdirsə dayjs-ə çevir
    const rangeValue = [
        startDate ? dayjs(startDate) : null,
        endDate ? dayjs(endDate) : null,
    ];

    return (
        <Row gutter={16} align="middle">
            {/* Status Dropdown */}
            {/* Input */}
            <Col>
                <Input
                    placeholder="Rezerv Kodu"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    style={{ width: 200 }}
                />
            </Col>

            <Col>
                <Select
                    placeholder="Status seç"
                    style={{ width: 150 }}
                    value={selectedStatus}
                    onChange={setSelectedStatus}
                    allowClear
                >
                    <Option value="hamisi">Hamısı</Option>
                    <Option value="secenek1">Seçenek 1</Option>
                    <Option value="secenek2">Seçenek 2</Option>
                    <Option value="secenek3">Seçenek 3</Option>
                    <Option value="secenek4">Seçenek 4</Option>
                </Select>
            </Col>

            {/* Type Dropdown */}
            <Col>
                <Select
                    placeholder="Tip seç"
                    style={{ width: 150 }}
                    value={selectedType}
                    onChange={setSelectedType}
                    allowClear
                >
                    <Option value="hamisi">Hamısı</Option>
                    <Option value="secenek1">Seçenek 1</Option>
                    <Option value="secenek2">Seçenek 2</Option>
                    <Option value="secenek3">Seçenek 3</Option>
                    <Option value="secenek4">Seçenek 4</Option>
                </Select>
            </Col>



            {/* Date Range */}
            <Col>
                <RangePicker
                    showTime
                    value={rangeValue} // dayjs obyektləri
                    onChange={([start, end]) => {
                        handleStartDateChange(start ? start.toISOString() : null);
                        handleEndDateChange(end ? end.toISOString() : null);
                    }}
                />
            </Col>
        </Row>
    );
};

export default Filters;
