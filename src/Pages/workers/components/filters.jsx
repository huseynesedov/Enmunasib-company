import React from "react";
import { Select, Input, Space } from "antd";

const { Option } = Select;

const Filters = () => {
  return (
    <Space wrap>
      {/* Status Dropdown */}
      <Select
        defaultValue="Hamısı"
        style={{ width: 160 }}
        placement="topLeft"
      >
        <Option value="Hamısı">Hamısı</Option>
        <Option value="secenek1">Seçenek 1</Option>
        <Option value="secenek2">Seçenek 2</Option>
        <Option value="secenek3">Seçenek 3</Option>
        <Option value="secenek4">Seçenek 4</Option>
      </Select>

      {/* Type Dropdown */}
      <Select
        defaultValue="Hamısı"
        style={{ width: 160 }}
        placement="topLeft"
      >
        <Option value="Hamısı">Hamısı</Option>
        <Option value="tip1">Tip 1</Option>
        <Option value="tip2">Tip 2</Option>
        <Option value="tip3">Tip 3</Option>
        <Option value="tip4">Tip 4</Option>
      </Select>

      {/* Input */}
      <Input
        placeholder="Adı"
        style={{ width: 200 }}
      />
    </Space>
  );
};

export default Filters;
