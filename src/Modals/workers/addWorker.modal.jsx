import React, { useState } from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  Steps,
  Checkbox,
  Button,
  Upload,
} from "antd";
import { UploadOutlined, ReloadOutlined } from "@ant-design/icons";

const { Option } = Select;

const AddWorkerModal = ({ open, onCancel, onSubmit }) => {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);

  // Drop-down data
  const positions = ["Satışçı", "Mühasib", "Menecer"];
  const salaryDates = ["Hər ayın 1-i", "Hər ayın 15-i", "Hər ayın sonu"];
  const leaveLimits = ["5 gün", "10 gün", "15 gün"];

  // Permissions grouped
  const permissionGroups = [
    {
      module: "Ümumi Hesabatlar",
      actions: ["Görmək"],
    },
    {
      module: "Satış",
      actions: ["Görmək", "Əlavə Etmək", "Redaktə Etmək", "Silmək"],
    },
    {
      module: "İşçilər",
      actions: ["Görmək", "Əlavə Etmək", "Redaktə Etmək", "Silmək"],
    },
    {
      module: "Müştərilər",
      actions: ["Görmək", "Əlavə Etmək", "Redaktə Etmək", "Silmək"],
    },
    {
      module: "Maliyyə",
      actions: ["Görmək", "Əlavə Etmək", "Redaktə Etmək", "Silmək"],
    },
  ];

  // Password generator
  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let pwd = "";
    for (let i = 0; i < 10; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    form.setFieldsValue({ password: pwd, confirmPassword: pwd });
  };

  const steps = [
    {
      title: "Əsas Məlumatlar",
      content: (
        <>
          <Form.Item
            label="Ad Soyad"
            name="fullName"
            rules={[{ required: true, message: "Ad Soyad daxil edin" }]}
          >
            <Input placeholder="Ad Soyad" />
          </Form.Item>

          <Form.Item
            label="Nömrə"
            name="phone"
            rules={[{ required: true, message: "Telefon nömrəsi daxil edin" }]}
          >
            <Input placeholder="055 xxx xx xx" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ type: "email", message: "Düzgün email daxil edin" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            label="Vəzifə"
            name="position"
            rules={[{ required: true, message: "Vəzifə seçin" }]}
          >
            <Select placeholder="Vəzifə seçin">
              {positions.map((pos) => (
                <Option key={pos} value={pos}>
                  {pos}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Profil Şəkli" name="avatar">
            <Upload listType="picture" maxCount={1}>
              <Button icon={<UploadOutlined />}>Yüklə</Button>
            </Upload>
          </Form.Item>
        </>
      ),
    },
    {
      title: "İş Şərtləri",
      content: (
        <>
          <Form.Item
            label="Maaş Tarixi"
            name="salaryDate"
            rules={[{ required: true, message: "Maaş tarixini seçin" }]}
          >
            <Select placeholder="Maaş tarixini seçin">
              {salaryDates.map((date) => (
                <Option key={date} value={date}>
                  {date}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Aylıq İcazə Limiti"
            name="monthlyLeaveLimit"
            rules={[{ required: true, message: "Limit seçin" }]}
          >
            <Select placeholder="Limit seçin">
              {leaveLimits.map((limit) => (
                <Option key={limit} value={limit}>
                  {limit}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Şifrə"
            name="password"
            rules={[{ required: true, message: "Şifrə daxil edin" }]}
          >
            <Input.Password placeholder="Şifrə" />
          </Form.Item>

          <Form.Item
            label="Yenidən Şifrə"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Təkrar şifrə daxil edin" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Şifrələr uyğun deyil!");
                },
              }),
            ]}
          >
            <Input.Password placeholder="Yenidən şifrə" />
          </Form.Item>

          <Button
            icon={<ReloadOutlined />}
            onClick={generatePassword}
            style={{ marginBottom: 16 }}
          >
            Şifrə Yarat
          </Button>
        </>
      ),
    },
    {
      title: "Səhifə İcazələri",
      content: (
        <>
          <Form.Item name="permissions">
            {permissionGroups.map((group) => (
              <div key={group.module} style={{ marginBottom: 12 }}>
                <strong>{group.module}</strong>
                <Checkbox.Group
                  options={group.actions.map((a) => `${group.module} - ${a}`)}
                  style={{ display: "block", marginTop: 8 }}
                />
              </div>
            ))}
          </Form.Item>
        </>
      ),
    },
  ];

  const next = () => setCurrentStep(currentStep + 1);
  const prev = () => setCurrentStep(currentStep - 1);

  const handleFinish = (values) => {
    onSubmit(values);
    form.resetFields();
    setCurrentStep(0);
  };

  return (
    <Modal
      open={open}
      title="Yeni İşçi Əlavə Et"
      footer={null}
      onCancel={() => {
        onCancel();
        setCurrentStep(0);
        form.resetFields();
      }}
    >
      <Steps current={currentStep} size="small" style={{ marginBottom: 24 }}>
        {steps.map((item) => (
          <Steps.Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <Form form={form} layout="vertical" onFinish={handleFinish}>
        {steps[currentStep].content}

        <div style={{ marginTop: 24 }}>
          {currentStep > 0 && (
            <Button style={{ marginRight: 8 }} onClick={prev}>
              Geri
            </Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button type="primary" onClick={next}>
              İrəli
            </Button>
          )}
          {currentStep === steps.length - 1 && (
            <Button type="primary" htmlType="submit">
              Yadda Saxla
            </Button>
          )}
        </div>
      </Form>
    </Modal>
  );
};

export default AddWorkerModal;
