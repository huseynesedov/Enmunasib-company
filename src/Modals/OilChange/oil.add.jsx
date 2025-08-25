import React, { useState } from 'react';
import { Modal, Form, Input, Select, Steps, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { Step } = Steps;

const AddOilChange = ({ open, onCancel }) => {
    const [form] = Form.useForm();
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent(current + 1);
    const prev = () => setCurrent(current - 1);

    const handleOk = () => {
        form.validateFields().then(values => {
            console.log("Form Data:", values);
            onCancel();
            form.resetFields();
            setCurrent(0);
        });
    };

    const steps = [
        {
            title: 'Maşın Seçimi',
            content: (
                <Form.Item label="Maşın" name="car" rules={[{ required: true, message: "Maşını seçin!" }]}>
                    <Select placeholder="Maşın seçin">
                        <Select.Option value="bmw">BMW</Select.Option>
                        <Select.Option value="mercedes">Mercedes</Select.Option>
                        <Select.Option value="audi">Audi</Select.Option>
                    </Select>
                </Form.Item>
            )
        },
        {
            title: 'Yağ Məlumatı',
            content: (
                <>
                    <Form.Item label="Adı" name="oilName" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Növü" name="oilType" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Kateqoriya" name="oilCategory">
                        <Input />
                    </Form.Item>
                </>
            )
        },
        {
            title: 'KM Məlumatı',
            content: (
                <>
                    <Form.Item label="Hazırki KM" name="currentKm" rules={[{ required: true }]}>
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item label="Əmanət KM" name="nextKm" rules={[{ required: true }]}>
                        <Input type="number" />
                    </Form.Item>
                </>
            )
        },
        {
            title: 'Usta və Servis',
            content: (
                <>
                    <Form.Item label="Usta" name="master" rules={[{ required: true }]}>
                        <Select placeholder="Usta seçin">
                            <Select.Option value="usta1">Usta 1</Select.Option>
                            <Select.Option value="usta2">Usta 2</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Servis" name="service" rules={[{ required: true }]}>
                        <Select placeholder="Servis seçin">
                            <Select.Option value="servis1">Servis 1</Select.Option>
                            <Select.Option value="servis2">Servis 2</Select.Option>
                        </Select>
                    </Form.Item>
                </>
            )
        },
        {
            title: 'Ödəniş',
            content: (
                <>
                    <Form.Item label="Ödəniş Məbləği" name="amount" rules={[{ required: true }]}>
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item label="Ödəniş Növü" name="paymentType" rules={[{ required: true }]}>
                        <Select placeholder="Seçin">
                            <Select.Option value="cash">Nağd</Select.Option>
                            <Select.Option value="card">Card to Card</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        noStyle
                        shouldUpdate={(prev, cur) => prev.paymentType !== cur.paymentType}
                    >
                        {({ getFieldValue }) =>
                            getFieldValue('paymentType') === 'card' ? (
                                <Form.Item
                                    label="Şəkil Yüklə"
                                    name="receipt"
                                    valuePropName="fileList"
                                    getValueFromEvent={e => (Array.isArray(e) ? e : e && e.fileList)}
                                    rules={[{ required: true, message: "Şəkil yükləyin!" }]}
                                >
                                    <Upload beforeUpload={() => false} listType="picture">
                                        <button className="btn btn-outline-primary">
                                            <UploadOutlined /> Yüklə
                                        </button>
                                    </Upload>
                                </Form.Item>
                            ) : null
                        }
                    </Form.Item>
                </>
            )
        }
    ];

    return (
        <Modal
            title="Yağ Dəyişimi Əlavə Et"
            open={open}
            onCancel={onCancel}
            footer={null}
            width={600}
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
                {current > 0 && (
                    <button onClick={prev} className="btn btn-secondary me-2">
                        Geri
                    </button>
                )}
                {current < steps.length - 1 && (
                    <button onClick={next} className="btn btn-primary">
                        Növbəti
                    </button>
                )}
                {current === steps.length - 1 && (
                    <button onClick={handleOk} className="btn btn-success">
                        Yadda saxla
                    </button>
                )}
            </div>
        </Modal>
    );
};

export default AddOilChange;
