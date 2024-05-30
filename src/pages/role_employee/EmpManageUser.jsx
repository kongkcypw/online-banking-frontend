import React, { useEffect, useState } from 'react'
import { useDataFetch } from '../../hooks/useDataFetch'
import EmpSidebar from '../../Components/Layout/EmpSidebar';
import UserTable from '../../Components/role_employee/manageUser/UserTable';
import Loading from '../../Components/Global/Loading';
import UserDetailModal from '../../Components/role_employee/manageUser/UserDetailModal';

const EmpManageUser = () => {

    const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();

    const [isLoading, setIsLoading] = useState(false);
    const [userListData, setUserListData] = useState();
    const [isDisplayDetailModal, setIsDisplayModal] = useState(false);

    const [selectedUser, setSelectUser] = useState([]);

    useEffect(() => {
        fetchUserList();
    }, [])

    const fetchUserList = async () => {
        try {
            setIsLoading(true)
            const response = await POST_DATA_WITH_BODYPARAMS("/dashboard/get-employee-in-branch", { branchID: "BR1097" })
            if (response.status === 200) {
                setUserListData(response.user);
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    return (
        <div>
            <div className='absolute bg-[#F7F7F8] w-full h-full start-0 top-0'>

                {isLoading && <Loading />}

                <div className='flex'>
                    <EmpSidebar />
                    <div className='m-8 w-full'>
                        <div className='text-left p-8'>
                            <p className='text-3xl font-semibold'>ข้อมูลลูกค้า</p>
                            {userListData &&
                                <UserTable
                                    userList={userListData}
                                    displayDetail={() => setIsDisplayModal(true)}
                                    setSelectUser={setSelectUser} />}
                            {isDisplayDetailModal === true && selectedUser &&
                                <UserDetailModal
                                    closeModal={() => setIsDisplayModal(false)}
                                    selectedUser={selectedUser} />}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmpManageUser