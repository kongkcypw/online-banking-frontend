import React, { useState } from 'react';
import { IoCloseCircle } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RiDeleteBin6Fill } from "react-icons/ri";

const EmployeeModal = ({ selectedEmployee, closeModal, branchList }) => {
    const [editedEmployee, setEditedEmployee] = useState({ ...selectedEmployee });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedEmployee({
            ...editedEmployee,
            [name]: value,
        });
    };

    const handleDateChange = (date) => {
        setEditedEmployee({
            ...editedEmployee,
            Birth: date,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add your logic to update the employee data
        console.log('Updated Employee:', editedEmployee);
        // After updating, you can close the modal
        closeModal();
    };

    const roleTranslation = {
        Employee: 'พนักงาน',
        Supervisor: 'ผู้ดูแลสาขา',
        Bankmanager: 'ผู้จัดการ',
    };

    return (
        <div>
            <div className='fixed flex start-0 top-0 justify-center z-20 bg-black bg-opacity-30 h-screen w-full '>
                <div className='relative bg-white rounded-lg max-w-4xl min-h-[40vh] w-full my-auto p-8'>
                    <div className='flex justify-between pb-4 border-b-2'>
                        <p className='text-xl font-semibold'>ตรวจสอบและแก้ไขข้อมูลพนักงาน</p>
                        <IoCloseCircle onClick={closeModal} className='text-2xl cursor-pointer' />
                    </div>
                    <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-8'>
                        <div>
                            <div className='mt-4 flex items-center'>
                                <label htmlFor='firstName' className='block mb-2 text-lg font-medium mr-4'>ชื่อ</label>
                                <input
                                    type='text'
                                    id='firstName'
                                    name='FirstName'
                                    value={editedEmployee.FirstName}
                                    onChange={handleChange}
                                    className='border border-gray-300 px-3 py-2 rounded-md w-full'
                                />
                            </div>
                            <div className='mt-4 flex items-center'>
                                <label htmlFor='email' className='block mb-2 text-lg font-medium mr-4'>อีเมล</label>
                                <input
                                    type='email'
                                    id='email'
                                    name='Email'
                                    value={editedEmployee.Email}
                                    onChange={handleChange}
                                    className='border border-gray-300 px-3 py-2 rounded-md w-full'
                                />
                            </div>
                            <div className='mt-4 flex items-center'>
                                <label htmlFor='address' className='block mb-2 text-lg font-medium mr-4 min-w-fit'>ที่อยู่</label>
                                <input
                                    type='text'
                                    id='address'
                                    name='Address'
                                    value={editedEmployee.Address}
                                    onChange={handleChange}
                                    className='border border-gray-300 px-3 py-2 rounded-md w-full'
                                />
                            </div>
                            <div className='mt-4 flex items-center'>
                                <label htmlFor='branchID' className='block mb-2 text-lg font-medium mr-4'>สาขา</label>
                                <select
                                    id='branchID'
                                    name='BranchID'
                                    value={editedEmployee.BranchID}
                                    onChange={handleChange}
                                    className='border border-gray-300 px-3 py-2 rounded-md w-full'
                                >
                                    <option value=''>เลือกสาขา</option>
                                    {branchList.map(branch => (
                                        <option key={branch.BranchID} value={branch.BranchID}>
                                            {branch.Name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className='mt-4 flex items-center'>
                                <label htmlFor='lastName' className='block mb-2 text-lg font-medium mr-4'>สกุล</label>
                                <input
                                    type='text'
                                    id='lastName'
                                    name='LastName'
                                    value={editedEmployee.LastName}
                                    onChange={handleChange}
                                    className='border border-gray-300 px-3 py-2 rounded-md w-full'
                                />
                            </div>
                            <div className='mt-4 flex items-center'>
                                <label htmlFor='birthdate' className='block mb-2 text-lg font-medium mr-4'>วันเกิด</label>
                                <DatePicker
                                    id='birthdate'
                                    selected={new Date(editedEmployee.Birth)}
                                    onChange={handleDateChange}
                                    dateFormat='yyyy-MM-dd'
                                    className='border border-gray-300 px-3 py-2 rounded-md w-full'
                                />
                            </div>
                            <div className='mt-4 flex items-center'>
                                <label htmlFor='role' className='block mb-2 text-lg font-medium mr-4'>ตำแหน่ง</label>
                                <select
                                    id='role'
                                    name='Role'
                                    value={editedEmployee.Role}
                                    onChange={handleChange}
                                    className='border border-gray-300 px-3 py-2 rounded-md w-full'
                                >
                                    <option value='Employee'>พนักงาน</option>
                                    <option value='Supervisor'>ผู้ดูแลสาขา</option>
                                    <option value='Bankmanager'>ผู้จัดการ</option>
                                </select>
                            </div>
                        </div>
                        <div className='mt-8 col-span-2 flex justify-between'>
                        <button
                                type='submit'
                                className='bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-md'
                            >
                                <div className='flex'>
                                    <p>ลบข้อมูล</p>
                                    <RiDeleteBin6Fill className='my-auto ml-1'/>
                                </div>
                                
                            </button>
                            <button
                                type='submit'
                                className='bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md'
                            >
                                บันทึก
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmployeeModal;
