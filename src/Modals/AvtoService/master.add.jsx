import React, { useState } from 'react';
import { Modal, Form, Input, Select, Steps, TimePicker } from 'antd';
const { Step } = Steps;

const AddAvtoServiceModal = ({ open, onCancel }) => {
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
                    <Form.Item label="Ad" name="fullName" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Nömrə" name="phone" rules={[{ required: true }]}>
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
        {
            title: 'Əlavə',
            content: (
                <>
                    <Form.Item label="Qeyd" name="note">
                        <Input.TextArea />
                    </Form.Item>
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

export default AddAvtoServiceModal;
