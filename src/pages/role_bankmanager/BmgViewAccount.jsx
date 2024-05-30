import React, { useEffect, useState } from 'react';
import { useDataFetch } from '../../hooks/useDataFetch';
import BmgSidebar from '../../Components/Layout/BmgSidebar';
import Loading from '../../Components/Global/Loading';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import UserDetailModal from '../../Components/role_employee/manageUser/UserDetailModal';

const BmgViewAccount = () => {
    
    const { GET_DATA, POST_DATA_WITH_BODYPARAMS } = useDataFetch();

    const [accountRankList, setAccountRankList] = useState([]);
    const [allAccountList, setAllAccountList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage1, setCurrentPage1] = useState(1); // For accountRankList
    const [currentPage2, setCurrentPage2] = useState(1); // For allAccountList
    const itemsPerPage = 5;

    const [selectedAccount, setSelectedAccount] = useState(null);
    const [isDisplayModal, setIsDisplayModal] = useState(false);

    useEffect(() => {
        fetchOverviewData();
        fetchUserData();
    }, []);

    const fetchOverviewData = async () => {
        try {
            setIsLoading(true);
            const startDate = "2024-05-01";
            const endDate = "2024-05-31";
            const response = await POST_DATA_WITH_BODYPARAMS("/transaction/bmg/get-overview", { startDate, endDate });
            if (response.status === 200) {
                setAccountRankList(response.account);
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const fetchUserData = async () => {
        try {
            setIsLoading(true);
            const response = await GET_DATA("/dashboard/get-user-all");
            if (response.status === 200) {
                setAllAccountList(response.user);
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    const handleNextPage1 = () => {
        setCurrentPage1((prevPage) => prevPage + 1);
    };

    const handlePreviousPage1 = () => {
        setCurrentPage1((prevPage) => prevPage - 1);
    };

    const handleNextPage2 = () => {
        setCurrentPage2((prevPage) => prevPage + 1);
    };

    const handlePreviousPage2 = () => {
        setCurrentPage2((prevPage) => prevPage - 1);
    };

    const totalPages1 = Math.ceil(accountRankList.length / itemsPerPage);
    const totalPages2 = Math.ceil(allAccountList.length / itemsPerPage);

    const currentData1 = accountRankList.slice(
        (currentPage1 - 1) * itemsPerPage,
        currentPage1 * itemsPerPage
    );

    const currentData2 = allAccountList.slice(
        (currentPage2 - 1) * itemsPerPage,
        currentPage2 * itemsPerPage
    );

    const handleSelectedAccount = (data) => {
        setSelectedAccount(data);
        setIsDisplayModal(true);
    }

    return (
        <div className='absolute bg-[#F7F7F8] w-full start-0 top-0'>
            <div className='flex'>
                <BmgSidebar />
                <div className='m-12 w-full'>
                    {isLoading && <Loading />}
                    {isDisplayModal === true && 
                     <UserDetailModal 
                        selectedUser={selectedAccount}
                        closeModal={() => setIsDisplayModal(false)}/>}
                    <p className='text-left font-semibold text-3xl pt-4'>ข้อมูลลูกค้า</p>
                    <p className='text-left text-xl pt-2 pb-8'>ข้อมูลบัญชีลูกค้าจากสาขาทั้งหมด</p>

                    <div className='flex'>
                        <p className='text-left font-semibold text-xl'>บัญชีที่มีธุรกรรมสูงสุด</p>
                        <p className='text-left my-auto ml-1'>(ข้อมูลภายในเดือนสิงหาคม)</p>
                    </div>

                    {accountRankList && accountRankList.length > 0 && (
                        <div className='col-span-4 bg-white text-black my-2 px-4 py-4 drop-shadow'>
                            <p className='text-xl mb-4'>อันดับบัญชีที่มียอดธุรกรรมสูงสุด</p>
                            <table className='min-w-full divide-y divide-gray-200 text-black'>
                                <thead className='bg-gray-50'>
                                    <tr>
                                        <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>อันดับ</th>
                                        <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>เลขบัญชี</th>
                                        <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>สาขาที่ดูแล</th>
                                        <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>ชื่อ-สกุล</th>
                                        <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>ยอดธุรกรรมรวม (บาท)</th>
                                        <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>ยอดธุรกรรมโดยเฉลี่ย (บาท)</th>
                                        
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200 text-left'>
                                    {currentData1.map((account, index) => (
                                        <tr key={account.AccountNumber}>
                                            <td className='px-6 py-4 whitespace-nowrap'>{(currentPage1 - 1) * itemsPerPage + index + 1}</td>
                                            <td className='px-6 py-4 whitespace-nowrap'>{account.AccountNumber}</td>
                                            <td className='px-6 py-4 whitespace-nowrap'>{account.BranchName} ({account.BranchID})</td>
                                            <td className='px-6 py-4 whitespace-nowrap'>{account.FirstName} {account.LastName}</td>
                                            <td className='px-6 py-4 whitespace-nowrap'>{account.TotalAmount} บาท</td>
                                            <td className='px-6 py-4 whitespace-nowrap'>{account.AverageAmount} บาท</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="flex justify-center gap-2 mt-4 text-black">
                                <IoIosArrowBack
                                    className={`my-auto  ${currentPage1 === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                    onClick={handlePreviousPage1}
                                    disabled={currentPage1 === 1} />
                                <span className="my-auto">
                                    หน้า {currentPage1} จาก {totalPages1}
                                </span>
                                <IoIosArrowForward
                                    className={`my-auto ${currentPage1 === totalPages1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                    onClick={handleNextPage1}
                                    disabled={currentPage1 === totalPages1} />
                            </div>
                        </div>
                    )}
                    <p className='text-left font-semibold text-xl mt-8 mb-2'>บัญชีทั้งหมด</p>
                    {allAccountList && allAccountList.length > 0 && (
                        <div className='col-span-4 bg-white text-black px-4 py-4 drop-shadow'>
                            <p className='text-xl mb-4'>รายชื่อลูกค้า</p>
                            <table className='min-w-full divide-y divide-gray-200 text-black'>
                                <thead className='bg-gray-50'>
                                    <tr>
                                        <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>เลขบัญชี</th>
                                        <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>ชื่อ-สกุล</th>
                                        <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>อีเมล</th>
                                        <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>เบอร์โทร</th>
                                        <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>ยอดคงเหลือ (บาท)</th>
                                        <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>วันที่เปิดบัญชี</th>
                                        <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>จัดการ</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200 text-left'>
                                    {currentData2.map((user) => (
                                        <tr key={user.AccountNumber}>
                                            <td className='px-6 py-4 whitespace-nowrap'>{user.AccountNumber}</td>
                                            <td className='px-6 py-4 whitespace-nowrap'>{user.FirstName} {user.LastName}</td>
                                            <td className='px-6 py-4 whitespace-nowrap'>{user.Email}</td>
                                            <td className='px-6 py-4 whitespace-nowrap'>{user.PhoneNumber}</td>
                                            <td className='px-6 py-4 whitespace-nowrap'>{user.Balance} บาท</td>
                                            <td className='px-6 py-4 whitespace-nowrap'>{user.DateOpen}</td>
                                            <td className='px-6 py-4 whitespace-nowrap text-slate-600 underline cursor-pointer'
                                                onClick={() => handleSelectedAccount(user)}>แก้ไข</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="flex justify-center gap-2 mt-4 text-black">
                                <IoIosArrowBack
                                    className={`my-auto  ${currentPage2 === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                    onClick={handlePreviousPage2}
                                    disabled={currentPage2 === 1} />
                                <span className="my-auto">
                                    หน้า {currentPage2} จาก {totalPages2}
                                </span>
                                <IoIosArrowForward
                                    className={`my-auto ${currentPage2 === totalPages2 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                    onClick={handleNextPage2}
                                    disabled={currentPage2 === totalPages2} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BmgViewAccount;

