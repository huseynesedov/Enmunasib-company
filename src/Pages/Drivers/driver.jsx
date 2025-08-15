import React from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { Content } from 'antd/es/layout/layout';

import DriversList from './Components/driversList';



const Driver = () => {
    return (
        <>
            <div className='d-flex w-100 flex-wrap justify-content-between'>
                <div>
                    <h2>Sürücülər</h2>
                </div>
                <div className='d-flex flex-wrap' style={{ gap: "9px 0px" }}>
                    <button className='thon_add_button me-2'>
                        Əlavə et
                        <IoIosAddCircle className='fs-24 ms-2' />
                    </button>

                </div>
            </div>
            <div className="d-flex">
                <Content>
                    <DriversList />
                </Content>
            </div>
        </>
    )
}

export default Driver;
