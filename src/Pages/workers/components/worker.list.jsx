import React, { useState } from "react";
import { Table, Tooltip, Modal, Button, Drawer } from "antd";
import { GrEdit } from "react-icons/gr";
import { FilterOutlined, StopOutlined } from "@ant-design/icons";
import Filters from "./filters";

// Tooltip content component
const TooltipContent = ({ messages }) => (
  <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
    {messages.map((msg, index) => (
      <li key={index} style={{ fontSize: "14px", marginBottom: "4px" }}>
        {msg}
      </li>
    ))}
  </ul>
);

const WorkersList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    {
      title: "Ad Soyad",
      dataIndex: "name",
      key: "name",
      ellipsis: { showTitle: false },
      render: (text) => (
        <Tooltip title={<TooltipContent messages={[text]} />}>{text}</Tooltip>
      ),
    },
    {
      title: "Nömrə",
      dataIndex: "number",
      key: "number",
      ellipsis: { showTitle: false },
      render: (text) => (
        <Tooltip title={<TooltipContent messages={[text]} />}>{text}</Tooltip>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ellipsis: { showTitle: false },
      render: (text) => (
        <Tooltip title={<TooltipContent messages={[text]} />}>{text}</Tooltip>
      ),
    },
    {
      title: "Vəzifə",
      dataIndex: "position",
      key: "position",
      ellipsis: { showTitle: false },
      render: (text) => (
        <Tooltip title={<TooltipContent messages={[text]} />}>{text}</Tooltip>
      ),
    },
    {
      title: "Maaş tarixi (ay)",
      dataIndex: "salaryhistory",
      key: "salaryhistory",
      render: (text) => (
        <div className="d-flex justify-content-center">
          <Tooltip title={<TooltipContent messages={[text]} />}>{text}</Tooltip>
        </div>
      ),
    },
    {
      title: "Aylıq İcazə sayları",
      dataIndex: "monthly_leave",
      key: "monthly_leave",
      width: 100,
      render: (text) => (
        <div className="d-flex justify-content-center">
          <Tooltip title={<TooltipContent messages={[text]} />}>{text}</Tooltip>
        </div>
      ),
    },
    {
      title: "İşə alınma tarixi",
      dataIndex: "hiring_date",
      key: "hiring_date",
      width: 120,
      render: (text) => (
        <div className="d-flex justify-content-center">
          <Tooltip title={<TooltipContent messages={[text]} />}>{text}</Tooltip>
        </div>
      ),
    },
    {
      title: "İşdən çıxma tarixi",
      dataIndex: "hiring_date2",
      key: "hiring_date2",
      width: 120,
      render: (text) => (
        <div className="d-flex justify-content-center">
          <Tooltip title={<TooltipContent messages={[text]} />}>{text}</Tooltip>
        </div>
      ),
    },
    {
      title: "",
      key: "edit",
      width: 80,
      render: () => (
        <div className="d-flex justify-content-center">
          <button className="thon_tableButtonTransparentYellow">
            <GrEdit className="fs-24" />
          </button>
        </div>
      ),
    },
    {
      title: "",
      key: "fire",
      width: 140,
      render: () => (
        <button className="thon_tableButtonGray gap-2 d-flex align-items-center">
          <StopOutlined className="fs-20" />
          İşdən çıxart
        </button>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      number: "+994-50-987-65-43",
      name: "Hüseyn Əsədov",
      email: "huseyn@example.com",
      position: "HR Menecer",
      salaryhistory: "İyul",
      monthly_leave: 2,
      hiring_date: "2023-01-10",
      hiring_date2: "-",
    },
    {
      key: "2",
      number: "+994-50-123-45-67",
      name: "Elvin Məmmədov",
      email: "elvin@example.com",
      position: "Işci",
      salaryhistory: "Avqust",
      monthly_leave: 1,
      hiring_date: "2022-11-05",
      hiring_date2: "-",
    },
  ];

  return (
    <>
      {/* Mobil: Filtre butonu */}
      <div className="d-md-none mt-3 mb-2">
        <Button
          type="primary"
          icon={<FilterOutlined />}
          onClick={() => setIsModalOpen(true)}
        >
          Filtrlər
        </Button>
      </div>

      {/* Masaüstü: Filtreler */}
      <div className="col mt-3 d-none d-md-flex flex-wrap align-items-center">
        <Filters />
      </div>


<Drawer
  placement="bottom"
  title="Filtrlər"
  open={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  height="auto"
>
  <Filters />
</Drawer>


      {/* Cədvəl */}
      <div className="table-responsive-wrapper mt-4">
        <Table
          columns={columns}
          dataSource={data}
          bordered
          locale={{ emptyText: "Rezervdə maşın yoxdur!" }}
          scroll={{ x: true }}
        />
      </div>
    </>
  );
};

export default WorkersList;
