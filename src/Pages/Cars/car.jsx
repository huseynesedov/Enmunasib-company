import React, { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { Content } from 'antd/es/layout/layout';

import CarsList from './Components/carsList';
import CarrAddModal from '../../Modals/Cars/car.add';

const Car = () => {

  const [isModalCarAdd, setIsModalCarAdd] = useState(false);

  return (
    <>
      <div className='d-flex w-100 justify-content-between'>
        <div>
          <h2>Maşınlar</h2>
        </div>
        <div>
          <button className='thon_add_button' onClick={() => setIsModalCarAdd(true)}>
            Əlavə et
            <IoIosAddCircle className='fs-24 ms-2' />
          </button>
        </div>
      </div>
      <div className="d-flex">
        <Content>
          <CarsList />
        </Content>
      </div>

      <CarrAddModal
        visible={isModalCarAdd}        // prop ismi AntD Modal ile eşleşmeli
        onCancel={() => setIsModalCarAdd(false)}
      />

    </>
  )
}

export default Car;
