import React from 'react';
import { Dropdown, Avatar, Menu } from 'antd';
import { IoIosArrowDown } from "react-icons/io";

const User = () => {
  // Statik kullanıcı bilgileri
  const firstName = "Ahmet";
  const lastName = "Yılmaz";
  const profileImage = null; // Kullanıcı resmi yoksa null

  const getInitials = (firstName, lastName) => {
    return `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
  };

  // Dropdown menü öğeleri
  const menuItems = [
    { key: '1', label: 'Ayarlar' },
    { key: '2', label: 'Kömək' },
    { key: '3', label: 'Çıxış' },
  ];

  const menu = <Menu items={menuItems} />;

  return (
    <Dropdown menu={{ items: menuItems }} trigger={['click']} placement="bottomRight" arrow>
      <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <Avatar
          size="large"
          src={profileImage ? profileImage : null}
          style={{ backgroundColor: profileImage ? 'transparent' : '#1890ff' }}
        >
          {!profileImage && getInitials(firstName, lastName)}
        </Avatar>
        <IoIosArrowDown className='ms-2 header_arrow_icon' />
      </div>
    </Dropdown>
  );
};

export default User;
