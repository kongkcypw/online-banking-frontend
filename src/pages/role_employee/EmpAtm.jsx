import React, { useEffect, useState } from 'react'
import EmpSidebar from '../../Components/Layout/EmpSidebar'
import { useDataFetch } from '../../hooks/useDataFetch'
import AtmTable from '../../Components/role_employee/manageAtm/AtmTable';
import AtmModal from '../../Components/role_employee/manageAtm/AtmModal';

const EmpManageAtm = () => {

    const { GET_DATA } = useDataFetch();

    const [atmListData, setAtmListAtm] = useState([]);

    const [isDisplayModal, setIsDisplayModal] = useState();
    const [selectedAtm, setSelectedAtm] = useState([]);

    useEffect(() => {
        fetchAtmData();
    }, [])

    const fetchAtmData = async () => {
        try {
            const response = await GET_DATA("/atm/get-info");
            if (response.status === 200) {
                console.log(response);
                setAtmListAtm(response.atm)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='absolute bg-[#F7F7F8] w-full h-full start-0 top-0'>
            <div className='flex'>
                <EmpSidebar />
                <div className='m-8 w-full'>
                    {atmListData && atmListData.length > 0 &&
                        <AtmTable
                            atmList={atmListData}
                            setIsDisplayModal={setIsDisplayModal}
                            setSelectedAtm={setSelectedAtm} />}

                    {isDisplayModal === true &&
                        <AtmModal
                            selectedAtm={selectedAtm}
                            closeModal={() => setIsDisplayModal(false)} />}
                </div>
            </div>
        </div>
    )
}

export default EmpManageAtm