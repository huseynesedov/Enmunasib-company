import React from 'react';
import { Table, Tag } from 'antd';
import { Content } from 'antd/es/layout/layout';

const MastersList = () => {
    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id', sorter: (a, b) => a.id - b.id },
        { title: 'Ad Soyad', dataIndex: 'fullName', key: 'fullName' },
        { title: 'Nömrə', dataIndex: 'phone', key: 'phone' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'İxtisas', dataIndex: 'specialty', key: 'specialty' },
        { title: 'Ünvan', dataIndex: 'address', key: 'address' },
        { title: 'İş günləri', dataIndex: 'workDays', key: 'workDays' },
        { title: 'İş saatı', dataIndex: 'workHours', key: 'workHours' },
        { title: 'Ödənilmiş məbləğ', dataIndex: 'paidAmount', key: 'paidAmount' },
        { title: 'Ödəniləcək məbləğ', dataIndex: 'dueAmount', key: 'dueAmount' }, 
    ];

    const data = [
        {
            id: 1,
            fullName: 'Elşən Məmmədov',
            phone: '+994501234567',
            email: 'elsan@mail.com',
            specialty: 'Elektrik',
            experience: 5,
            address: 'Bakı',
            workDays: 'B.e - C.a',
            workHours: '09:00-18:00',
            availability: 'Hazırdır',
            paidAmount: 200,
            dueAmount: 50,
            rating: 4.8,
            completionRate: 95,
            delays: 1,
            note: 'Yaxşı işçi',
            createdAt: '2025-08-15'
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

export default MastersList;
