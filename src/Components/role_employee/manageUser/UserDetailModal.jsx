import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { MdDeleteOutline, MdEdit } from "react-icons/md";

const UserDetailModal = ({ closeModal, selectedUser, handleEdit, handleDelete }) => {

    console.log(selectedUser);

    return (
        <div>
            <div className='fixed flex start-0 top-0 justify-center z-20 bg-black bg-opacity-30 h-screen w-full'>
                <div className='relative bg-white rounded-lg max-w-4xl min-h-[60vh] w-full my-auto pb-8'>
                    <div className='flex justify-between items-center border-b border-slate-400 w-full px-6 py-2'>
                        <p className='text-xl'>รายละเอียดข้อมูล</p>
                        <div className='text-black cursor-pointer' onClick={closeModal}>
                            <RxCross2 className='text-xl' />
                        </div>
                    </div>
                    <div className='py-8 px-24 grid grid-cols-3'>
                        <div className='col-span-1 font-bold text-xl '>
                            <p className='my-3'>Account Id</p>
                            <p className='my-3'>User Id</p>
                            <p className='my-3'>เลขบัญชี</p>
                            <p className='my-3'>ชื่อ-นามสกุล</p>
                            <p className='my-3'>วันที่เปิดบัญชี</p>
                            <p className='my-3'>E-mail</p>
                            <p className='my-3'>เลขบัตรประชาชน</p>
                            <p className='my-3'>เบอร์โทรศัพท์</p>
                        </div>
                        <div className='col-span-2 font-medium text-xl text-slate-500'>
                            <p className='my-3'>{selectedUser.AccountID}</p>
                            <p className='my-3'>{selectedUser.UserID}</p>
                            <p className='my-3'>{selectedUser.AccountNumber}</p>
                            <p className='my-3'>{selectedUser.FirstName} {selectedUser.LastName}</p>
                            <p className='my-3'>{selectedUser.DateOpen}น.</p>
                            <p className='my-3'>{selectedUser.Email}</p>
                            <p className='my-3'>{selectedUser.IdCard}</p>
                            <p className='my-3'>{selectedUser.PhoneNumber}</p>
                        </div>
                        <div className='col-span-1 font-bold text-xl'>
                            <p className='my-3'>จำนวนเงินในบัญชี</p>
                        </div>
                        <div className='col-span-2 font-medium text-xl text-slate-500'>
                            <p className='my-3'>{selectedUser.Balance} บาท</p>
                        </div>
                    </div>
                    <p className='text-red-600 ms-24 -mt-6'>คำเตือน: กรุณาตรวจสอบให้แน่ใจว่าไม่มีเงินอยู่ในบัญชีเเล้วเมื่อต้องการที่จะลบบัญชี</p>
                    <div className='flex justify-center w-auto mt-4'>
                        <div className='flex items-center text-white font-medium rounded-md px-5 py-2 bg-red-500 mr-4 cursor-pointer' onClick={() => handleDelete(selectedUser.AccountID)}>
                            <MdDeleteOutline className='mr-2' />
                            <p>ลบบัญชี</p>
                        </div>
                        <div className='flex items-center text-white font-medium rounded-md px-5 py-2 bg-blue-500 cursor-pointer' onClick={() => handleEdit(selectedUser)}>
                            <MdEdit className='mr-2' />
                            <p>แก้ไข</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetailModal;
