import React, { useState } from 'react';
import { Modal, Button, Select, Input, Form } from 'antd';

const { Option } = Select;

const WarrantyPackageModal = ({ isOpen, onClose }) => {

     const [form] = Form.useForm();

    const services = ['Əlavə Sürücü','Fərdi qəza sığortası', 'Əlavə Sığorta','təkər şüşə fara zəmanet paketi', 'Təcili yardım xidməti', 'Sürət həddi artırma', 'Sürət həddi azaldılması', 'Yol yardım xidməti', 'Təhlükəsizlik paketi', 'Sığorta xidməti'];
    const types = ['Günlük', 'İcarə görə'];


    return (
        <>
            <Modal
                title="Zəmanət Xidməti"
                open={isOpen}
                onCancel={onClose}
                okText="Yadda saxla"
                cancelText="Ləğv et"

                // closeIcon={<CloseOutlined onClick={onClose} />}
                centered
                width="90%"
                maskClosable={false}
                style={{ maxWidth: "777px" }}
            >
                <Form form={form} layout="vertical">
                    {/* Xidmət seçimi */}
                    <Form.Item
                        name="service"
                        label="Xidmət"
                        rules={[{ required: true, message: 'Xidmət seçin!' }]}
                    >
                        <Select placeholder="Xidmət seçin">
                            {services.map((s) => (
                                <Option key={s} value={s}>{s}</Option>
                            ))}
                        </Select>
                    </Form.Item>

                    {/* Növ seçimi */}
                    <Form.Item
                        name="type"
                        label="Növ"
                        rules={[{ required: true, message: 'Növ seçin!' }]}
                    >
                        <Select placeholder="Növ seçin">
                            {types.map((t) => (
                                <Option key={t} value={t}>{t}</Option>
                            ))}
                        </Select>
                    </Form.Item>

                    {/* Qiymət input */}
                    <Form.Item
                        name="price"
                        label="Qiymət"
                        rules={[{ required: true, message: 'Qiyməti daxil edin!' }]}
                    >
                        <Input type="number" placeholder="Qiyməti daxil edin" />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default WarrantyPackageModal
