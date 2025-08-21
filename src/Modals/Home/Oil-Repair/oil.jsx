import React, { useState } from "react";
import {
  Modal,
  Select,
  Button,
  Input,
  Radio,
  Upload,
  Steps,
  Space,
  message,
} from "antd";
import { CloseOutlined, InboxOutlined } from "@ant-design/icons";

const { Option } = Select;
const { Dragger } = Upload;
const { Step } = Steps;

const OilRepairSend = ({ isOpen, onClose }) => {
  const [current, setCurrent] = useState(0);

  const [selectedCar, setSelectedCar] = useState("");
  const [oilFirmName, setOilFirmName] = useState("");
  const [oilType, setOilType] = useState("");
  const [selectedOilCategory, setSelectedOilCategory] = useState("");
  const [currentKm, setCurrentKm] = useState("");
  const [warrantyKm, setWarrantyKm] = useState("");
  const [selectedMaster, setSelectedMaster] = useState("");
  const [selectedCarService, setSelectedCarService] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [paymentType, setPaymentType] = useState(true);
  const [totalDept, setTotalDept] = useState("");
  const [selectedPaymentType, setSelectedPaymentType] = useState("");

  const [loading, setLoading] = useState(false);

  const steps = [
    {
      title: "Maşın və Yağ",
      content: (
        <Space direction="vertical" style={{ width: "100%" }}>
          <Select
            value={selectedCar || undefined}
            showSearch
            style={{ width: "100%" }}
            placeholder="Maşın seçin"
            onChange={setSelectedCar}
          >
            {[...Array(5)].map((_, index) => (
              <Option key={index} value={`car${index + 1}`}>
                Maşın {index + 1}
              </Option>
            ))}
          </Select>
          <Input
            value={oilFirmName}
            onChange={(e) => setOilFirmName(e.target.value)}
            placeholder="Yağ firmasının adı..."
          />
          <Input
            value={oilType}
            onChange={(e) => setOilType(e.target.value)}
            placeholder="Növü"
          />
          <Select
            value={selectedOilCategory || undefined}
            showSearch
            placeholder="Kateqoriya"
            onChange={setSelectedOilCategory}
          >
            {[...Array(5)].map((_, index) => (
              <Option key={index} value={`cat${index + 1}`}>
                Kateqoriya {index + 1}
              </Option>
            ))}
          </Select>
        </Space>
      ),
    },
    {
      title: "Kilometraj",
      content: (
        <Space style={{ width: "100%" }}>
          <Input
            value={currentKm}
            onChange={(e) => setCurrentKm(e.target.value)}
            placeholder="Hazırki km"
          />
          <Input
            value={warrantyKm}
            onChange={(e) => setWarrantyKm(e.target.value)}
            placeholder="Zəmanət km"
          />
        </Space>
      ),
    },
    {
      title: "Servis",
      content: (
        <Space direction="vertical" style={{ width: "100%" }}>
          <Select
            value={selectedMaster || undefined}
            placeholder="Usta seç"
            onChange={setSelectedMaster}
          >
            {[...Array(5)].map((_, index) => (
              <Option key={index} value={`master${index + 1}`}>
                Usta {index + 1}
              </Option>
            ))}
          </Select>
          <Select
            value={selectedCarService || undefined}
            placeholder="Avto servis seç"
            onChange={setSelectedCarService}
          >
            {[...Array(5)].map((_, index) => (
              <Option key={index} value={`service${index + 1}`}>
                Servis {index + 1}
              </Option>
            ))}
          </Select>
        </Space>
      ),
    },
    {
      title: "Ödəniş",
      content: (
        <Space direction="vertical" style={{ width: "100%" }}>
          <Input
            value={totalPrice}
            onChange={(e) => setTotalPrice(e.target.value)}
            placeholder="Ümumi məbləğ"
          />
          <Radio.Group
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
          >
            <Radio value={true}>Tam ödəniş</Radio>
            <Radio value={false}>Borca yazdır</Radio>
          </Radio.Group>
          <Input
            value={totalDept}
            onChange={(e) => setTotalDept(e.target.value)}
            placeholder="Ödənilməli məbləğ"
          />
          <Select
            value={selectedPaymentType || undefined}
            placeholder="Ödəniş növü"
            onChange={setSelectedPaymentType}
          >
            {[...Array(5)].map((_, index) => (
              <Option key={index} value={`pay${index + 1}`}>
                Ödəniş {index + 1}
              </Option>
            ))}
          </Select>
          <Dragger
            name="file"
            style={{ maxWidth: "338px", maxHeight: "129px" }}
            multiple
            beforeUpload={() => false}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Dosyaları buraya sürükleyin və ya klikləyin
            </p>
          </Dragger>
        </Space>
      ),
    },
  ];

  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success("Məlumat uğurla göndərildi 🚀");
      onClose();
      setCurrent(0);
    }, 1500);
  };

  return (
    <Modal
      title="Yağ dəyişiminə göndər"
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      width="90%"
      maskClosable={false}
      style={{ maxWidth: "777px" }}
      closeIcon={<CloseOutlined onClick={onClose} />}
    >
      <Steps current={current} className="mb-6">
        {steps.map((item, index) => (
          <Step key={index} title={item.title} />
        ))}
      </Steps>

      <div style={{ marginTop: 24 }}>{steps[current].content}</div>

      <div style={{ marginTop: 24, textAlign: "right" }}>
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Geri
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Növbəti
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" loading={loading} onClick={handleSave}>
            Kaydet
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default OilRepairSend;
