import { Select, Input, Row, Col } from "antd";

const { Option } = Select;

const FilterBar = ({ selectedValue, setSelectedValue, inputValue, setInputValue }) => {
  return (
    <Row gutter={16} className="mt-3" align="middle">
      <Col>
        <Select
          placeholder="Status"
          style={{ width: 150 }}
          value={selectedValue}
          onChange={(val) => setSelectedValue(val)}
          allowClear
        >
          <Option value="hamisi">Hamısı</Option>
          <Option value="secenek1">Seçenek 1</Option>
          <Option value="secenek2">Seçenek 2</Option>
          <Option value="secenek3">Seçenek 3</Option>
          <Option value="secenek4">Seçenek 4</Option>
        </Select>
      </Col>

      <Col>
        <Input
          placeholder="10-AB-123"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          addonBefore="Nömrə:"
          style={{ width: 200 }}
        />
      </Col>
    </Row>
  );
};

export default FilterBar;
