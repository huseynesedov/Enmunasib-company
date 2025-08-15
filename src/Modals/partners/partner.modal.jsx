import React, { useState } from "react";
import { Modal, Form, Input, Checkbox, Button, Row, Col } from "antd";

const PartnerModal = ({ isOpen, onClose }) => {
    const [form] = Form.useForm();
    const [showKnownPersons, setShowKnownPersons] = useState(false);
    const [knownPersons, setKnownPersons] = useState([{ name: "", phone: "" }]);

    const handleAddPerson = () => {
        setKnownPersons([...knownPersons, { name: "", phone: "" }]);
    };

    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            onOk={() => form.submit()}
            title="Tərəfdaş Məlumatları"
        >

            <div className="modal-content mt-4">
                <div className="custom-dropdown-container hrrr d-flex flex-column justify-content-between">

                    <Form form={form} layout="vertical">
                        {/* 1-6 inputlar */}
                        <Form.Item label="Adı Soyadı" name="fullname" rules={[{ required: true }]}>
                            <Input placeholder="Adı Soyadı" />
                        </Form.Item>
                        <Form.Item label="Nömrə" name="phone" rules={[{ required: true }]}>
                            <Input placeholder="Nömrə" />
                        </Form.Item>
                        <Form.Item label="Email" name="email" rules={[{ type: "email" },{ required: true }]}>
                            <Input placeholder="Email" />
                        </Form.Item>
                        <Form.Item label="Faiz" name="percent" rules={[{ type: "faiz" },{ required: true }]}>
                            <Input placeholder="Faiz" />
                        </Form.Item>
                        <Form.Item label="Şifrə" name="password" rules={[{ required: true }]}>
                            <Input.Password placeholder="Şifrə" />
                        </Form.Item>
                        <Form.Item
                            label="Yenidən Şifrə"
                            name="confirmPassword"
                            dependencies={["password"]}
                            rules={[
                                { required: true },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue("password") === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error("Şifrələr uyğun deyil"));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password placeholder="Yenidən Şifrə" />
                        </Form.Item>

                        {/* 7-ci hissə */}
                        <Form.Item>
                            <Checkbox
                                checked={showKnownPersons}
                                onChange={(e) => setShowKnownPersons(e.target.checked)}
                            >
                                Tərəfdaşı tanıyan şəxslər
                            </Checkbox>
                        </Form.Item>

                        {showKnownPersons &&
                            knownPersons.map((person, index) => (
                                <Row gutter={8} key={index}>
                                    <Col span={12}>
                                        <Form.Item
                                            label="Adı Soyadı"
                                            name={["knownPersons", index, "name"]}
                                            rules={[{ required: true }]}
                                        >
                                            <Input placeholder="Adı Soyadı" />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            label="Nömrəsi"
                                            name={["knownPersons", index, "phone"]}
                                            rules={[{ required: true }]}
                                        >
                                            <Input placeholder="Nömrəsi" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            ))}

                        {showKnownPersons && (
                            <Button type="dashed" onClick={handleAddPerson} block>
                                Digərini əlavə et
                            </Button>
                        )}
                    </Form>
                </div>
            </div>



        </Modal>
    );
};

export default PartnerModal;
