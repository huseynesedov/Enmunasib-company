import React, { useState, useEffect } from 'react';
import { Badge, Dropdown } from 'antd';
import { LuBellRing } from "react-icons/lu";

const Bell = () => {
  const [count, setCount] = useState(0);

  // Simülasyon: 3 saniyede bir yeni bildirim gelsin
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const items = [
    { key: '1', label: <span>Yeni mesajınız var</span> },
    { key: '2', label: <span>Bildirim ayarları</span> },
  ];

  const handleClick = () => {
    setCount(0); // Tıklayınca okunmuş yap
  };

  return (
    <Dropdown
      menu={{ items }}
      trigger={['click']}
      placement="bottomRight"
      arrow
      onOpenChange={(open) => {
        if (open) handleClick();
      }}
    >
      <Badge count={count} offset={[0, -1]}>
        <LuBellRing
          size={22}
          style={{ cursor: 'pointer' }}
          className='text-white'
        />
      </Badge>
    </Dropdown>
  );
};

export default Bell;
