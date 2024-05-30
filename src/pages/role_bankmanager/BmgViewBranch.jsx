import React, { useEffect, useState } from 'react';
import BmgSidebar from '../../Components/Layout/BmgSidebar';
import { useDataFetch } from '../../hooks/useDataFetch';
import Loading from '../../Components/Global/Loading';
import { IoMdAddCircleOutline } from "react-icons/io";

const BmgViewBranch = () => {
    const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();

    const [isLoading, setIsLoading] = useState(false);
    const [branchRank, setBranchRank] = useState([]);
    const [allBranch, setAllBranch] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); // Number of items per page

    const [selectedBranch, setSelectedBranch] = useState(null);
    const [isDisplayModal, setIsDisplayModal] = useState(false);

    useEffect(() => {
        fetchTransactionRankList();
    }, []);

    const fetchTransactionRankList = async () => {
        try {
            setIsLoading(true);
            const startDate = "2024-05-01";
            const endDate = "2024-05-31";
            const response = await POST_DATA_WITH_BODYPARAMS("/transaction/bmg/get-ranking", { startDate, endDate });
            if (response.status === 200) {
                setBranchRank(response.rank);
                setAllBranch(response.all_branch);
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSelectedBranch = (branch) => {
        setSelectedBranch(branch);
        setIsDisplayModal(true);
    };

    // Pagination for All Branches table
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allBranch.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(allBranch.length / itemsPerPage);

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
                {isLoading && <Loading />}
                <div className='m-12 w-full'>
                    <p className='text-left font-semibold text-3xl pt-4'>ข้อมูลสาขา</p>
                    <p className='text-left text-xl pt-2 pb-8'>ข้อมูลสาขาทั้งหมด</p>

                    {/* Branch Ranking Table */}
                    <div className='col-span-4 bg-white text-black my-2 px-4 py-4 drop-shadow'>
                        <div className='flex justify-between mb-4'>
                            <p className='text-xl'>อันดับสาขาที่มียอดธุรกรรมสูงสุด</p>
                        </div>
                        <table className='min-w-full divide-y divide-gray-200 text-black'>
                            <thead className='bg-gray-50'>
                                <tr>
                                    <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>รหัสสาขา</th>
                                    <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>ชื่อสาขา</th>
                                    <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>จำนวนธุรกรรม</th>
                                    <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>จำนวนเงินรวม</th>
                                </tr>
                            </thead>
                            <tbody className='bg-white divide-y divide-gray-200 text-left'>
                                {branchRank.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((branch, index) => (
                                    <tr key={index}>
                                        <td className='px-6 py-4 whitespace-nowrap'>{branch.BranchID}</td>
                                        <td className='px-6 py-4 whitespace-nowrap'>{branch.BranchName}</td>
                                        <td className='px-6 py-4 whitespace-nowrap'>{branch.TotalCount}</td>
                                        <td className='px-6 py-4 whitespace-nowrap'>{branch.TotalAmount}</td>
                                    </tr>
                                ))}
                                {branchRank.length === 0 && (
                                    <tr>
                                        <td colSpan="4" className='px-6 py-4 whitespace-nowrap text-center'>ไม่มีข้อมูลสาขา</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <div className='flex justify-center mt-4'>
                            <nav className='bg-white px-4 py-3 flex items-center gap-4 justify-center'>
                                <button
                                    onClick={() => paginate(currentPage - 1)}
                                    className={`bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md ${currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}
                                    disabled={currentPage === 1}
                                >
                                    ก่อนหน้า
                                </button>
                                <button
                                    onClick={() => paginate(currentPage + 1)}
                                    className={`bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md ${branchRank.length < itemsPerPage ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}
                                    disabled={branchRank.length < itemsPerPage}
                                >
                                    ถัดไป
                                </button>
                            </nav>
                        </div>
                    </div>

                    {/* All Branches Table */}
                    <div className='col-span-4 bg-white text-black my-2 px-4 py-4 drop-shadow'>
                        <div className='flex justify-between mb-4'>
                            <p className='text-xl'>รายชื่อสาขาทั้งหมด</p>
                        </div>
                        <table className='min-w-full divide-y divide-gray-200 text-black'>
                            <thead className='bg-gray-50'>
                                <tr>
                                    <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>รหัสสาขา</th>
                                    <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>ชื่อสาขา</th>
                                    <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>ที่อยู่</th>
                                    <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>เบอร์โทรศัพท์</th>
                                    <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>จัดการ</th>
                                </tr>
                            </thead>
                            <tbody className='bg-white divide-y divide-gray-200 text-left'>
                                {currentItems.map((branch, index) => (
                                    <tr key={index}>
                                        <td className='px-6 py-4 whitespace-nowrap'>{branch.BranchID}</td>
                                        <td className='px-6 py-4 whitespace-nowrap'>{branch.Name}</td>
                                        <td className='px-6 py-4 whitespace-nowrap'>{branch.Address}</td>
                                        <td className='px-6 py-4 whitespace-nowrap'>{branch.PhoneNumber}</td>
                                        <td className='px-6 py-4 whitespace-nowrap text-slate-600 underline cursor-pointer'>แก้ไข</td>
                                    </tr>
                                ))}
                                {currentItems.length === 0 && (
                                    <tr>
                                        <td colSpan="4" className='px-6 py-4 whitespace-nowrap text-center'>ไม่มีข้อมูลสาขา</td>
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

export default BmgViewBranch;
