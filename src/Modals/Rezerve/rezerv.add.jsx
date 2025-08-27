import React, { useState } from "react";
import {
  Modal,
  Select,
  Button,
  Input,
  DatePicker,
  Badge,
  Steps,
  Form,
  Space,
  message,
  Divider,
} from "antd";
import { CloseOutlined } from "@ant-design/icons";

const { Option } = Select;
const { RangePicker } = DatePicker;
const { Step } = Steps;

const AddRezerv = ({ isOpen, onClose }) => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);

  // Hər step üçün validasiya olunacaq sahələr
  const stepFields = [
    ["selectedCar"],
    ["fullName", "phone", "birthDate"],
    ["deposit", "price", "km", "dateRange"],
    [
      "idSerial",
      "idFin",
      "idValidDate",
      "driverSerial",
      "driverFin",
      "driverGivenDate",
      "driverValidDate",
    ],
  ];

  const getFieldsForStep = (i) => stepFields[i] || [];

  const next = async () => {
    try {
      await form.validateFields(getFieldsForStep(current));
      setCurrent((c) => c + 1);
    } catch {
      // antd form qırmızı xətaları göstərir
    }
  };

  const prev = () => setCurrent((c) => c - 1);

  const handleSave = async () => {
    try {
      await form.validateFields();
      const values = form.getFieldsValue(true);
      console.log("Rezerv data:", values);
      message.success("Rezervasiya uğurla əlavə olundu ✅");
      form.resetFields();
      setCurrent(0);
      onClose();
    } catch {
      // xətalar formda görünəcək
    }
  };

  return (
    <Modal
      title="Rezerv əlavə et"
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      width="90%"
      maskClosable={false}
      style={{ maxWidth: 777 }}
      closeIcon={<CloseOutlined onClick={onClose} />}
    >
      <Steps current={current} className="mb-4">
        <Step title="Maşın" />
        <Step title="Müştəri" />
        <Step title="Müddət & Qiymət" />
        <Step title="Sənədlər" />
      </Steps>

      <Form form={form} layout="vertical">
        {/* STEP 0: Maşın seçimi */}
        {current === 0 && (
          <Space direction="vertical" style={{ width: "100%" }}>
            <Form.Item
              name="selectedCar"
              label="Maşın seçimi"
              rules={[{ required: true, message: "Zəhmət olmasa maşın seçin" }]}
              hasFeedback
            >
              <Select placeholder="Maşın seçin" showSearch>
                {[...Array(20)].map((_, i) => (
                  <Option key={i} value={`option${i + 1}`}>
                    Seçenek {i + 1}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Space>
        )}

        {/* STEP 1: Müştəri */}
        {current === 1 && (
          <Space direction="vertical" style={{ width: "100%" }}>
            {/* (Tezliklə) Müştəri seçimi */}
            <Badge.Ribbon text="Tezliklə" color="orange">
              <div style={{ pointerEvents: "none", opacity: 0.6 }}>
                <Form.Item label="Müştəri seçimi">
                  <Select placeholder="Müştəri seçimi (yakında)" showSearch>
                    {[...Array(20)].map((_, i) => (
                      <Option key={i} value={`customer${i + 1}`}>
                        Müştəri {i + 1}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
            </Badge.Ribbon>

            <Divider style={{ margin: "8px 0" }} />

            <Space style={{ width: "100%" }} size="large" wrap>
              <Form.Item
                name="fullName"
                label="Ad Soyad"
                rules={[{ required: true, message: "Ad soyad daxil edin" }]}
                hasFeedback
              >
                <Input placeholder="Ad soyad" style={{ width: 338 }} />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Mobil nömrə"
                rules={[
                  { required: true, message: "Nömrə daxil edin" },
                  { pattern: /^[0-9+\s()-]{7,}$/, message: "Yanlış format" },
                ]}
                hasFeedback
              >
                <Input placeholder="+994..." style={{ width: 338 }} />
              </Form.Item>
            </Space>

            <Space style={{ width: "100%" }} size="large" wrap>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ type: "email", message: "Yanlış email" }]}
                hasFeedback
              >
                <Input placeholder="ornek@mail.com" style={{ width: 338 }} />
              </Form.Item>

              <Form.Item
                name="birthDate"
                label="Doğum tarixi"
                rules={[{ required: true, message: "Tarix seçin" }]}
                hasFeedback
              >
                <DatePicker
                  placeholder="Doğum tarixi"
                  style={{ width: 338 }}
                  format="DD.MM.YYYY"
                />
              </Form.Item>
            </Space>
          </Space>
        )}

        {/* STEP 2: Qiymət / Depozit / KM / Müddət */}
        {current === 2 && (
          <Space direction="vertical" style={{ width: "100%" }}>
            <Space style={{ width: "100%" }} size="large" wrap>
              <Form.Item
                name="deposit"
                label="Depozit"
                rules={[
                  { required: true, message: "Depozit daxil edin" },
                  { pattern: /^\d+(\.\d{1,2})?$/, message: "Yanlış məbləğ" },
                ]}
                hasFeedback
              >
                <Input placeholder="Məs: 200" style={{ width: 157 }} />
              </Form.Item>

              <Form.Item
                name="price"
                label="Qiymət"
                rules={[
                  { required: true, message: "Qiymət daxil edin" },
                  { pattern: /^\d+(\.\d{1,2})?$/, message: "Yanlış məbləğ" },
                ]}
                hasFeedback
              >
                <Input placeholder="Məs: 120" style={{ width: 157 }} />
              </Form.Item>

              <Form.Item
                name="km"
                label="Hazırki km"
                rules={[
                  { required: true, message: "KM daxil edin" },
                  { pattern: /^\d+$/, message: "Yalnız rəqəm" },
                ]}
                hasFeedback
              >
                <Input placeholder="Məs: 125000" style={{ width: 338 }} />
              </Form.Item>
            </Space>

            <Form.Item
              name="dateRange"
              label="Rezervasiya müddəti"
              rules={[{ required: true, message: "Müddəti seçin" }]}
              hasFeedback
            >
              <RangePicker
                placeholder={["Başlanğıc tarixi", "Bitiş tarixi"]}
                format="DD.MM.YYYY"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Space>
        )}

        {/* STEP 3: Sənədlər + Xidmətlər */}
        {current === 3 && (
          <Space direction="vertical" style={{ width: "100%" }}>
            {/* Şəxsiyyət vəsiqəsi */}
            <div className="d-flex flex-column gap-2">
              <p>Şəxsiyyət vəsiqəsi :</p>
              <Space size="large" wrap>
                <Form.Item
                  name="idSerial"
                  label="Seriya №"
                  rules={[{ required: true, message: "Seriya № daxil edin" }]}
                  hasFeedback
                >
                  <Input placeholder="AA 1234567" style={{ width: 157 }} />
                </Form.Item>

                <Form.Item
                  name="idFin"
                  label="FIN kod"
                  rules={[{ required: true, message: "FIN kod daxil edin" }]}
                  hasFeedback
                >
                  <Input placeholder="7TUHY4K" style={{ width: 157 }} />
                </Form.Item>

                <Form.Item
                  name="idValidDate"
                  label="Etibarlıq tarixi"
                  rules={[{ required: true, message: "Tarix seçin" }]}
                  hasFeedback
                >
                  <DatePicker
                    placeholder="Etibarlıq tarixi"
                    style={{ width: 338 }}
                    format="DD.MM.YYYY"
                  />
                </Form.Item>
              </Space>
            </div>

            {/* Sürücülük vəsiqəsi */}
            <div className="d-flex flex-column gap-2">
              <p>Sürücülük vəsiqəsi :</p>
              <Space size="large" wrap>
                <Form.Item
                  name="driverSerial"
                  label="Seriya №"
                  rules={[{ required: true, message: "Seriya № daxil edin" }]}
                  hasFeedback
                >
                  <Input style={{ width: 157 }} />
                </Form.Item>

                <Form.Item
                  name="driverFin"
                  label="FIN kod"
                  rules={[{ required: true, message: "FIN kod daxil edin" }]}
                  hasFeedback
                >
                  <Input style={{ width: 157 }} />
                </Form.Item>

                <Form.Item
                  name="driverGivenDate"
                  label="Verilmə tarixi"
                  rules={[{ required: true, message: "Tarix seçin" }]}
                  hasFeedback
                >
                  <DatePicker
                    placeholder="Verilmə tarixi"
                    style={{ width: 157 }}
                    format="DD.MM.YYYY"
                  />
                </Form.Item>

                <Form.Item
                  name="driverValidDate"
                  label="Etibarlıq tarixi"
                  rules={[{ required: true, message: "Tarix seçin" }]}
                  hasFeedback
                >
                  <DatePicker
                    placeholder="Etibarlıq tarixi"
                    style={{ width: 157 }}
                    format="DD.MM.YYYY"
                  />
                </Form.Item>
              </Space>
            </div>

            <Divider />

            {/* Xidmət lazımdırsa */}
            <Form.Item name="serviceNeeded" label="Xidmət lazımdırsa :">
              <Select placeholder="Seçin" showSearch allowClear>
                {[...Array(20)].map((_, i) => (
                  <Option key={i} value={`service${i + 1}`}>
                    Seçenek {i + 1}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            {/* Sürücü lazımdırsa (Tezliklə) */}
            <Badge.Ribbon text="Tezliklə" color="orange" style={{ margin: "8px 0" }}>
              <div style={{ pointerEvents: "none", opacity: 0.6 }}>
                <Form.Item label="Sürücü lazımdırsa :">
                  <Select placeholder="Seçin" showSearch allowClear>
                    {[...Array(20)].map((_, i) => (
                      <Option key={i} value={`driver${i + 1}`}>
                        Seçenek {i + 1}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
            </Badge.Ribbon>
          </Space>
        )}
      </Form>

      {/* Footer controls */}
      <div style={{ marginTop: 24, textAlign: "right" }}>
        {current > 0 && (
          <Button onClick={prev} style={{ marginRight: 8 }}>
            Geri
          </Button>
        )}
        {current < 3 && (
          <Button type="primary" onClick={next}>
            Növbəti
          </Button>
        )}
        {current === 3 && (
          <Button type="primary" onClick={handleSave}>
            Kaydet
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default AddRezerv;
