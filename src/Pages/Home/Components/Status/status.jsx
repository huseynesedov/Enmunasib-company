import React, { useState } from 'react'
import { TbClockCog } from "react-icons/tb";
import { BiSolidCarMechanic, BiTimer } from "react-icons/bi";
import { MdOutlineCarCrash } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";

import ActiveModal from '@modals/Home/Activate/carsNotLine.active';
import OilRepairSend from '@modals/Home/Oil-Repair/oil';
import RezervHandOver from '@modals/Home/Rezerv/handover';
import ExtendTime from '@modals/Home/Rezerv/extendTime';
import SendForRepair from '@modals/Home/Repair/SendForRepair';
import Rezerv from '@modals/Home/BookNow/rezerv';
import RepairActive from '@modals/Home/Repair/repairActive';

const Status = () => {
    const [isModalActiveOpen, setIsModalActiveOpen] = useState(false);
    const [isModalOilRepairOpen, setIsModalOilRepairOpen] = useState(false);
    const [isModalRezervHandOver, setIsModalRezervHandOver] = useState(false);
    const [isModalExtendTime, setIsModalExtendTime] = useState(false);
    const [isModalSendForRepair, setIsModalSendForRepair] = useState(false);
    const [isModalRezerv, setIsModalRezerv] = useState(false);
    const [isModalRepairActive, setIsModalRepairActive] = useState(false);

    return (
        <>

            <div className="thon_status_main d-flex">
                <div className="thon_status_container">
                    <div className='w-100 d-flex flex-wrap justify-content-between align-items-center'>
                        <p className="fs-16 text-center">Yag dəyişimi gözləyən maşınlar</p>
                        <TbClockCog className='ms-3 fs-24 d-none d-md-block text_yellow' />
                    </div>
                    <div className='w-100 d-flex mt-4 justify-content-between align-items-center'>
                        <p className="fs-18 fw-600 text-center">7</p>
                        <button className='status_button' onClick={() => setIsModalOilRepairOpen(true)}>Təmirə göndər</button>
                    </div>
                </div>

                <div className="thon_status_container">
                    <div className='w-100 d-flex flex-wrap justify-content-between align-items-center'>
                        <p className="fs-16 text-center">Rezervdə olan maşınlar</p>
                        <BiTimer className='ms-3 fs-24 d-none d-md-block text_blue' />
                    </div>
                    <div className='w-100 d-flex mt-4 justify-content-between align-items-center'>
                        <p className="fs-18 fw-600 text-center">19</p>
                        <div className='d-flex buttonGap justify-content-end flex-wrap'>
                            <button className='status_button' onClick={() => setIsModalRezervHandOver(true)} >Rezerv təhvili</button>
                            <button className='status_button ms-2' onClick={() => setIsModalExtendTime(true)} >Vaxtinı uzat</button>
                        </div>
                    </div>
                </div>

                <div className="thon_status_container">
                    <div className='w-100 d-flex flex-wrap justify-content-between align-items-center'>
                        <p className="fs-16 text-center">Xəttdə olmayan maşınlar</p>
                        <MdOutlineCarCrash className='ms-3 fs-24 d-none d-md-block text_red' />
                    </div>
                    <div className='w-100 d-flex mt-4 justify-content-between align-items-center'>
                        <p className="fs-18 fw-600  text-center">7</p>
                        <div className='d-flex gap-2 justify-content-end flex-wrap'>
                            <button className='status_button' onClick={() => setIsModalActiveOpen(true)}>Aktiv et</button>
                            <button className='status_button' onClick={() => setIsModalSendForRepair(true)}>Təmirə göndər</button>
                        </div>
                    </div>
                </div>

                <div className="thon_status_container">
                    <div className='w-100 d-flex flex-wrap justify-content-between align-items-center'>
                        <p className="fs-16 text-center">Aktiv maşınlar </p>
                        <TiTickOutline className='ms-3 fs-24 d-none d-md-block text_green' />
                    </div>
                    <div className='w-100 d-flex mt-4 justify-content-between align-items-center'>
                        <p className="fs-18 fw-600 text-center">7</p>
                        <button className='status_button' onClick={() => setIsModalRezerv(true)}>Rezerv et</button>
                    </div>
                </div>
                <div className="thon_status_container">
                    <div className='w-100 d-flex flex-wrap justify-content-between align-items-center'>
                        <p className="fs-16 text-center">Təmirdə olan maşınlar </p>
                        <BiSolidCarMechanic className='ms-3 fs-24 d-none d-md-block text_gray' />
                    </div>
                    <div className='w-100 d-flex mt-4 justify-content-between align-items-center'>
                        <p className="fs-18 fw-600 text-center">7</p>
                        <button className='status_button' onClick={() => setIsModalRepairActive(true)} >Aktiv et</button>
                    </div>
                </div>
            </div>



            <ActiveModal
                isOpen={isModalActiveOpen}
                onClose={() => setIsModalActiveOpen(false)}
            />

            <OilRepairSend
                isOpen={isModalOilRepairOpen}
                onClose={() => setIsModalOilRepairOpen(false)}
            />

            <RezervHandOver
                isOpen={isModalRezervHandOver}
                onClose={() => setIsModalRezervHandOver(false)}
            />

            <ExtendTime
                isOpen={isModalExtendTime}
                onClose={() => setIsModalExtendTime(false)}
            />

            <SendForRepair
                isOpen={isModalSendForRepair}
                onClose={() => setIsModalSendForRepair(false)}
            />
            <Rezerv
                isOpen={isModalRezerv}
                onClose={() => setIsModalRezerv(false)}
            />

            <RepairActive
                isOpen={isModalRepairActive}
                onClose={() => setIsModalRepairActive(false)}
            />

        </>
    )
}

export default Status;
