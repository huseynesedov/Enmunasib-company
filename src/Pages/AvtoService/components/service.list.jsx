import React from 'react';
import { Table, Tag } from 'antd';
import { Content } from 'antd/es/layout/layout';

const AvtoServiceList = () => {
    const columns = [
        { title: 'Ad', dataIndex: 'fullName', key: 'fullName' },
        { title: 'Nömrə', dataIndex: 'phone', key: 'phone' },
        { title: 'İxtisas', dataIndex: 'specialty', key: 'specialty' },
        { title: 'Ünvan', dataIndex: 'address', key: 'address' },
        { title: 'İş günləri', dataIndex: 'workDays', key: 'workDays' },
        { title: 'İş saatı', dataIndex: 'workHours', key: 'workHours' },
        { title: 'Ödənilmiş məbləğ', dataIndex: 'paidAmount', key: 'paidAmount' },
    ];

    const data = [
        {
            fullName: 'Hybrid Auto Service',
            phone: '+994501234567',
            specialty: 'Elektrik',
            address: 'Bakı, Nizami küç.',
            workDays: 'B.e - C.a',
            workHours: '09:00-18:00',
            paidAmount: 200,
        }
    ];

    return (
        <>
            <Content>

                <Table
                className='mt-3'
                    columns={columns}
                    dataSource={data}
                    rowKey="id"
                    scroll={{ x: true }}
                />
            </Content>

        </>
    )
};

export default AvtoServiceList;
