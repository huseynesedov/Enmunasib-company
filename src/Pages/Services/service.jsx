import React from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { Content } from 'antd/es/layout/layout';

import ServicesList from './Components/servicesList';
import AdditionalServicesModal from '../../Modals/services/additionalServices';
import WarrantyPackageModal from '../../Modals/services/warrantyPackage';



const Service = () => {

  const [isAdditionalServicesModal, setIsAdditionalServicesModal] = React.useState(false);
  const [isWarrantyModalOpen, setIsWarrantyModalOpen] = React.useState(false);



  return (
    <>
      <div className='d-flex w-100 flex-wrap justify-content-between'>
        <div>
          <h2>Xidmətlər</h2>
        </div>


        <div className='d-flex flex-wrap' style={{ gap: "9px 0px" }}>
          <button className='thon_add_button me-2'
            onClick={() => setIsAdditionalServicesModal(true)}
          >
            Əlavə xidmət
            <IoIosAddCircle className='fs-24 ms-2' />
          </button>
          <button className='thon_add_button'
            onClick={() => setIsWarrantyModalOpen(true)}

          >
            Zamanət Paket
            <IoIosAddCircle className='fs-24 ms-2' />
          </button>
        </div>




      </div>
      <div className="d-flex">
        <Content>
          <ServicesList />
        </Content>
      </div>

      {/* Add Service Modal can be added here */}
      <AdditionalServicesModal
        isOpen={isAdditionalServicesModal}
        onClose={() => setIsAdditionalServicesModal(false)}
      />

      <WarrantyPackageModal
        isOpen={isWarrantyModalOpen}
        onClose={() => setIsWarrantyModalOpen(false)}
      />

    </>
  )
}

export default Service;
