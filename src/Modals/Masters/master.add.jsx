import React, { useState } from 'react';
import { Modal, Form, Input, InputNumber, Select, Steps, TimePicker, DatePicker } from 'antd';
const { Step } = Steps;

const AddMasterModal = ({ open, onCancel }) => {
    const [form] = Form.useForm();
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent(current + 1);
    const prev = () => setCurrent(current - 1);

    const handleOk = () => {
        form.validateFields().then(values => {
            console.log("Master Data:", values);
            onCancel();
            form.resetFields();
            setCurrent(0);
        });
    };

    const steps = [
        {
            title: 'Əsas Məlumat',
            content: (
                <>
                    <Form.Item label="Ad Soyad" name="fullName" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Nömrə" name="phone" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email" rules={[{ type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="İxtisas" name="specialty">
                        <Input />
                    </Form.Item>
                </>
            )
        },
        {
            title: 'İş Məlumatı',
            content: (
                <>
                    <Form.Item label="Ünvan" name="address">
                        <Input />
                    </Form.Item>
                    <Form.Item label="İş günləri" name="workDays">
                        <Select mode="multiple" placeholder="B.e, Ç.a, ...">
                            <Select.Option value="Bazar ertəsi">Bazar ertəsi</Select.Option>
                            <Select.Option value="Çərşənbə axşamı">Çərşənbə axşamı</Select.Option>
                            <Select.Option value="Çərşənbə">Çərşənbə</Select.Option>
                            <Select.Option value="Cümə axşamı">Cümə axşamı</Select.Option>
                            <Select.Option value="Cümə">Cümə</Select.Option>
                            <Select.Option value="Şənbə">Şənbə</Select.Option>
                            <Select.Option value="Bazar">Bazar</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="İş saatı" name="workHours">
                        <TimePicker.RangePicker format="HH:mm" />
                    </Form.Item>
                </>
            )
        },
        // {
        //     title: 'Maliyyə',
        //     content: (
        //         <>
        //             <Form.Item label="Ödənilmiş məbləğ" name="paidAmount">
        //                 <InputNumber min={0} style={{ width: '100%' }} />
        //             </Form.Item>
        //             <Form.Item label="Ödəniləcək məbləğ" name="dueAmount">
        //                 <InputNumber min={0} style={{ width: '100%' }} />
        //             </Form.Item>
        //         </>
        //     )
        // },
        // {
        //     title: 'Performans',
        //     content: (
        //         <>
        //             <Form.Item label="Reytinq" name="rating">
        //                 <InputNumber min={0} max={5} step={0.1} style={{ width: '100%' }} />
        //             </Form.Item>
        //             <Form.Item label="Tamamlanma faizi" name="completionRate">
        //                 <InputNumber min={0} max={100} style={{ width: '100%' }} />
        //             </Form.Item>
        //             <Form.Item label="Gecikmə sayı" name="delays">
        //                 <InputNumber min={0} style={{ width: '100%' }} />
        //             </Form.Item>
        //         </>
        //     )
        // },
        {
            title: 'Əlavə',
            content: (
                <>
                    <Form.Item label="Qeyd" name="note">
                        <Input.TextArea />
                    </Form.Item>
                    {/* <Form.Item label="Qeyd tarixi" name="createdAt">
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item> */}
                </>
            )
        }
    ];

    return (
        <Modal
            title="Usta Əlavə Et"
            open={open}
            onCancel={onCancel}
            footer={null}
        >
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <Form layout="vertical" form={form} style={{ marginTop: 20 }}>
                {steps[current].content}
            </Form>
            <div style={{ marginTop: 20, textAlign: 'right' }}>
                {current > 0 && <button onClick={prev} className="btn btn-secondary me-2">Geri</button>}
                {current < steps.length - 1 && <button onClick={next} className="btn btn-primary">Növbəti</button>}
                {current === steps.length - 1 && <button onClick={handleOk} className="btn btn-success">Yadda saxla</button>}
            </div>
        </Modal>
    );
};

export default AddMasterModal;
