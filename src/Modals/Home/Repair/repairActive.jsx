import React, { useState } from "react";
import { Modal, Select, Button, notification } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const { Option } = Select;

const RepairActive = ({ isOpen, onClose }) => {
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
            title="Aktiv et"
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
                </div>
            </div>
        </Modal>
    );
};

export default RepairActive;
