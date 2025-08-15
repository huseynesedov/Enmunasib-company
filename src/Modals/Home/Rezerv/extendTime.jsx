import React, { useState } from "react";
import { Modal, Select, Button, notification, DatePicker } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const { Option } = Select;
const { RangePicker } = DatePicker;
const ExtendTime = ({ isOpen, onClose }) => {
    const [selectedValue1, setSelectedValue1] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSelectChange = (value) => {
        setSelectedValue1(value);
    };

    const handleSave = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSelectedValue1('');
            onClose();
            setTimeout(() => {
                notification.success({
                    message: "Başarılı İşlem",
                    description: "İşleminiz başarıyla tamamlandı.",
                    placement: "topRight",
                });
            }, 1000);
        }, 2000);
    };

    return (
        <Modal
            title="Rezerv Vaxtı uzat"
            open={isOpen}
            onCancel={onClose}
            footer={[
                <Button
                    key="save"
                    type="primary"
                    onClick={handleSave}
                    loading={loading}
                    disabled={!selectedValue1}
                >
                    Kaydet
                </Button>
            ]}
            centered
            width="90%"
            maskClosable={false}
            style={{ maxWidth: "350px" }}
            closeIcon={<CloseOutlined onClick={onClose} />}
        >
            <div className="modal-content d-flex justify-content-between mt-4">
                <div className="custom-dropdown-container">
                    <Select
                        value={selectedValue1 || undefined}
                        showSearch
                        style={{ width: "100%" }}
                        placeholder="Maşın seçimi"
                        optionFilterProp="children"
                        onChange={handleSelectChange}
                        className="custom-select-dropdown"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().includes(input.toLowerCase())
                        }
                    >
                        {[...Array(20)].map((_, index) => (
                            <Option key={index} value={`option${index + 1}`}>
                                Seçenek {index + 1}
                            </Option>
                        ))}
                    </Select>

                    <hr />

                    <div className="d-flex flex-column gap-2">
                        <p>Hazırki tarix</p>
                        <RangePicker disabled className="w-100" format="DD/MM/YYYY" />
                        <div className="d-flex justify-content-between">

                            <p className="d-flex text-danger">Günlük:
                                <div className="text-black ms-1">50 AZN</div>
                            </p>
                            <p className="d-flex text-danger">3 gün:
                                <div className="text-black ms-1">150 AZN</div>
                            </p>
                        </div>
                    </div>
                    <hr />

                    <div className="d-flex flex-column gap-2">
                        <p>Dəyişim ediləcək tarix</p>
                        <RangePicker className="w-100" format="DD/MM/YYYY" />

                        <div className="d-flex justify-content-between">

                            <p className="d-flex text-danger">Günlük:
                                <div className="text-black ms-1">50 AZN</div>
                            </p>
                            <p className="d-flex text-danger">2 gün:
                                <div className="text-black ms-1">100 AZN</div>
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Modal>
    );
};

export default ExtendTime;
