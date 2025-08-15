import React, { useState } from "react";
import { Modal, Select, Button, Input, Radio, Upload } from "antd";
import { CloseOutlined, InboxOutlined } from "@ant-design/icons";

const { Option } = Select;
const { Dragger } = Upload;

const OilRepairSend = ({ isOpen, onClose }) => {
    const [selectedCar, setSelectedCar] = useState('');
    const [selectedOilCategory, setSelectedOilCategory] = useState('');
    const [selectedMaster, setSelectedMaster] = useState('');
    const [selectedCarService, setSelectedCarService] = useState('');
    const [selectedPaymentType, setSelectedPaymentType] = useState('');

    const [oilFirmName, setOilFirmName] = useState('');
    const [oilType, setOilType] = useState('');
    const [currentKm, setCurrentKm] = useState('');
    const [warrantyKm, setWarrantyKm] = useState('');
    const [totalPrice, setTotalPrice] = useState('');
    const [totalDept, setTotalDept] = useState('');
    const [paymentType, setPaymentType] = useState(true);
    const [loading, setLoading] = useState(false);

    const isButtonDisabled = !selectedCar || !oilFirmName || !oilType || !currentKm || !warrantyKm || !totalPrice || !selectedOilCategory || !selectedMaster || !selectedCarService || !selectedPaymentType;
  
    const handleSave = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSelectedCar('');
            setSelectedOilCategory('');
            setOilFirmName('');
            setOilType('');
            setCurrentKm('');
            setWarrantyKm('');
            setPaymentType(true);
            onClose();
        }, 2000);
    };

    return (
        <Modal
            title="Yağ dəyişiminə göndər"
            open={isOpen}
            onCancel={onClose}
            footer={[
                <Button key="save" type="primary" onClick={handleSave} loading={loading} disabled={!isButtonDisabled}>
                    Kaydet
                </Button>
            ]}
            centered
            width="90%"
            maskClosable={false}
            style={{ maxWidth: "777px" }}
            closeIcon={<CloseOutlined onClick={onClose} />}
        >
            <div className="modal-content mt-4">
                <div className="custom-dropdown-container d-flex flex-column justify-content-between">
                    <Select
                        value={selectedCar || undefined}
                        showSearch
                        style={{ width: "100%" }}
                        placeholder="Maşın seçin"
                        onChange={setSelectedCar}
                        className="custom-select-dropdown"
                    >
                        {[...Array(20)].map((_, index) => (
                            <Option key={index} value={`option${index + 1}`}>Seçenek {index + 1}</Option>
                        ))}
                    </Select>
                    <hr />
                    <Input value={oilFirmName}  className="custom-input" onChange={(e) => setOilFirmName(e.target.value)} placeholder="Yağ firmasının adı..." />
        
                    <div className="d-flex flex-column justify-content-between mt-3">
                        <Input  className="custom-input" value={oilType} onChange={(e) => setOilType(e.target.value)} placeholder="Növü" />
                        <Select
                            value={selectedOilCategory || undefined}
                            showSearch
                            placeholder="Kateqoriya"
                            onChange={setSelectedOilCategory}
                            className="custom-select-dropdown mt-3 w-100"
                        >
                            {[...Array(20)].map((_, index) => (
                                <Option key={index} value={`option${index + 1}`}>Seçenek {index + 1}</Option>
                            ))}
                        </Select>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <Input value={currentKm}  className="custom-input" onChange={(e) => setCurrentKm(e.target.value)} placeholder="Hazırki km" style={{ maxWidth: "338px" }} />
                        <Input value={warrantyKm}  className="custom-input" onChange={(e) => setWarrantyKm(e.target.value)} placeholder="Zəmanət km" style={{ maxWidth: "338px" }} />
                    </div>
                    <hr />
                    <div className="d-flex flex-wrap justify-content-between">
                        <Select value={selectedMaster || undefined} showSearch style={{ maxWidth: "338px" }} placeholder="Usta seç" onChange={setSelectedMaster} className="custom-select-dropdown w-100">
                            {[...Array(20)].map((_, index) => (
                                <Option key={index} value={`option${index + 1}`}>Seçenek {index + 1}</Option>
                            ))}
                        </Select>
                        <Select value={selectedCarService || undefined} showSearch style={{ maxWidth: "338px" }} placeholder="Avto servis seç" onChange={setSelectedCarService} className="custom-select-dropdown w-100">
                            {[...Array(20)].map((_, index) => (
                                <Option key={index} value={`option${index + 1}`}>Seçenek {index + 1}</Option>
                            ))}
                        </Select>
                        <Input  value={totalPrice} className="mt-3 custom-input" onChange={(e) => setTotalPrice(e.target.value)} placeholder="Ümnumi məbləğ" />
                        <Radio.Group className="mt-3" onChange={(e) => setPaymentType(e.target.value)}>
                            <Radio value={true}>Tam ödəniş</Radio>
                            <Radio value={false}>Borca yazdır</Radio>
                        </Radio.Group>
                        <Input value={totalDept} className="mt-3 custom-input" onChange={(e) => setTotalDept(e.target.value)} placeholder="Ödənilməli məbləğ" />
                    </div>
                    <hr />
                    <div className="d-flex flex-wrap justify-content-between">
                        <Select value={selectedPaymentType || undefined} showSearch style={{ maxWidth: "338px" }} placeholder="Ödəniş növü" onChange={setSelectedPaymentType} className="custom-select-dropdown w-100">
                            {[...Array(20)].map((_, index) => (
                                <Option key={index} value={`option${index + 1}`}>Seçenek {index + 1}</Option>
                            ))}
                        </Select>
                        <Dragger name="file" style={{ maxWidth: "338px", maxHeight: "129px" }} multiple beforeUpload={() => false}>
                            <p className="ant-upload-drag-icon"><InboxOutlined /></p>
                            <p className="ant-upload-text">Dosyaları buraya sürükleyin veya tıklayın</p>
                            <p className="ant-upload-hint">Tek veya birden fazla dosya yükleyebilirsiniz.</p>
                        </Dragger>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default OilRepairSend;
