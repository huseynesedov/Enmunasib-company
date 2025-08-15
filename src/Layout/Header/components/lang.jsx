import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import '../../../i18n';
import languages from '../../../Lang/main';
import { IoIosArrowDown } from 'react-icons/io';
import { Badge } from 'antd';

const Lang = () => {
    const { lang } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { i18n } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [currentFlag, setCurrentFlag] = useState('');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const storedLang = localStorage.getItem('lang');
        if (storedLang) {
            i18n.changeLanguage(storedLang);
            const selectedLang = languages.find((langItem) => langItem.code === storedLang);
            setCurrentFlag(selectedLang ? selectedLang.flag : '');
        }
    }, [i18n]);

    const changeLanguage = (newLang) => {
        i18n.changeLanguage(newLang);
        setIsOpen(false);
        localStorage.setItem('lang', newLang);

        // Update the flag dynamically
        const selectedLang = languages.find((langItem) => langItem.code === newLang);
        setCurrentFlag(selectedLang ? selectedLang.flag : '');

        let currentPath = location.pathname;
        const queryParams = location.search;
        const hash = location.hash;

        if (lang) {
            currentPath = currentPath.replace(`/${lang}`, `/${newLang}`);
        } else {
            const pathParts = currentPath.split('/');
            pathParts[1] = newLang;
            currentPath = pathParts.join('/');
        }

        navigate(`${currentPath}${queryParams}${hash}`);
    };

    return (
        <>
            <Badge.Ribbon text="Tezliklə" color="orange" style={{ margin: '-23px 0px' }}>
                <div className="language d-flex align-items-center disabled-btn" onClick={toggleDropdown}>
                    <img src={currentFlag || null} alt="language flag" />
                    <IoIosArrowDown className='ms-2 header_arrow_icon' />
                </div>
            </Badge.Ribbon>

            {isOpen && (
                <ul className="dropdown-menu show position-absolute mt-2" style={{ right: "180px" }}>
                    {languages.map((langItem) => (
                        <li
                            key={langItem.id}
                            className="dropdown-item d-flex align-items-center"
                            onClick={() => {
                                changeLanguage(langItem.code);
                                setIsOpen(false); // Close the dropdown after selection
                            }}
                        >
                            <img src={langItem.flag} alt={langItem.label} className="flag-icon" />
                            <p className='ms-2'>
                                {langItem.label}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default Lang;
