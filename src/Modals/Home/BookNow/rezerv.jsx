import React, { useState } from "react";
import { Modal, Select, Button, Input, DatePicker, Badge } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const { Option } = Select;
const { RangePicker } = DatePicker;

const AddRezerv = ({ isOpen, onClose }) => {
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
            title="Rezerv elave et"
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

                    {/* Maşın seçimi */}
                    <Select
                        value={selectedCar || undefined}
                        showSearch
                        style={{ width: "100%" }}
                        placeholder="Maşın seçimi"
                        onChange={setSelectedCar}
                        className="custom-select-dropdown"
                    >
                        {[...Array(20)].map((_, index) => (
                            <Option key={index} value={`option${index + 1}`}>Seçenek {index + 1}</Option>
                        ))}
                    </Select>
                    <hr />

                    {/* Müştəri - İstifadəci */}
                    <div className="d-flex flex-column gap-3">



                        <Badge.Ribbon text="Tezliklə" color="orange">
                            <div style={{ pointerEvents: 'none', opacity: 0.6 }}>
                                <Select
                                    value={selectedCar || undefined}
                                    showSearch
                                    style={{ width: "100%" }}
                                    placeholder="Müştəri seçimi"
                                    onChange={setSelectedCar}
                                    className="custom-select-dropdown"
                                >
                                    {[...Array(20)].map((_, index) => (
                                        <Option key={index} value={`option${index + 1}`}>
                                            Seçenek {index + 1}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                        </Badge.Ribbon>

                        {/* İstifadəci məlumatları */}

                        <div className="d-flex justify-content-between">
                            <Input value={currentKm} className="custom-input" onChange={(e) => setCurrentKm(e.target.value)} placeholder="Ad soyad" style={{ maxWidth: "338px" }} />
                            <Input value={warrantyKm} className="custom-input" onChange={(e) => setWarrantyKm(e.target.value)} placeholder="Mobil nömrə" style={{ maxWidth: "338px" }} />
                        </div>
                        <div className="d-flex justify-content-between">
                            <Input value={currentKm} className="custom-input" onChange={(e) => setCurrentKm(e.target.value)} placeholder="Email" style={{ maxWidth: "338px" }} />
                            <DatePicker className="custom-input w-100" placeholder="Doğum tarixi" style={{ maxWidth: "338px" }} />
                        </div>


                    </div>
                    <hr />

                    {/* Qiymət - Depozit - KM */}

                    <div className="d-flex justify-content-between">

                        <Input value={currentKm} className="custom-input" onChange={(e) => setCurrentKm(e.target.value)} placeholder="Depozit" style={{ maxWidth: "157px" }} />
                        <Input value={warrantyKm} className="custom-input" onChange={(e) => setWarrantyKm(e.target.value)} placeholder="Qiymet" style={{ maxWidth: "157px" }} />
                        <Input value={warrantyKm} className="custom-input" onChange={(e) => setWarrantyKm(e.target.value)} placeholder="Hazırki km" style={{ maxWidth: "338px" }} />

                    </div>
                    <hr />

                    {/* Rezervasiya tarixi */}

                    <div className="d-flex flex-column gap-2">
                        <p>Rezervasiya müddəti :</p>

                        <RangePicker placeholder={['Başlanğıc tarixi', 'Bitiş tarixi']} format="DD.MM.YYYY" />
                    </div>
                    <hr />

                    {/* Xidmət */}


                    {/* Şəxsiyyət vəsiqəsi */}

                    <div className="d-flex flex-column gap-2 justify-content-between">
                        <p>Şəxsiyyət vəsiqəsi :</p>
                        <div className="d-flex justify-content-between">

                            <Input value={currentKm} className="custom-input" onChange={(e) => setCurrentKm(e.target.value)} placeholder="Seriay №" style={{ maxWidth: "157px" }} />
                            <Input value={warrantyKm} className="custom-input" onChange={(e) => setWarrantyKm(e.target.value)} placeholder="Fin kod" style={{ maxWidth: "157px" }} />
                            <DatePicker className="custom-input w-100" placeholder="Etibarlıq tarixi" style={{ maxWidth: "338px" }} />
                        </div>
                    </div>
                    <hr />

                    {/* Sürücülük vəsiqəsi */}

                    <div className="d-flex flex-column gap-2 justify-content-between">
                        <p>Sürücülük vəsiqəsi :</p>
                        <div className="d-flex justify-content-between">

                            <Input value={currentKm} className="custom-input" onChange={(e) => setCurrentKm(e.target.value)} placeholder="Seriay №" style={{ maxWidth: "157px" }} />
                            <Input value={warrantyKm} className="custom-input" onChange={(e) => setWarrantyKm(e.target.value)} placeholder="Fin kod" style={{ maxWidth: "157px" }} />
                            <DatePicker className="custom-input w-100" placeholder="Verilmə tarixi" style={{ maxWidth: "157px" }} />
                            <DatePicker className="custom-input w-100" placeholder="Etibarlıq tarixi" style={{ maxWidth: "157px" }} />
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex flex-column gap-2">
                        <p>Xidmət lazımdırsa :</p>

                        <Select
                            value={selectedCar || undefined}
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Seçin"
                            onChange={setSelectedCar}
                            className="custom-select-dropdown"
                        >
                            {[...Array(20)].map((_, index) => (
                                <Option key={index} value={`option${index + 1}`}>Seçenek {index + 1}</Option>
                            ))}
                        </Select>
                    </div>
                    <hr />

                    {/* Sürücü */}

                    <Badge.Ribbon text="Tezliklə" color="orange" style={{margin: "13px 0px"}}>
                        <div style={{ pointerEvents: 'none', opacity: 0.6 }}>
                            <div className="d-flex flex-column gap-2">
                                <p>Sürücü lazımdırsa :</p>

                                <Select
                                    value={selectedCar || undefined}
                                    showSearch
                                    style={{ width: "100%" }}
                                    placeholder="Seçin"
                                    onChange={setSelectedCar}
                                    className="custom-select-dropdown"
                                >
                                    {[...Array(20)].map((_, index) => (
                                        <Option key={index} value={`option${index + 1}`}>
                                            Seçenek {index + 1}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                    </Badge.Ribbon>


                </div>
            </div>
        </Modal>
    );
};

export default AddRezerv;
