import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '@contexts/Login/loginContext';
import { motion } from 'framer-motion';
import { Badge } from 'antd';
import { FaCalculator, FaAngleRight, FaUserFriends, FaIdCardAlt } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { IoCarSportSharp } from "react-icons/io5";
import { MdOutlineMiscellaneousServices, MdOilBarrel, MdCarRepair } from "react-icons/md";
import { LuUserCog, LuMessageCircleMore } from "react-icons/lu";
import { TbCashBanknoteOff } from "react-icons/tb";
import { GiMechanicGarage } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { LiaUsersSolid } from "react-icons/lia";

import images from '../../Assets/images/images';

const Leftbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const lang = localStorage.getItem('lang');
  const { userId } = useContext(AuthContext);

  const dashboardLink = `/${lang}/${userId}`;

  useEffect(() => {
    if (pathname === "/") {
      navigate(dashboardLink);
    }
  }, [pathname, dashboardLink, navigate]);

  const menuItems = [
    { icon: <FaCalculator />, text: 'İdarə paneli', link: dashboardLink },
    { icon: <IoCarSportSharp />, text: 'Maşınlar', link: `/${lang}/${userId}/cars` },
    { icon: <FaListCheck />, text: 'Rezervlər', link: `/${lang}/${userId}/rezervs` },
    { icon: <FaUserFriends />, text: 'Tərəfdaşlar', link: `/${lang}/${userId}/partners` },
    { icon: <MdOutlineMiscellaneousServices />, text: 'Xidmətlər', link: `/${lang}/${userId}/services` },
    { icon: <GrUserWorker />, text: 'İşcilər', link: `/${lang}/${userId}/workers` },
    { icon: <LuUserCog />, text: 'Ustalar', link: `/${lang}/${userId}/masters` },
    { icon: <GiMechanicGarage />, text: 'Avto servis', link: `/${lang}/${userId}/avtoservis` },
    { icon: <MdOilBarrel />, text: 'Yağ dəyişmə', link: `/${lang}/${userId}/oilchange` },
    { icon: <MdCarRepair />, text: 'Təmir', link: `/${lang}/${userId}/repair` },

    
    { icon: <FaIdCardAlt />, text: 'Sürücülər', link: `/${lang}/${userId}/drivers`, disabled: true },
    { icon: <TbCashBanknoteOff />, text: 'Xərçlər', link: `/${lang}/${userId}/xercler`, disabled: true },
    { icon: <LiaUsersSolid />, text: 'Müştərilər', link: `/${lang}/${userId}/Customers`, disabled: true },
    { icon: <LuMessageCircleMore />, text: 'Mesajlar', link: `/${lang}/${userId}/mesajlar`, disabled: true },
  ];

  return (
    <div className='d-flex flex-column align-items-center justify-content-center py-2'>
      <div className='borderrrrr'>
        <img className='mt-2 mb-4 Company_Logo' src={images.Logo} width={150} alt="Logo" />
        <span className='border23'></span>
        <div className='mt-1'>
          {menuItems.map(({ icon, text, link, disabled }, index) => {
            const isActive = pathname === link || (link !== dashboardLink && pathname.startsWith(link));

            return (
              <motion.div
                key={index}
                whileHover={!disabled ? { scale: 1.04 } : {}}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {disabled ? (
                  <Badge.Ribbon text="Tezliklə" color="orange">
                    <div className={`thon_leftbar_icon disabled w-100 d-flex justify-content-between align-items-center mb-3`}>
                      {icon}
                      <p className='fs-14'>{text}</p>
                      <FaAngleRight className='right' />
                    </div>
                  </Badge.Ribbon>
                ) : (
                  <Link
                    to={link}
                    className={`thon_leftbar_icon w-100 d-flex justify-content-between align-items-center mb-3 ${isActive ? 'active' : ''}`}
                  >
                    {icon}
                    <p className='fs-14'>{text}</p>
                    <FaAngleRight className='right' />
                    <span className="tooltip">{text}</span>
                  </Link>
                )}
              </motion.div>
            );
          })}
          <p className='fs-10'>Ən Münasib Copyright© / V 1.0</p>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
