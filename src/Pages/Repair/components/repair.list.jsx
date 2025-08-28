import React from 'react';
import { Table, Tooltip } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { InfoCircleOutlined } from '@ant-design/icons';

const RepairList = () => {
  const columns = [
    { 
      title: "Brend-Model", 
      dataIndex: 'brendModel', 
      key: 'brendModel',
      render: (_, record) => (
        <>
          {record.brendModel}{" "}
          <Tooltip
            title={
              <div>
                <div>Brend: {record.brand}</div>
                <div>Model: {record.model}</div>
                <div>İl: {record.year}</div>
                <div>Ban növü: {record.bodyType}</div>
                <div>Kateqoriya: {record.category}</div>
                <div>Ötürücü: {record.transmission}</div>
                <div>Baqaj həcmi: {record.trunkVolume}</div>
                <div>Oturacaq sayı: {record.seats}</div>
                <div>Yanacaq: {record.fuel}</div>
              </div>
            }
          >
            <InfoCircleOutlined style={{ color: '#1890ff', cursor: 'pointer' }} />
          </Tooltip>
        </>
      )
    },
    { 
      title: "Detal", 
      dataIndex: 'oil', 
      key: 'oil',
      render: (_, record) => (
        <>
          {record.oil}{" "}
          <Tooltip
            title={
              <div>
                <div>Adı: {record.oilName}</div>
                <div>Qiymeti: {record.price}</div>
              </div>
            }
          >
            <InfoCircleOutlined style={{ color: '#1890ff', cursor: 'pointer' }} />
          </Tooltip>
        </>
      )
    },
    { 
      title: "Usta / Servis", 
      dataIndex: 'master_service', 
      key: 'master_service',
      render: (_, record) => (
        <>
          {record.master_service}{" "}
          <Tooltip
            title={
              <div>
                <div>Adı Soyadı: {record.masterName}</div>
                <div>Nömrəsi: {record.masterPhone}</div>
                <div>Email: {record.masterEmail}</div>
                <div>Ünvan: {record.masterAddress}</div>
              </div>
            }
          >
            <InfoCircleOutlined style={{ color: '#1890ff', cursor: 'pointer' }} />
          </Tooltip>
        </>
      )
    },
    { title: 'Məbləğ', dataIndex: 'price', key: 'price' },
  ];

  const data = [
    {
      id: 1,
      brendModel: 'Toyota Prius 20',
      brand: 'Toyota',
      model: 'Prius 20',
      year: '2008',
      bodyType: 'Sedan',
      category: 'Hibrid',
      transmission: 'Avtomat',
      trunkVolume: '450L',
      seats: 5,
      fuel: 'Benzin',

      oil: '5W-30',
      oilName: 'Castrol Magnatec',
      oilType: 'Sintetik',
      oilCategory: 'Premium',

      master_service: 'Hybrid Auto Service',
      masterName: 'Elçin Məmmədov',
      masterPhone: '+994 50 123 45 67',
      masterEmail: 'elcin@example.com',
      masterAddress: 'Bakı, Yasamal',

      km1: '15000',
      km2: '20000',
      price: '250',
    },
    {
      id: 2,
      brendModel: 'Honda Insight',
      brand: 'Honda',
      model: 'Insight',
      year: '2012',
      bodyType: 'Hatchback',
      category: 'Hibrid',
      transmission: 'Avtomat',
      trunkVolume: '400L',
      seats: 5,
      fuel: 'Benzin',

      oil: '0W-20',
      oilName: 'Mobil 1',
      oilType: 'Sintetik',
      oilCategory: 'Standard',

      master_service: 'Honda Service',
      masterName: 'Rəşad Əliyev',
      masterPhone: '+994 55 765 43 21',
      masterEmail: 'reshad@example.com',
      masterAddress: 'Sumqayıt, 9-cu mkr',

      km1: '22000',
      km2: '27000',
      price: '300',
    }
  ];

  return (
    <Content>
      <Table
        className='mt-3'
        columns={columns}
        dataSource={data}
        rowKey="id"
        scroll={{ x: true }}
      />
    </Content>
  )
};

export default RepairList;
