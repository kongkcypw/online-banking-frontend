import React, { useEffect, useState } from 'react';
import { useDataFetch } from '../../hooks/useDataFetch';
import BmgSidebar from '../../Components/Layout/BmgSidebar';
import Loading from '../../Components/Global/Loading';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AtmModal from '../../Components/role_employee/manageAtm/AtmModal';

const BmgViewATM = () => {
    const { GET_DATA, POST_DATA_WITH_BODYPARAMS } = useDataFetch();
    const [isLoading, setIsLoading] = useState(false);
    const [atmRank, setAtmRank] = useState([]);
    const [atmList, setAtmList] = useState([]);
    const [currentPage1, setCurrentPage1] = useState(1);
    const [currentPage2, setCurrentPage2] = useState(1);
    const itemsPerPage = 5;

    const [selectedAtm, setSelectedAtm] = useState(null);
    const [isDisplayModal, setIsDisplayModal] = useState(false);

    useEffect(() => {
        fetchAtmRank();
        fetchAtmList();
    }, []);

    const fetchAtmRank = async () => {
        try {
            setIsLoading(true);
            const startDate = "2024-05-01";
            const endDate = "2024-05-31";
            const response = await POST_DATA_WITH_BODYPARAMS("/transaction/bmg/get-overview", { startDate, endDate });
            if (response.status === 200) {
                setAtmRank(response.atm);
                console.log(response.atm);
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const fetchAtmList = async () => {
        try {
            setIsLoading(true);
            const response = await GET_DATA("/atm/get-info");
            if (response.status === 200) {
                console.log(response.atm);
                setAtmList(response.atm);
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

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

    const totalPages1 = Math.ceil(atmRank.length / itemsPerPage);
    const totalPages2 = Math.ceil(atmList.length / itemsPerPage);

    const currentData1 = atmRank.slice(
        (currentPage1 - 1) * itemsPerPage,
        currentPage1 * itemsPerPage
    );

    const currentData2 = atmList.slice(
        (currentPage2 - 1) * itemsPerPage,
        currentPage2 * itemsPerPage
    );

    const handleSelectedAtm = (data) => {
        setSelectedAtm(data);
        setIsDisplayModal(true)
    }

    return (
        <div className='absolute bg-[#F7F7F8] w-full start-0 top-0'>
            <div className='flex'>
                <BmgSidebar />
                <div className='m-12 w-full'>
                    {isLoading && <Loading />}
                    {isDisplayModal === true &&
                        <AtmModal
                            selectedAtm={selectedAtm}
                            closeModal={() => setIsDisplayModal(false)} />}
                    <p className='text-left font-semibold text-3xl pt-4'>ข้อมูล ATM</p>
                    <p className='text-left text-xl pt-2 pb-8'>ข้อมูล ATM ทั้งหมดจากทุกสาขา</p>
                    <p className='text-left font-semibold text-xl'>ATM ที่มียอดธุรกรรมสูงสุด</p>
                    {atmRank && atmRank.length > 0 && (
                        <div className='col-span-4 bg-white text-black my-2 px-4 py-4 drop-shadow'>
                            <p className='text-xl mb-4'>อันดับ ATM ที่มียอดธุรกรรมสูงสุด</p>
                            <table className='min-w-full divide-y divide-gray-200 text-black'>
                                <thead className='bg-gray-50'>
                                    <tr>
                                        <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>อันดับ</th>
                                        <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>รหัส ATM</th>
                                        <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>ชื่อสาขา</th>
                                        <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>ยอดการถอนทั้งหมด (บาท)</th>
                                        <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>ยอดการถอนโดยเฉลี่ย (บาท)</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200 text-left'>
                                    {currentData1.map((atm, index) => (
                                        <tr key={atm.ATMID}>
                                            <td className='px-6 py-4 whitespace-nowrap'>{(currentPage1 - 1) * itemsPerPage + index + 1}</td>
                                            <td className='px-6 py-4 whitespace-nowrap'>{atm.ATMID}</td>
                                            <td className='px-6 py-4 whitespace-nowrap'>{atm.BranchName}</td>
                                            <td className='px-6 py-4 whitespace-nowrap'>{atm.TotalAmount} บาท</td>
                                            <td className='px-6 py-4 whitespace-nowrap'>{atm.AverageAmount} บาท</td>
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
                    <p className='text-left font-semibold text-xl mt-8 mb-2'>ATM ทั้งหมด</p>
                    {atmList && atmList.length > 0 && (
                        <div className='col-span-4 bg-white text-black px-4 py-4 drop-shadow'>
                            <p className='text-xl mb-4'>รายชื่อ ATM</p>
                            <table className='min-w-full divide-y divide-gray-200 text-black'>
                                <thead className='bg-gray-50'>
                                    <tr>
                                        <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>รหัส ATM</th>
                                        <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>ชื่อสาขา</th>
                                        <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>เงินคงเหลือในตู้ (บาท)</th>
                                        <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>จัดการ</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200 text-left'>
                                    {currentData2.map((atm) => (
                                        <tr key={atm.ATMID}>
                                            <td className='px-6 py-4 whitespace-nowrap'>{atm.ATMID}</td>
                                            <td className='px-6 py-4 whitespace-nowrap'>{atm.Name}</td>
                                            <td className='px-6 py-4 whitespace-nowrap'>{atm.Balance} บาท</td>
                                            <td className='px-6 py-4 whitespace-nowrap text-slate-600 underline cursor-pointer'
                                                onClick={() => handleSelectedAtm(atm)}>แก้ไข</td>
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

export default BmgViewATM;
