import React, { useEffect, useState } from 'react';
import { useDataFetch } from '../../hooks/useDataFetch';
import BmgSidebar from '../../Components/Layout/BmgSidebar';
import Loading from '../../Components/Global/Loading';

const BmgViewBank = () => {
    const { GET_DATA } = useDataFetch();
    const [bankData, setBankData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    useEffect(() => {
        fetchBankData();
    }, []);

    const fetchBankData = async () => {
        try {
            setIsLoading(true);
            const response = await GET_DATA("/bank/get-all");
            console.log(response);
            if (response.status === 200) {
                setBankData(response.bank);
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = bankData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(bankData.length / itemsPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='absolute bg-[#F7F7F8] w-full start-0 top-0'>
            <div className='flex'>
                <BmgSidebar />
                <div className='m-12 w-full'>
                    {isLoading && <Loading />}
                    <p className='text-left font-semibold text-3xl pt-4 pb-4'>ข้อมูลธนาคารที่ร่วมให้บริการ</p>
                    <div className='col-span-4 bg-white text-black my-2 px-4 py-4 drop-shadow'>
                        <div className='flex justify-between mb-4'>
                            <p className='text-xl'>รายชื่อธนาคารทั้งหมด</p>
                        </div>
                        <table className='min-w-full divide-y divide-gray-200 text-black'>
                            <thead className='bg-gray-50'>
                                <tr>
                                    <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>โลโก้</th>
                                    <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>รหัสธนาคาร</th>
                                    <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>ชื่อธนาคาร</th>
                                    <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>จัดการ</th>
                                </tr>
                            </thead>
                            <tbody className='bg-white divide-y divide-gray-200 text-left'>
                                {currentItems.map((bank, index) => (
                                    <tr key={index}>
                                        <td className='px-6 py-4 whitespace-nowrap'>
                                            <img src={bank.Logo} alt={bank.Name} className='h-16' />
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap'>{bank.BankID}</td>
                                        <td className='px-6 py-4 whitespace-nowrap'>{bank.Name}</td>
                                        <td className='px-6 py-4 whitespace-nowrap text-slate-600 underline'>แก้ไข</td>
                                    </tr>
                                ))}
                                {currentItems.length === 0 && (
                                    <tr>
                                        <td colSpan="3" className='px-6 py-4 whitespace-nowrap text-center'>ไม่มีข้อมูลธนาคาร</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <div className='flex justify-center mt-4'>
                            <nav className='bg-white px-4 py-3 flex items-center gap-4 justify-center'>
                                <button
                                    onClick={handlePreviousPage}
                                    className={`bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md ${currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}
                                    disabled={currentPage === 1}
                                >
                                    ก่อนหน้า
                                </button>
                                <button
                                    onClick={handleNextPage}
                                    className={`bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md ${currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}
                                    disabled={currentPage === totalPages}
                                >
                                    ถัดไป
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BmgViewBank;
