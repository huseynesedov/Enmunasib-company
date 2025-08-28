import React, { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { Content } from 'antd/es/layout/layout';

import RezerveList from './Components/reservesList';

import AddRezerv from '@modals/Rezerve/rezerv.add';


const Rezerve = () => {
  const [isModalRezerv, setIsModalRezerv] = useState(false);

  return (
    <>
      <div className='d-flex w-100 flex-wrap justify-content-between'>
        <div>
          <h2>Rezervlər</h2>
        </div>
        <div className='d-flex flex-wrap' style={{ gap: "9px 0px" }}>
          <button
            className='thon_add_button'
            onClick={() => setIsModalRezerv(true)}
          >
            Əlavə Et
            <IoIosAddCircle className='fs-24 ms-2' />
          </button>


        </div>
      </div>
      <div className="d-flex">
        <Content>
          <RezerveList />
        </Content>
      </div>

      <AddRezerv
        isOpen={isModalRezerv}
        onClose={() => setIsModalRezerv(false)}
      />
    </>
  )
}

export default Rezerve;
