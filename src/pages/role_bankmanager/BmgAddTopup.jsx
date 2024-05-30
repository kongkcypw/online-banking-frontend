import React, { useEffect, useState } from 'react'
import SpvSidebar from '../../Components/Layout/SpvSidebar'
import { AiOutlineMinus } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import BmgSidebar from '../../Components/Layout/BmgSidebar';

const BmgAddTopup = () => {

    const [serviceName, setServiceName] = useState("");
    const [serviceType, setServiceType] = useState("");

    const [imageLink, setImageLink] = useState("");
    const [displayImage, setDisplayImage] = useState(false);

    const [requireAmount, setRequireAmount] = useState(1);
    const [requireArray, setRequireArray] = useState([{
        label: "",
        require: "",
        length: "",
        minimumAmount: ""
    }])

    const handleRequireAmount = (direction) => {
        if (direction === "add") {
            let currentNumber = requireAmount;
            currentNumber = currentNumber + 1;
            setRequireAmount(currentNumber)
            const newArray = [...requireArray, { label: "", require: "", length: "", minimumAmount: "" }];
            setRequireArray(newArray)
        }
        else if (direction === "minus" && requireAmount > 1) {
            let currentNumber = requireAmount;
            currentNumber = currentNumber - 1;
            setRequireAmount(currentNumber)
            const newArray = requireArray.slice(0, -1);
            setRequireArray(newArray);
        }
    }

    const handleChangeRequireInput = (index, field, value) => {
        const newArray = requireArray.map((item, i) => {
            if (i === index) {
                return { ...item, [field]: value };
            }
            return item;
        });
        setRequireArray(newArray);
    }

    const handleSaveButton = async () => {
        console.log(serviceName);
        console.log(serviceType);
        console.log(imageLink);
        console.log(requireArray);
    }

    return (
        <div className='absolute bg-[#F7F7F8] w-full min-h-screen start-0 top-0'>
            <div className='flex'>
                <BmgSidebar />
                <div className='ml-8 w-full'>
                    <div className='text-left p-12'>
                        <p className='text-3xl font-semibold'>เพิ่มบริการเติมเงิน</p>
                        <p className='pt-2 text-lg'>เพิ่มช่องทางการเติมเงินให้กับลูกค้า</p>

                        <div className='bg-white text-center text-xl max-w-6xl p-8 mt-8'>
                            <div className='grid grid-cols-10 gap-12'>
                                <div className='col-span-5 flex gap-4'>
                                    <span className='min-w-fit'>ชื่อบริการเติมเงิน</span>
                                    <input
                                        type='text'
                                        className='border-2 w-full px-4'
                                        onChange={(e) => setServiceName(e.target.value)}
                                        placeholder='ทรูมันนี่ วอลเล็ต'
                                    />
                                </div>
                                <div className='col-span-5 flex gap-4'>
                                    <span className='min-w-fit'>ประเภท</span>
                                    <input
                                        type='text'
                                        className='border-2 w-full px-4'
                                        onChange={(e) => setServiceType(e.target.value)}
                                        placeholder='e-wallet'
                                    />
                                </div>
                            </div>

                            <div className='flex gap-4 pt-8'>
                                <span className='min-w-fit mr-8 my-auto'>รูปภาพ(โลโก้)</span>
                                <input
                                    type='text'
                                    className='border-2 w-full px-4'
                                    onChange={(e) => setImageLink(e.target.value)}
                                    placeholder='ระบุ URL(Link)'
                                />
                                <span className='min-w-fit px-4 py-1 cursor-pointer bg-orange-400 text-white' onClick={() => setDisplayImage(!displayImage)}>
                                    {displayImage === true ? "ซ่อนภาพตัวอย่าง" : "แสดงภาพตัวอย่าง"}
                                </span>
                            </div>

                            {displayImage &&
                                <div className='w-full pt-8'>
                                    <img src={imageLink} className='mx-auto border rounded-full w-48 h-48' />
                                </div>}

                            <div className='col-span-4 text-left flex pt-8 pb-4'>
                                <p>จำนวนตัวเลขสำคัญที่ต้องระบุ</p>
                                <div className='h-7 flex my-auto ml-4'>
                                    <AiOutlineMinus className='h-full w-6 my-auto border-2 text-slate-600 cursor-pointer'
                                        onClick={() => handleRequireAmount("minus")} />
                                    <span className='h-full border-t-2 border-b-2 px-4 my-auto'>{requireAmount}</span>
                                    <IoMdAdd className='h-full w-6 my-auto border-2 text-slate-600 cursor-pointer'
                                        onClick={() => handleRequireAmount("add")} />
                                </div>
                            </div>

                            {requireArray.map((data, index) => (
                                <div key={index} className='py-4'>
                                    <div className='grid grid-cols-12'>
                                        <div className='col-span-6 flex gap-8'>
                                            <p className='min-w-fit'>คำอธิบาย(ภาษาไทย)</p>
                                            <input
                                                type='text'
                                                className='border-2 px-2'
                                                placeholder='หมายเลขเบอร์มือถือ 10 หลัก'
                                                value={data.label}
                                                onChange={(e) => handleChangeRequireInput(index, 'label', e.target.value)}
                                            />
                                        </div>
                                        <div className='col-span-6 flex gap-6'>
                                            <p className='min-w-fit'>คำจำกัดความ(ภาษาอังกฤษ)</p>
                                            <input
                                                type='text'
                                                className='border-2 px-2'
                                                placeholder='PhoneNumber'
                                                value={data.require}
                                                onChange={(e) => handleChangeRequireInput(index, 'require', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-12 pt-2'>
                                        <div className='col-span-6 flex gap-[14px]'>
                                            <p className='min-w-fit'>ความยาวเลขที่ต้องระบุ</p>
                                            <input
                                                type='text'
                                                className='border-2 px-2'
                                                placeholder='10, 15'
                                                value={data.length}
                                                onChange={(e) => handleChangeRequireInput(index, 'length', e.target.value)}
                                            />
                                        </div>
                                        <div className='col-span-6 flex gap-[10px]'>
                                            <p className='min-w-fit'>จำนวนเงินขั้นต่ำในการเติมเงิน</p>
                                            <input
                                                type='text'
                                                className='border-2 px-2'
                                                placeholder='100, 200'
                                                value={data.minimumAmount}
                                                onChange={(e) => handleChangeRequireInput(index, 'minimumAmount', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className='flex justify-center pt-8 gap-4'>
                                <button className='border-2 border-orange-400 text-orange-400 px-4 py-2'>
                                    <span>ยกเลิก</span>
                                </button>
                                <button className='bg-orange-400 text-white px-4 py-2' onClick={handleSaveButton}>
                                    <span>ยืนยัน</span>
                                </button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BmgAddTopup