import React, { useEffect, useState } from 'react';
import BmgSidebar from '../../Components/Layout/BmgSidebar';
import { useDataFetch } from '../../hooks/useDataFetch';
import Loading from '../../Components/Global/Loading';
import { IoMdAddCircleOutline } from "react-icons/io";
import EmployeeModal from '../../Components/role_bankmanager/modal/EmployeeModal';

const BmgViewEmployee = () => {
    const { GET_DATA, POST_DATA_WITH_BODYPARAMS } = useDataFetch();
    const [isLoading, setIsLoading] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [branchList, setBranchList] = useState([]);
    const [filterRole, setFilterRole] = useState('All'); // Default filter value
    const [filterBranchID, setFilterBranchID] = useState('All'); // Default filter value
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5); // Number of items per page

    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isDisplayModal, setIsDisplayModal] = useState(false);


    useEffect(() => {
        fetchEmployeeData();
    }, [filterRole, filterBranchID, currentPage]);

    const fetchEmployeeData = async () => {
        try {
            setIsLoading(true);
            const response = await GET_DATA("/dashboard/get-all-employee");
            if (response.status === 200) {
                setEmployees(response.employee);
                setBranchList(response.branch);
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const handleRoleFilterChange = (event) => {
        setFilterRole(event.target.value);
        setCurrentPage(1); // Reset to the first page when changing filters
    };

    const handleBranchFilterChange = (event) => {
        setFilterBranchID(event.target.value);
        setCurrentPage(1); // Reset to the first page when changing filters
    };

    const roleTranslation = {
        Employee: 'พนักงาน',
        Supervisor: 'ผู้ดูแลสาขา',
        Bankmanager: 'ผู้จัดการ',
    };

    const filteredEmployees = employees.filter(emp => {
        if (filterRole !== 'All' && filterBranchID !== 'All') {
            return emp.Role === filterRole && emp.BranchID === filterBranchID;
        } else if (filterRole !== 'All') {
            return emp.Role === filterRole;
        } else if (filterBranchID !== 'All') {
            return emp.BranchID === filterBranchID;
        }
        return true;
    });

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredEmployees.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSelectedEmployee = (data) => {
        setSelectedEmployee(data);
        setIsDisplayModal(true)
    }

    return (
        <div className='absolute bg-[#F7F7F8] w-full start-0 top-0'>
            <div className='flex'>
                <BmgSidebar />
                <div className='m-12 w-full'>
                    {isLoading && <Loading />}
                    {isDisplayModal === true &&  
                        <EmployeeModal 
                            selectedEmployee={selectedEmployee}
                            branchList={branchList}
                            closeModal={() => setIsDisplayModal(false)}/>}
                    <p className='text-left font-semibold text-3xl pt-4'>ข้อมูลพนักงาน</p>
                    <p className='text-left text-xl pt-2 pb-8'>ข้อมูลพนักงานทั้งหมด</p>
                    <div className='col-span-4 bg-white text-black my-2 px-4 py-4 drop-shadow'>
                        <div className='flex justify-between mb-4'>
                            <p className='text-xl'>ตารางพนักงาน</p>
                            <div className='flex items-center'>
                                <label className='mr-2'>ตำแหน่ง:</label>
                                <select
                                    className='border border-gray-300 px-3 py-1 rounded-md'
                                    value={filterRole}
                                    onChange={handleRoleFilterChange}
                                >
                                    <option value='All'>ทั้งหมด</option>
                                    <option value='Employee'>พนักงาน</option>
                                    <option value='Supervisor'>ผู้ดูแลสาขา</option>
                                    <option value='Bankmanager'>ผู้จัดการ</option>
                                </select>
                                <label className='ml-4 mr-2'>สาขา:</label>
                                <select
                                    className='border border-gray-300 px-3 py-1 rounded-md'
                                    value={filterBranchID}
                                    onChange={handleBranchFilterChange}
                                >
                                    <option value='All'>ทั้งหมด</option>
                                    <option value='BR1097'>พุทธบูชา</option>
                                    <option value='BR1146'>บ้านสวนธน</option>
                                    <option value='BR1387'>ประชาอุทิศ</option>
                                </select>
                            </div>
                        </div>
                        <table className='min-w-full divide-y divide-gray-200 text-black'>
                            <thead className='bg-gray-50'>
                                <tr>
                                    <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>ชื่อ</th>
                                    <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>สกุล</th>
                                    <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>สาขา</th>
                                    <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>ตำแหน่ง</th>
                                    <th className='px-6 py-3 text-left text-lg font-medium uppercase tracking-wider'>จัดการ</th>
                                </tr>
                            </thead>
                            <tbody className='bg-white divide-y divide-gray-200 text-left'>
                                {currentItems.map((employee, index) => (
                                    <tr key={index}>
                                        <td className='px-6 py-4 whitespace-nowrap'>{employee.FirstName}</td>
                                        <td className='px-6 py-4 whitespace-nowrap'>{employee.LastName}</td>
                                        <td className='px-6 py-4 whitespace-nowrap'>{employee.BranchName} ({employee.BranchID})</td>
                                        <td className='px-6 py-4 whitespace-nowrap'>{roleTranslation[employee.Role]}</td>
                                        <td className='px-6 py-4 whitespace-nowrap text-slate-600 underline cursor-pointer'
                                            onClick={() => handleSelectedEmployee(employee)}>แก้ไข</td>
                                    </tr>
                                ))}
                                {currentItems.length === 0 && (
                                    <tr>
                                        <td colSpan="5" className='px-6 py-4 whitespace-nowrap text-center'>ไม่มีข้อมูลพนักงานที่ตรงกับเงื่อนไข</td>
                                    </tr>
                                )}
                                <tr>
                                    <td colSpan="5" className='px-6 py-2 whitespace-nowrap text-center cursor-pointer hover:bg-slate-100'>
                                        <div className='flex w-full justify-center gap-1 text-lg text-slate-600'>
                                            <p className='my-auto'>เพิ่ม</p>
                                            <IoMdAddCircleOutline className='my-auto' />
                                        </div>
                                    </td>
                                </tr>
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
                                    className={`bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md ${currentItems.length < itemsPerPage ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}
                                    disabled={currentItems.length < itemsPerPage}
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

export default BmgViewEmployee;
