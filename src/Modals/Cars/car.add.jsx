import React from "react";
import { Modal, Form, Input, Select, Row, Col, Checkbox, Button, Badge } from "antd";

const { Option } = Select;

const CarrAddModal = ({ visible, onCancel, onSubmit }) => {
    return (
        <>

            <Modal
                title="Maşın Əlavə Et"
                open={visible}
                onCancel={onCancel}
                footer={[
                    <Button key="back" onClick={onCancel}>
                        Ləğv et
                    </Button>,
                    <Button key="submit" type="primary" onClick={onSubmit}>
                        Yadda saxla
                    </Button>
                ]}
                centered
                width="90%"
                maskClosable={false}
                style={{ maxWidth: "777px" }}
            >
                <div className="modal-content mt-4">
                    <div className="custom-dropdown-container d-flex flex-column justify-content-between">
                        <Form layout="vertical">
                            {/* 1) Brend ve Model */}
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item label="Brend" name="brand">
                                        <Select placeholder="Brend seçin">
                                            <Option value="bmw">BMW</Option>
                                            <Option value="mercedes">Mercedes</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Model" name="model">
                                        <Select placeholder="Model seçin">
                                            <Option value="x5">X5</Option>
                                            <Option value="c200">C200</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <hr />

                            {/* 2) Maşın ili, Ban növü, Kategoriyası, Ötürücü */}
                            <Row gutter={16}>
                                <Col span={6}>
                                    <Form.Item label="Maşın ili" name="year">
                                        <Select placeholder="İl seçin">
                                            <Option value="2020">2020</Option>
                                            <Option value="2021">2021</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item label="Ban növü" name="bodyType">
                                        <Select placeholder="Növ seçin">
                                            <Option value="sedan">Sedan</Option>
                                            <Option value="suv">SUV</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item label="Kategoriyası" name="category">
                                        <Select placeholder="Kategoriya seçin">
                                            <Option value="premium">Premium</Option>
                                            <Option value="standard">Standard</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item label="Ötürücü" name="transmission">
                                        <Select placeholder="Seçin">
                                            <Option value="automatic">Avtomatik</Option>
                                            <Option value="manual">Manual</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <hr />

                            {/* 3) Baqaj həcmi, Oturacaq, Yanacaq */}
                            <Row gutter={16}>
                                <Col span={8}>
                                    <Form.Item label="Baqaj həcmi" name="trunk">
                                        <Select placeholder="Seçin">
                                            <Option value="small">Kiçik</Option>
                                            <Option value="large">Böyük</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="Oturacaq" name="seats">
                                        <Select placeholder="Seçin">
                                            <Option value="4">4</Option>
                                            <Option value="5">5</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="Yanacaq" name="fuel">
                                        <Select placeholder="Yanacaq növü">
                                            <Option value="petrol">Benzin</Option>
                                            <Option value="diesel">Dizel</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <hr />

                            {/* 4) Features - Checkbox */}
                            <Form.Item label="Əlavə Xüsusiyyətlər" name="features">
                                <Checkbox.Group>
                                    <Row>
                                        {["Kondisioner", "Airbag", "Parking", "Bluetooth"].map((item) => (
                                            <Col key={item}>
                                                <Checkbox value={item}>{item}</Checkbox>
                                            </Col>
                                        ))}
                                    </Row>
                                </Checkbox.Group>
                            </Form.Item>

                            <hr />

                            {/* 5) Depozit ve Qiymet */}
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item label="Depozit" name="deposit">
                                        <Input placeholder="Depozit" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Qiymət" name="price">
                                        <Input placeholder="Qiymət" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <hr />

                            {/* 6) Bölge, Rayon, Küçe, Metro */}
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item label="Bölge" name="region">
                                        <Select placeholder="Bölge seçin">
                                            <Option value="baku">Bakı</Option>
                                            <Option value="ganca">Gəncə</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Rayon" name="district">
                                        <Select placeholder="Rayon seçin">
                                            <Option value="nizami">Nizami</Option>
                                            <Option value="nasimi">Nəsimi</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item label="Küçə" name="street">
                                        <Select placeholder="Küçə seçin">
                                            <Option value="abc">ABC</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Metro" name="metro">
                                        <Select placeholder="Metro seçin">
                                            <Option value="28May">28 May</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <hr />

                            {/* 7) Xidmətlər */}
                            <Form.Item label="Xidmətlər" name="services">
                                <Select placeholder="Seçin">
                                    <Option value="cleaning">Təmizlik</Option>
                                    <Option value="delivery">Çatdırılma</Option>
                                </Select>
                            </Form.Item>

                            <hr />

                            {/* 8) min yaş / max yaş */}
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item label="Min yaş" name="minAge">
                                        <Select placeholder="Min yaş">
                                            <Option value={18}>18</Option>
                                            <Option value={21}>21</Option>
                                        </Select>
                                    </Form.Item>

                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Max yaş" name="maxAge">
                                        <Select placeholder="Max yaş">
                                            <Option value={60}>60</Option>
                                            <Option value={70}>70</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <hr />

                            {/* 9) min km / max km */}
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item label="Min km" name="minKm">
                                        <Select placeholder="Min km">
                                            <Option value={0}>0</Option>
                                            <Option value={5000}>5000</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Max km" name="maxKm">
                                        <Select placeholder="Max km">
                                            <Option value={50000}>50000</Option>
                                            <Option value={100000}>100000</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <hr />

                            {/* 10) Hazırki km / Zəmanət km */}
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item label="Hazırki km" name="currentKm">
                                        <Input placeholder="Hazırki km" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Zəmanət km" name="warrantyKm">
                                        <Input placeholder="Zəmanət km" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <hr />

                            <Row gutter={16}>
                                <div className="d-flex align-items-end w-100">
                                    <Col span={12}>
                                        <Form.Item label="Düzgün seçimlər edərək sizə əlavə gəlir gətirə bilər !" name="features">
                                            <Checkbox.Group>
                                                <Row>
                                                    {["Rent A Car", "Toy maşını", "Transfer"].map((item) => (
                                                        <Col key={item}>
                                                            <Checkbox value={item}>{item}</Checkbox>
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Checkbox.Group>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item name="features">
                                            <Checkbox.Group>
                                                <Row>
                                                    {["Sayıtda görsənsin", "Sistemdə görsənsin"].map((item) => (
                                                        <Col key={item}>
                                                            <Checkbox value={item}>{item}</Checkbox>
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Checkbox.Group>
                                        </Form.Item>
                                    </Col>
                                </div>
                            </Row>

                            <hr />
                            {/* 7) Xidmətlər */}
                            <Form.Item label="Tərəfdaş seçimi" name="partner">
                                <Select placeholder="Seçin">
                                    <Option value="cleaning">Hüseyn Əsədov</Option>
                                    <Option value="delivery">Namiq Balayev</Option>
                                </Select>
                            </Form.Item>

                            <Badge.Ribbon text="Tezliklə" color="orange" style={{ margin: '11px 0px' }}>
                                <div style={{ pointerEvents: 'none', opacity: 0.6 }}>
                                    <Form.Item label="Youtube link:" name="youtubeLink">
                                        <Input placeholder="...." />
                                    </Form.Item>
                                </div>
                            </Badge.Ribbon>


                        </Form>
                    </div>
                </div>

            </Modal>

        </>
    );
};

export default CarrAddModal;
