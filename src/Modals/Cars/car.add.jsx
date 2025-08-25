import React, { useState } from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  Badge,
  Steps,
} from "antd";

const { Option } = Select;
const { Step } = Steps;

const CarrAddModal = ({ visible, onCancel, onSubmit }) => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: "Brend və Model",
      content: (
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Brend" name="brand">
              <Select placeholder="Brend seçin">
                <Option value="bmw">BMW</Option>
                <Option value="mercedes">Mercedes</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Model" name="model">
              <Select placeholder="Model seçin">
                <Option value="x5">X5</Option>
                <Option value="c200">C200</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
              <Form.Item label="Maşın ili" name="year">
                <Select placeholder="İl seçin">
                  <Option value="2020">2020</Option>
                  <Option value="2021">2021</Option>
                </Select>
              </Form.Item>
            </Col>
        </Row>
      ),
    },
    {
      title: "Texniki məlumat",
      content: (
        <>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item label="Ban növü" name="bodyType">
                <Select placeholder="Növ seçin">
                  <Option value="sedan">Sedan</Option>
                  <Option value="suv">SUV</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Kategoriyası" name="category">
                <Select placeholder="Kategoriya seçin">
                  <Option value="premium">Premium</Option>
                  <Option value="standard">Standard</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Ötürücü" name="transmission">
                <Select placeholder="Seçin">
                  <Option value="automatic">Avtomatik</Option>
                  <Option value="manual">Manual</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </>
      ),
    },
    {
      title: "Əlavə xüsusiyyətlər",
      content: (
        <>
          <Form.Item label="Əlavə Xüsusiyyətlər" name="features">
            <Checkbox.Group>
              <Row>
                {["Kondisioner", "Airbag", "Parking", "Bluetooth"].map((item) => (
                  <Col key={item}>
                    <Checkbox value={item}>{item}</Checkbox>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
          </Form.Item>
        </>
      ),
    },
    {
      title: "Qiymət və Şərtlər",
      content: (
        <>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Depozit" name="deposit">
                <Input placeholder="Depozit" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Qiymət" name="price">
                <Input placeholder="Qiymət" />
              </Form.Item>
            </Col>
          </Row>
        </>
      ),
    },
    {
      title: "Yer və xidmətlər",
      content: (
        <>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item label="Bölge" name="region">
                <Select placeholder="Bölge seçin">
                  <Option value="baku">Bakı</Option>
                  <Option value="ganca">Gəncə</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Metro" name="metro">
                <Select placeholder="Metro seçin">
                  <Option value="28may">28May</Option>
                  <Option value="genclik">Genclik</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Rayon" name="district">
                <Select placeholder="Rayon seçin">
                  <Option value="nizami">Nizami</Option>
                  <Option value="nasimi">Nəsimi</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Küçe" name="street">
                <Select placeholder="Küçe seçin">
                  <Option value="nizami">Samir eliyev 43 </Option>
                  <Option value="nasimi">11 ci bülbüle kücesi</Option>
                </Select>
              </Form.Item>
            </Col>
            
          </Row>

          <Form.Item label="Xidmətlər" name="services">
            <Select placeholder="Seçin">
              <Option value="cleaning">Təmizlik</Option>
              <Option value="delivery">Çatdırılma</Option>
            </Select>
          </Form.Item>
        </>
      ),
    },
    {
      title: "Son addım",
      content: (
        <>
          <Form.Item label="Tərəfdaş seçimi" name="partner">
            <Select placeholder="Seçin">
              <Option value="huseyn">Hüseyn Əsədov</Option>
              <Option value="namiq">Namiq Balayev</Option>
            </Select>
          </Form.Item>

          <Badge.Ribbon text="Tezliklə" color="orange" style={{ margin: "11px 0px" }}>
            <div style={{ pointerEvents: "none", opacity: 0.6 }}>
              <Form.Item label="Youtube link:" name="youtubeLink">
                <Input placeholder="...." />
              </Form.Item>
            </div>
          </Badge.Ribbon>
        </>
      ),
    },
  ];

  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);

  const handleFinish = (values) => {
    console.log("Form data:", values);
    onSubmit(values);
  };

  return (
    <Modal
      title="Maşın Əlavə Et"
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered
      width="90%"
      maskClosable={false}
      style={{ maxWidth: "777px" }}
    >
      <Steps current={current} style={{ marginBottom: 24 }}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <Form form={form} layout="vertical" onFinish={handleFinish}>
        {steps[current].content}

        <div style={{ marginTop: 24, textAlign: "right" }}>
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={prev}>
              Geri
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button type="primary" onClick={next}>
              Növbəti
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" htmlType="submit">
              Yadda saxla
            </Button>
          )}
        </div>
      </Form>
    </Modal>
  );
};

export default CarrAddModal;
