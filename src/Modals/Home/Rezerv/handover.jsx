import React, { useState } from "react";
import {
  Modal,
  Select,
  Button,
  Input,
  Radio,
  Upload,
  Checkbox,
  Steps,
  Form,
  Space,
  Divider,
  message,
} from "antd";
import { CloseOutlined, InboxOutlined } from "@ant-design/icons";

const { Option } = Select;
const { Dragger } = Upload;
const { Step } = Steps;

const RezervHandOver = ({ isOpen, onClose }) => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const [showPhotos, setShowPhotos] = useState(false);
  const [hasProblem, setHasProblem] = useState(undefined); // 'true' | 'false'

  // Hər addım üçün doğrulanacaq sahələrin siyahısı
  const stepFields = [
    ["selectedCar"],
    () =>
      hasProblem === "true"
        ? ["hasProblem", "problemFrom", "problemReason"] // problem varsa bunlar şərt
        : ["hasProblem"], // yoxdursa təkcə seçim kifayətdir
    ["handoverKm", "deposit"],
  ];

  const getFieldsForStep = (idx) =>
    typeof stepFields[idx] === "function" ? stepFields[idx]() : stepFields[idx];

  const next = async () => {
    try {
      await form.validateFields(getFieldsForStep(current));
      setCurrent((c) => c + 1);
    } catch {
      // antd Form avtomatik qırmızı xətaları göstərir
    }
  };

  const prev = () => setCurrent((c) => c - 1);

  const handleSave = async () => {
    try {
      await form.validateFields(); // bütün formu yoxla
      const values = form.getFieldsValue(true);
      console.log("Göndərilən məlumat:", values);
      message.success("Rezerv təhvili uğurla qeydə alındı 🚗");
      form.resetFields();
      setHasProblem(undefined);
      setShowPhotos(false);
      setCurrent(0);
      onClose();
    } catch {
      // xətalar ekranda görünəcək
    }
  };

  return (
    <Modal
      title="Rezervasiya təhvili"
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
        <Step title="Rezerv seçimi" />
        <Step title="Vəziyyət & Şəkillər" />
        <Step title="Təhvil & Depozit" />
      </Steps>

      <Form
        form={form}
        layout="vertical"
        initialValues={{
          hasProblem: undefined,
          problemFrom: undefined,
        }}
      >
        {/* STEP 0 */}
        {current === 0 && (
          <Space direction="vertical" style={{ width: "100%" }}>
            <Form.Item
              name="selectedCar"
              label="Rezervdə olan maşını seçin"
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

            {/* Müştəri məlumat vitrini (statik) */}
            <div className="customerInfoMain">
              <Divider />
              <div className="d-flex flex-wrap w-100 justify-content-between">
                <p className="fs-21">Müştəri:</p>
                <div className="d-flex flex-wrap gap-4">
                  <p className="fs-20 d-flex">
                    Rezerv Kodu:
                    <span className="fw-600 fs-20 ms-2">12RD56</span>
                  </p>
                  <div className="ofis">
                    <div className="ofis-border"></div>
                    Ofis
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap gap-3 mt-2">
                <p className="border-bottom">Huseyn Esedov</p>
                <p className="border-bottom">+99451 760 03 00</p>
                <p className="border-bottom">28-11-2005</p>
                <p className="border-bottom">asadof28@gmail.com</p>
                <p className="border-bottom">Seriya: AA 1234567</p>
                <p className="border-bottom">Fin: 7TUHY4K</p>
              </div>
              <Divider />
            </div>
          </Space>
        )}

        {/* STEP 1 */}
        {current === 1 && (
          <Space direction="vertical" style={{ width: "100%" }}>
            <Form.Item
              name="hasProblem"
              label="Maşında problem var?"
              rules={[{ required: true, message: "Zəhmət olmasa seçim edin" }]}
              hasFeedback
            >
              <Select
                placeholder="Seçin"
                onChange={(val) => setHasProblem(val)}
              >
                <Option value="true">Var</Option>
                <Option value="false">Yoxdur</Option>
              </Select>
            </Form.Item>

            {hasProblem === "true" ? (
              <>
                <Form.Item
                  name="problemFrom"
                  label="Problemli şəxs:"
                  rules={[
                    { required: true, message: "Zəhmət olmasa biri seçin" },
                  ]}
                >
                  <Radio.Group>
                    <Radio value="driver">Sürücü</Radio>
                    <Radio value="customer">Müştəri</Radio>
                  </Radio.Group>
                </Form.Item>

                <Form.Item
                  name="problemReason"
                  label="Problem səbəbi"
                  rules={[
                    { required: true, message: "Problem səbəbini seçin" },
                  ]}
                  hasFeedback
                >
                  <Select placeholder="Problem səbəbi" showSearch>
                    {[...Array(20)].map((_, i) => (
                      <Option key={i} value={`reason${i + 1}`}>
                        Seçenek {i + 1}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </>
            ) : hasProblem === "false" ? (
              <Form.Item
                name="noProblemNote"
                label="Qeyd (yoxdursa yazın)"
                rules={[
                  {
                    required: false,
                  },
                ]}
              >
                <Input placeholder="yoxdursa yazın" />
              </Form.Item>
            ) : null}

            <Space align="center">
              <Checkbox
                checked={showPhotos}
                onChange={(e) => setShowPhotos(e.target.checked)}
              >
                Şəkil əlavə et
              </Checkbox>
            </Space>

            {showPhotos && (
              <div className="d-flex flex-wrap mt-2 justify-content-between">
                <div style={{ maxWidth: 338 }}>
                  <p>Çöldən görüntülər:</p>
                  <Dragger multiple beforeUpload={() => false}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Dosyaları buraya sürükleyin veya tıklayın
                    </p>
                    <p className="ant-upload-hint">
                      Tek veya birden fazla dosya yükleyebilirsiniz.
                    </p>
                  </Dragger>
                </div>
                <div style={{ maxWidth: 338 }}>
                  <p>Salon görüntüləri:</p>
                  <Dragger multiple beforeUpload={() => false}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Dosyaları buraya sürükleyin veya tıklayın
                    </p>
                    <p className="ant-upload-hint">
                      Tek veya birden fazla dosya yükleyebilirsiniz.
                    </p>
                  </Dragger>
                </div>
              </div>
            )}
          </Space>
        )}

        {/* STEP 2 */}
        {current === 2 && (
          <Space direction="vertical" style={{ width: "100%" }}>
            <Form.Item
              name="handoverKm"
              label="Təhvil km"
              rules={[
                { required: true, message: "Təhvil km daxil edin" },
                {
                  pattern: /^\d+$/,
                  message: "Yalnız rəqəm daxil edin",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="Məs: 125000" />
            </Form.Item>

            <Space size="large" wrap>
              <Form.Item
                name="deposit"
                label="Depozit"
                rules={[
                  { required: true, message: "Depoziti daxil edin" },
                  { pattern: /^\d+(\.\d{1,2})?$/, message: "Yanlış məbləğ" },
                ]}
                hasFeedback
              >
                <Input placeholder="Məs: 200" style={{ width: 338 }} />
              </Form.Item>

              <Form.Item
                name="returnedDeposit"
                label="Qaytarılan depozit"
                rules={[
                  { pattern: /^\d+(\.\d{1,2})?$/, message: "Yanlış məbləğ" },
                ]}
                hasFeedback
              >
                <Input placeholder="Məs: 200" style={{ width: 338 }} />
              </Form.Item>
            </Space>
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
        {current < 2 && (
          <Button type="primary" onClick={next}>
            Növbəti
          </Button>
        )}
        {current === 2 && (
          <Button type="primary" onClick={handleSave}>
            Kaydet
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default RezervHandOver;
