import React from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { Content } from 'antd/es/layout/layout';

import PartnersList from './Components/partnerlist';
import PartnerModal from '@modals/partners/partner.modal';

const Partners = () => {
  const [openPartnerModal, setOpenPartnerModal] = React.useState(false);
  return (
    <>
      <div className='d-flex w-100 justify-content-between'>
        <div>
          <h2>Tərəfdaşlar</h2>
        </div>
        <div>
          <button className='thon_add_button'onClick={() => setOpenPartnerModal(true)}>
            Əlavə et
            <IoIosAddCircle className='fs-24 ms-2' />
          </button>
        </div>
      </div>
      <div className="d-flex">
        <Content>
          <PartnersList />
        </Content>
      </div>

      <PartnerModal
        isOpen={openPartnerModal}
        onClose={() => setOpenPartnerModal(false)}
      />
    </>
  )
}

export default Partners
