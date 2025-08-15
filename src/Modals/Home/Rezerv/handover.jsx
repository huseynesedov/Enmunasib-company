import React, { useState } from "react";
import { Modal, Select, Button, Input, Radio, Upload, Checkbox } from "antd";
import { CloseOutlined, InboxOutlined } from "@ant-design/icons";

const { Option } = Select;
const { Dragger } = Upload;

const RezervHandOver = ({ isOpen, onClose }) => {
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
            title="Rezervasiya tehvili"
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
                <div className="custom-dropdown-container hrrr d-flex flex-column justify-content-between">
                    <Select
                        value={selectedCar || undefined}
                        showSearch
                        style={{ width: "100%" }}
                        placeholder="Rezervde olan maşını seçin"
                        onChange={setSelectedCar}
                        className="custom-select-dropdown"
                    >
                        {[...Array(20)].map((_, index) => (
                            <Option key={index} value={`option${index + 1}`}>Seçenek {index + 1}</Option>
                        ))}
                    </Select>

                    <div className="customerInfoMain mt-2 d-flex flex-column">
                        <div className="d-flex flex-wrap w-100 justify-content-between">
                            <p className="fs-21">Müştəri:</p>


                            <div className="d-flex flex-wrap gap-4">
                                <p className="fs-20 d-flex ">Rezerv Kodu:
                                    <p className="fw-600 fs-20 ms-2">12RD56</p>
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
                    </div>
                    <hr />

                    <div className="d-flex flex-column justify-content-between">

                        <Select
                            value={selectedOilCategory || undefined}
                            showSearch
                            placeholder="Maşında problem var?"
                            onChange={setSelectedOilCategory}
                            className="custom-select-dropdown w-100"
                        >

                            <Option key={true} value='true'>Var</Option>
                            <Option key={false} value='false'>Yoxdur</Option>

                        </Select>
                        <div className="mt-3">
                            <Radio.Group >
                                <Radio value={1}>Sürücü</Radio>
                                <Radio value={2}>Müştəri</Radio>
                            </Radio.Group>
                            <Checkbox className="border-left ps-2">Şəkil əlavə et</Checkbox>
                        </div>

                        <div className="d-flex mt-2 align-items-center justify-content-between">

                            <Select value={selectedPaymentType || undefined} showSearch style={{ maxWidth: "338px" }} placeholder="Problem səbəbi" onChange={setSelectedPaymentType} className="custom-select-dropdown w-100">
                                {[...Array(20)].map((_, index) => (
                                    <Option key={index} value={`option${index + 1}`}>Seçenek {index + 1}</Option>
                                ))}
                            </Select>
                            <Input value={currentKm} className="custom-input" onChange={(e) => setCurrentKm(e.target.value)} placeholder="yoxdursa yazın" style={{ maxWidth: "338px" }} />
                        </div>
                        <hr />
                        <div className="d-flex flex-wrap mt-2 justify-content-between">
                            <div>
                                <p>Çöldən görüntləri :</p>
                                <Dragger name="file" style={{ maxWidth: "338px", maxHeight: "129px" }} multiple beforeUpload={() => false}>
                                    <p className="ant-upload-drag-icon"><InboxOutlined /></p>
                                    <p className="ant-upload-text">Dosyaları buraya sürükleyin veya tıklayın</p>
                                    <p className="ant-upload-hint">Tek veya birden fazla dosya yükleyebilirsiniz.</p>
                                </Dragger>
                            </div>
                            <div>
                                <p>Salon görüntüləri :</p>
                                <Dragger name="file" style={{ maxWidth: "338px", maxHeight: "129px" }} multiple beforeUpload={() => false}>
                                    <p className="ant-upload-drag-icon"><InboxOutlined /></p>
                                    <p className="ant-upload-text">Dosyaları buraya sürükleyin veya tıklayın</p>
                                    <p className="ant-upload-hint">Tek veya birden fazla dosya yükleyebilirsiniz.</p>
                                </Dragger>
                            </div>
                        </div>




                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <Input value={currentKm} className="custom-input" onChange={(e) => setCurrentKm(e.target.value)} placeholder="Təhvil km" />

                    </div>
                    <hr />
                    <div className="d-flex flex-wrap justify-content-between">

                        <Input value={totalDept} className="custom-input" onChange={(e) => setTotalDept(e.target.value)} placeholder="Depozit" style={{ maxWidth: "338px" }} />
                        <Input value={totalDept} className="custom-input" onChange={(e) => setTotalDept(e.target.value)} placeholder="Qaytarılan depozit" style={{ maxWidth: "338px" }} />
                    </div>
                  
                </div>
            </div>
        </Modal>
    );
};

export default RezervHandOver;
