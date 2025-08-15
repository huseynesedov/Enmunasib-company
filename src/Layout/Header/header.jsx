import React, { useState } from 'react'
import User from './components/user';
import ThemeSwitch from './components/modSwitch';
import { TbGpsFilled } from "react-icons/tb";
import Lang from './components/lang';
import { FaBars } from 'react-icons/fa'; // Hamburger Icon
import Bell from './components/bell';


import { Badge } from 'antd';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To toggle the menu

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='d-flex justify-content-between'>
      {/* Pages */}
      <div className='d-flex align-items-center'>


        <Badge.Ribbon text="Tezliklə" color="orange" style={{ margin: '-13px 8px' }}>
          <button className='d-flex thon_header_icon me-2 disabled-btn'>
            <TbGpsFilled />
            <p className='fs-16 d-none d-md-block ms-2'>
              GPS
            </p>
          </button>
        </Badge.Ribbon>
      </div>


      {/* Hamburger Icon */}
      <div className="d-flex align-items-center d-lg-none"> {/* Visible on small screens */}
        <button onClick={handleMenuToggle} className="hamburger-icon">
          <FaBars />
        </button>
      </div>

      {/* Desktop View */}
      <div className='d-flex align-items-center d-none d-lg-flex'>
        <div className='me-4 d-md-block fs-24'>
          <Bell />
        </div>

        <div className='me-4'>
          <Lang />
        </div>
        <div className='me-4'>
          <ThemeSwitch />
        </div>
        <div>
          <User />
        </div>
      </div>

      {/* Mobile View Menu */}
      {isMenuOpen && (
        <div className="d-lg-none menu-mobile">
          <div className='me-4 d-md-block fs-24'>
            <Bell />
          </div>
          <div className="me-4">
            <Lang />
          </div>
          <div className="me-4">
            <ThemeSwitch />
          </div>
          <div>
            <User />
          </div>
        </div>
      )}
    </div>
  )
}

export default Header;
