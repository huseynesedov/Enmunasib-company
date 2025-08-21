import React from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { Content } from 'antd/es/layout/layout';
import MastersList from './components/master.list';
import AddMasterModal from '../../Modals/Masters/master.add';

const Masters = () => {
    const [isMasterModal, setIsMasterModal] = React.useState(false);

    return (
        <>
            <div className='d-flex w-100 flex-wrap justify-content-between'>
                <div>
                    <h2>Ustalar</h2>
                </div>

                <div className='d-flex flex-wrap' style={{ gap: "9px 0px" }}>
                    <button 
                        className='thon_add_button me-2'
                        onClick={() => setIsMasterModal(true)}
                    >
                        Əlavə et
                        <IoIosAddCircle className='fs-24 ms-2' />
                    </button>
                </div>
            </div>

            <div className="d-flex">
                <Content>
                    <MastersList />
                </Content>
            </div>

            <AddMasterModal
                open={isMasterModal}
                onCancel={() => setIsMasterModal(false)}
            />
        </>
    )
}

export default Masters;
