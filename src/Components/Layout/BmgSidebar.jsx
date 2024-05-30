import React from 'react';
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { AiOutlineBank } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdLocalAtm } from "react-icons/md";

const BmgSidebar = () => {
    return (
        <div className="h-screen min-w-64 bg-white text-white flex flex-col drop-shadow-md sticky top-0">
            <div className="flex items-center justify-center h-20 bg-orange-400">
                <img className="h-6" src="https://i.ibb.co/X24jnVh/white-Krungthon-Previous.png" alt="Logo" />
            </div>
            <Link to="/bmg/dashboard">
                <div className='flex px-6 py-4 text-slate-600 hover:bg-slate-100'>
                    <GoHome className='text-3xl' />
                    <p className='my-auto ml-2'>แดชบอร์ด</p>
                </div>
            </Link>
            <Link to="/bmg/view-transaction">
                <div className='flex px-6 py-4 text-slate-600 hover:bg-slate-100'>
                    <HiOutlineDocumentChartBar className='text-3xl' />
                    <p className='my-auto ml-2'>ข้อมูลธุรกรรม</p>
                </div>
            </Link>
            <Link to="/bmg/view/account">
                <div className='flex px-6 py-4 text-slate-600 hover:bg-slate-100'>
                    <GoPeople className='text-3xl' />
                    <p className='my-auto ml-2'>ข้อมูลลูกค้า</p>
                </div>
            </Link>
            <Link to="/bmg/manage/atm">
                <div className='flex px-6 py-4 text-slate-600 hover:bg-slate-100'>
                    <MdLocalAtm className='text-3xl' />
                    <p className='my-auto ml-2'>ข้อมูล ATM</p>
                </div>
            </Link>
            <Link to="/bmg/manage/emp">
                <div className='flex px-6 py-4 text-slate-600 hover:bg-slate-100'>
                    <GoPeople className='text-3xl' />
                    <p className='my-auto ml-2'>ข้อมูลพนักงาน</p>
                </div>
            </Link>
            <Link to="/bmg/manage/other-service">
                <div className='flex px-6 py-4 text-slate-600 hover:bg-slate-100'>
                    <HiOutlineSquares2X2 className='text-3xl' />
                    <p className='my-auto ml-2'>บริการเพิ่มเติม</p>
                </div>
            </Link>
            <Link to="/bmg/manage/branch">
                <div className='flex px-6 py-4 text-slate-600 hover:bg-slate-100'>
                    <MdOutlineLocationOn className='text-3xl' />
                    <p className='my-auto ml-2'>สาขาธนาคาร</p>
                </div>
            </Link>
            <Link to="/bmg/manage/bank">
                <div className='flex px-6 py-4 text-slate-600 hover:bg-slate-100'>
                    <AiOutlineBank className='text-3xl' />
                    <p className='my-auto ml-2'>ธนาคารอื่น ๆ</p>
                </div>
            </Link>
            <Link to="/bmg/dashboard">
                <div className='flex absolute w-full bottom-2 px-6 py-4 text-slate-600 hover:bg-slate-100'>
                    <IoLogOutOutline className='text-3xl' />
                    <p className='my-auto ml-2'>ออกจากระบบ</p>
                </div>
            </Link>
        </div>
    );
};

export default BmgSidebar;
