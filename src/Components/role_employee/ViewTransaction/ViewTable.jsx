import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

const ViewTable = ({ transactions, handleDisplayDestinationDetail, allBranches }) => {

    console.log(allBranches);

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('ALL');

    // Only Bank manager 
    const [filterBranch, setFilterBranch] = useState('ALL');

    const filteredTransactions = transactions.filter(transaction => {
        const searchMatch = transaction.FirstName.includes(searchTerm) || transaction.LastName.includes(searchTerm);
        const filterMatch = filterType === 'ALL' || transaction.TransactionType === filterType;
        if (allBranches && allBranches.length > 0) {
            const filterBranchMatch = filterBranch === 'ALL' || transaction.BranchID === filterBranch;
            return searchMatch && filterMatch && filterBranchMatch;
        }
        else {
            return searchMatch && filterMatch;
        }
    });

    const totalPages = Math.ceil(filteredTransactions.length / rowsPerPage);
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredTransactions.slice(indexOfFirstRow, indexOfLastRow);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const FlowDirection = ({ Flow, Type }) => {
        let text;
        if (Flow === "OUT") {
            if (Type === "TRANSFER") {
                text = "โอนเงิน"
            }
            else if (Type === "TOPUP") {
                text = "เติมเงิน"
            }
            else if (Type === "BILL") {
                text = "จ่ายบิล"
            }
            else if (Type === "WITHDRAW") {
                text = "ถอนเงิน"
            }
        }
        else {
            text = "รับเงิน"
        }
        return (
            <td className="px-4 py-2 border-b">{text}</td>
        )
    }

    return (
        <div className=" container mx-auto mt-8 min-w-full">
            <div className="flex mb-4">
                <div className='flex bg-white p-2 rounded-sm drop-shadow'>
                    <div className='pr-2 pl-1 border-r-2'>
                        <IoIosSearch className='text-slate-400 text-xl h-full' />
                    </div>

                    <input
                        type="text"
                        placeholder="ค้นหาด้วยชื่อหรือนามสกุล"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-4 bg-white"
                    />
                </div>

                <div className='flex bg-white rounded-sm ml-4 drop-shadow'>

                    <p className='my-auto text-slate-400 px-4'>ประเภทธุรกรรม: </p>

                    <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="mr-4 my-2 rounded-sm bg-white hover:cursor-pointer"
                    >
                        <option value="ALL">ทั้งหมด</option>
                        <option value="TRANSFER">โอนเงิน/รับเงิน</option>
                        <option value="TOPUP">เติมเงิน</option>
                        <option value="BILL">จ่ายบิล</option>
                        <option value="WITHDRAW">ถอนเงิน</option>
                    </select>
                </div>

                {(allBranches && allBranches.length) > 0 &&
                    <div className='flex bg-white rounded-sm ml-4 drop-shadow'>

                        <p className='my-auto text-slate-400 px-4'>สาขา: </p>

                        <select
                            value={filterBranch}
                            onChange={(e) => setFilterBranch(e.target.value)}
                            className="mr-4 my-2 rounded-sm bg-white hover:cursor-pointer"
                        >
                            <option value="ALL">ทั้งหมด</option>
                            {allBranches.map((branch, index) => (
                                <option key={index} value={branch.BranchID}>{branch.Name}({branch.BranchID})</option>
                            ))}
                        </select>
                    </div>
                }
            </div>
            <table className="min-w-full bg-white rounded-sm drop-shadow">
                <thead className='border-b-[2px] bg-orange-400 text-white'>
                    <tr>
                        <th className="px-4 py-2 border-b">ลำดับ</th>
                        <th className="px-4 py-2 border-b">วันที่</th>
                        <th className="px-4 py-2 border-b">เวลา</th>
                        <th className="px-4 py-2 border-b">ประเภทธุรกรรม</th>
                        <th className="px-4 py-2 border-b">จำนวนเงิน</th>
                        <th className="px-4 py-2 border-b">ชื่อ</th>
                        <th className="px-4 py-2 border-b">นามสกุล</th>
                        <th className="px-4 py-2 border-b">เลขบัญชี</th>
                        <th className="px-4 py-2 border-b">สาขาที่ดูแล</th>
                        <th className="px-4 py-2 border-b">ข้อมูลเพิ่มเติม</th>
                    </tr>
                </thead>
                <tbody>
                    {(transactions.length > 0 && currentRows.length > 0) ?
                        currentRows.map((transaction, index) => (
                            <tr key={index} className="hover:bg-slate-100 text-black">
                                <td className="px-4 py-2 border-b">{indexOfFirstRow + index + 1}</td>
                                <td className="px-4 py-2 border-b">{`${transaction.Day}/${transaction.Month}/${transaction.Year}`}</td>
                                <td className="px-4 py-2 border-b">{transaction.Time}</td>
                                <FlowDirection Flow={transaction.Flow} Type={transaction.TransactionType} />
                                <td className="px-4 py-2 border-b">{transaction.Amount}</td>
                                <td className="px-4 py-2 border-b">{transaction.FirstName}</td>
                                <td className="px-4 py-2 border-b">{transaction.LastName}</td>
                                <td className="px-4 py-2 border-b">{transaction.AccountNumber}</td>
                                <td className="px-4 py-2 border-b">{transaction.BranchName}({transaction.BranchID})</td>
                                <td
                                    className="px-4 py-2 border-b underline text-slate-600 hover:cursor-pointer"
                                    onClick={() =>
                                        handleDisplayDestinationDetail(transaction.DestinationID, transaction.TransactionType, transaction)
                                    }
                                >
                                    ดูรายละเอียด
                                </td>
                            </tr>
                        ))
                        : <tr>
                            <td className='py-4' colSpan={10}>
                                <p>ไม่พบข้อมูลธุรกรรม</p>
                            </td>
                        </tr>}
                </tbody>


            </table>
            <div className="flex justify-center gap-2 mt-4 text-black">

                <IoIosArrowBack
                    className={`my-auto  ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1} />

                <span className="my-auto">
                    หน้า {currentPage} จาก {totalPages}
                </span>

                <IoIosArrowForward
                    className={`my-auto ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages} />
            </div>
        </div>
    );
}

export default ViewTable