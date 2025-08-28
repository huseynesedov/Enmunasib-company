import React from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { Content } from 'antd/es/layout/layout';
import WorkersList from './components/worker.list';
import AddWorkerModal from '@modals/workers/addWorker.modal';



const Workers = () => {

    const [isWorkerModal, setIsWorkerModal] = React.useState(false);



    return (
        <>
            <div className='d-flex w-100 flex-wrap justify-content-between'>
                <div>
                    <h2>İşcilər</h2>
                </div>


                <div className='d-flex flex-wrap' style={{ gap: "9px 0px" }}>
                    <button className='thon_add_button'
                        onClick={() => setIsWorkerModal(true)}
                    >
                        Əlavə et
                        <IoIosAddCircle className='fs-24 ms-2' />
                    </button>
                </div>




            </div>
            <div className="d-flex">
                <Content>
                    <WorkersList />
                </Content>
            </div>

            {/* Add Service Modal can be added here */}
            <AddWorkerModal
                open={isWorkerModal}
                onCancel={() => setIsWorkerModal(false)}
            />

        </>
    )
}

export default Workers;
