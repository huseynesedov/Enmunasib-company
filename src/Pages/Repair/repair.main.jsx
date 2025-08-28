import React from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { Content } from 'antd/es/layout/layout';

import RepairList from './components/repair.list';
import AddRepair from '@modals/Repair/repair.add';

const RepairMain = () => {
    const [isAvtoServiceModal, setIsAvtoServiceModal] = React.useState(false);

    return (
        <>
            <div className='d-flex w-100 flex-wrap justify-content-between'>
                <div>
                    <h2>Maşın təmiri</h2>
                </div>

                <div className='d-flex flex-wrap' style={{ gap: "9px 0px" }}>
                    <button 
                        className='thon_add_button'
                        onClick={() => setIsAvtoServiceModal(true)}
                    >
                        Əlavə et
                        <IoIosAddCircle className='fs-24 ms-2' />
                    </button>
                </div>
            </div>

            <div className="d-flex">
                <Content>
                    <RepairList />
                </Content>
            </div>

            <AddRepair
                open={isAvtoServiceModal}
                onCancel={() => setIsAvtoServiceModal(false)}
            />
        </>
    )
}

export default RepairMain;
