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

const SendForRepair = ({ isOpen, onClose }) => {
  const [current, setCurrent] = useState(0);

  const [selectedCar, setSelectedCar] = useState("");
  const [selectedMaster, setSelectedMaster] = useState("");
  const [selectedCarService, setSelectedCarService] = useState("");
  const [selectedPaymentType, setSelectedPaymentType] = useState("");

  const [totalPrice, setTotalPrice] = useState("");
  const [totalDept, setTotalDept] = useState("");
  const [paymentType, setPaymentType] = useState(true);
  const [oilDetails, setOilDetails] = useState([{ name: "", price: "" }]);

  const [loading, setLoading] = useState(false);

  const handleOilDetailChange = (index, field, value) => {
    const newDetails = [...oilDetails];
    newDetails[index][field] = value;
    setOilDetails(newDetails);
  };

  const steps = [
    {
      title: "Maşın seçimi",
      content: (
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
      ),
      required: !!selectedCar,
    },
    {
      title: "Detallar",
      content: (
        <div>
          <p>Detal adı:</p>
          {oilDetails.map((item, index) => (
            <div
              key={index}
              className="d-flex justify-content-between flex-wrap mb-2"
            >
              <Input
                value={item.name}
                style={{ maxWidth: "338px", marginBottom: 8 }}
                onChange={(e) =>
                  handleOilDetailChange(index, "name", e.target.value)
                }
                placeholder="Ad"
              />
              <Input
                value={item.price}
                style={{ maxWidth: "338px", marginBottom: 8 }}
                onChange={(e) =>
                  handleOilDetailChange(index, "price", e.target.value)
                }
                placeholder="Qiymət"
              />
            </div>
          ))}
          <Button
            onClick={() =>
              setOilDetails([...oilDetails, { name: "", price: "" }])
            }
          >
            Əlavə et
          </Button>
        </div>
      ),
      required: oilDetails.every((d) => d.name && d.price),
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
      required: !!selectedMaster && !!selectedCarService,
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
      required: !!totalPrice && !!selectedPaymentType,
    },
  ];

  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success("Təmir qeydi uğurla göndərildi 🚀");
      onClose();
      setCurrent(0);
    }, 1500);
  };

  return (
    <Modal
      title="Təmir"
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
          <Button
            type="primary"
            onClick={() => next()}
            disabled={!steps[current].required}
          >
            Növbəti
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            loading={loading}
            onClick={handleSave}
            disabled={!steps[current].required}
          >
            Kaydet
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default SendForRepair;
