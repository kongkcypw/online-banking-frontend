import React, { useState, useEffect, useContext } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { DatePicker, Space } from 'antd';
import { RegisterContext } from '../../contexts/registerContext';
import { useDataFetch } from '../../hooks/useDataFetch';
import { useNavigate } from 'react-router-dom';

const RegisterAccount = () => {

    const navigate = useNavigate();

    const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();
    const { setStateSecondRegPage,
        regIdCard,
        regBirth,
        regAddress,
        regBalance,
        regSelectCheckbox,
        regLatitude,
        regLongitude } = useContext(RegisterContext);

    const [IDCard, setIDCard] = useState(regIdCard);
    const [birth, setBirth] = useState(regBirth);
    const [address, setAddress] = useState(regAddress);
    const [customAmount, setCustomAmount] = useState(regBalance);

    const [latitude, setLatitude] = useState(regLatitude);
    const [longitude, setLongitude] = useState(regLongitude);

    // State to track which checkbox is checked, 'none', 'first', or 'second'
    const [selectedCheckbox, setSelectedCheckbox] = useState(regSelectCheckbox || 'first');

    const [warning, setWarning] = useState(false);
    const [warningMessage, setWaringMessage] = useState(null);

    useEffect(() => {
        getUserLocation();
    }, [])

    const getUserLocation = async () => {
        navigator.geolocation.watchPosition(function (position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
    }

    // Function to handle checkbox selection
    const handleCheckboxChange = (checkboxId) => {
        if (selectedCheckbox === checkboxId) {
            setSelectedCheckbox('none');  // If same checkbox is clicked again, deselect it
        } else {
            setSelectedCheckbox(checkboxId);
        }
    };
    const handleInputChange = (event, setState) => {
        setState(event.target.value);
    };

    const handleDateChange = (date, dateString) => {
        setBirth(dateString);
    };

    const handleSubmit = async () => {
        if (latitude || longitude === null) {
            await getUserLocation();
        }
        let balance;
        if (selectedCheckbox === 'second') {
            balance = customAmount
        }
        else {
            balance = 500.00
        }
        let bodyParams = {
            idCard: IDCard,
            birth: birth,
            address: address,
            balance: balance,
            latitude: latitude,
            longitude: longitude,
            selectedCheckbox: selectedCheckbox
        }
        const response = await POST_DATA_WITH_BODYPARAMS('/register/account', bodyParams);
        if (response.status === 200) {
            bodyParams.closestBranchID = response.branch.closestBranchID
            bodyParams.branchNumber = response.branch.branchNumber
            setStateSecondRegPage(bodyParams);
            navigate("/register/confirm")
        }
        else if (response.status === 201) {
            setWaringMessage("กรุณากรอกข้อมูลให้ครบถ้วน");
            await getUserLocation();
            setWarning(true);
        }
        else if (response.status === 202) {
            setWaringMessage("ขออภัย คุณอายุต่ำกว่า 12 ปี ไม่สามารถเปิดบัญชีได้");
            setWarning(true);
        }

    };

    const inputFieldStyling = `w-full bg-transparent border-b-2 mt-1 block py-2 focus:outline-none focus:ring-indigo-500 focus:border-orange-400`

    return (
        <div className='text-black min-h-screen'>
            <p className='text-xl px-2 font-bold text-left -mt-4 text-white'>เปิดบัญชี eSavings</p>
            <p className='text-xl px-2 font-bold text-left mt-1 text-orange-400'>กรอกข้อมูลส่วนตัว</p>
            <div className='absolute bg-white start-0 w-full px-4 mt-24 min-h-screen'>
                <div className=' bg-white w-full px-2 pb-2 rounded-lg drop-shadow-lg bottom-10 -mt-12'>
                    <div className='pt-4 mx-4'>
                        <input
                            type={"text"}
                            id={"id-number"}
                            className={inputFieldStyling}
                            onChange={(e) => handleInputChange(e, setIDCard)}
                            value={IDCard}
                            placeholder={"เลขบัตรประชาชน"}
                        />
                    </div>

                    <div className='flex pt-4 mx-4 w-full justify-between'>
                        <p className='text-slate-400 my-auto'>วันเกิด</p>
                        <DatePicker onChange={handleDateChange}
                            placeholder='คลิกเพื่อเลือกวัน'
                            className='my-auto mr-8 border-0 font-notoTH text-lg' />
                    </div>
                    <div className='border-[1.5px] mx-4'></div>

                    <div className='pt-4 mx-4'>
                        <input
                            type={"text"}
                            id={"idCard"}
                            className={inputFieldStyling}
                            value={address}
                            onChange={(e) => handleInputChange(e, setAddress)}
                            placeholder="ที่อยู่ปัจจุบัน"
                        />
                    </div>

                    <div className='pt-4 mx-4 flex items-center'>
                        <p className='text-slate-400'>เงินฝากเริ่มต้น</p>
                        <div className="ml-4 relative">
                            {/* Hidden real checkbox */}
                            <input
                                type="checkbox"
                                id="checkbox1"
                                className="opacity-0 absolute h-4 w-4"
                                checked={selectedCheckbox === 'first'}
                                onChange={() => handleCheckboxChange('first')}
                            />
                            {/* Custom styled checkbox */}
                            <div
                                className={`w-4 h-4 rounded-full border-[1.5px] ${selectedCheckbox === 'first' ? 'bg-orange-400 border-slate-400' : 'border-slate-400'}`}
                                onClick={() => handleCheckboxChange('first')}
                                role="checkbox"
                                aria-checked={selectedCheckbox === 'first'}
                                tabIndex={0}
                            ></div>
                        </div>
                        <p className='ml-2 text-slate-400'>500 บาท (ขั้นต่ำ)</p>
                    </div>

                    <div className='pt-2 mx-4 flex items-center'>
                        <div className="ml-[107px] relative">
                            {/* Hidden real checkbox */}
                            <input
                                type="checkbox"
                                id="id-number"
                                className="opacity-0 absolute h-4 w-4"
                                checked={selectedCheckbox === 'second'}
                                onChange={() => handleCheckboxChange('second')}
                            />
                            {/* Custom styled checkbox */}
                            <div
                                className={`w-4 h-4 rounded-full border-[1.5px] ${selectedCheckbox === 'second' ? 'bg-orange-400 border-slate-400' : 'border-slate-400'}`}
                                onClick={() => handleCheckboxChange('second')}
                                role="checkbox"
                                aria-checked={selectedCheckbox === 'second'}
                                tabIndex={0}
                            ></div>
                        </div>
                        <p className='ml-2 text-slate-400'>ระบุจำนวนเงิน</p>
                    </div>

                    {selectedCheckbox === 'second' ?
                        <div className='w-1/2 pt-0 mx-4 flex ml-[122px]'>
                            <input
                                type={"number"}
                                id={"custom-amount"}
                                className={inputFieldStyling}
                                value={customAmount}
                                onChange={(e) => handleInputChange(e, setCustomAmount)}
                            />
                        </div> : null}

                    {warning === true
                        ? <p className='text-orange-400 py-3'>{warningMessage}</p>
                        : <p className='py-3'></p>
                    }

                </div>
                <p className='text-slate-500 text-left px-2 pt-4'>แจ้งเตือน: โปรดระบุวันเกิดตรงตามบัตรประชาชนและระบุที่อยู่ที่อาศัยอยู่ในปัจจุบัน </p>

                <div className='flex absolute max-w-4xl top-[560px] left-8 gap-2' onClick={() => navigate("/register/info")}>
                    <FaArrowLeft className='my-auto bg-orange-400 text-white text-3xl rounded-full p-1' />
                    <span className='font-medium text-slate-600 my-auto'>กลับ</span>
                </div>

                <div className='flex absolute max-w-4xl top-[560px] right-8 gap-2' onClick={() => handleSubmit()}>
                    <span className='font-medium text-slate-600 my-auto'>ต่อไป</span>
                    <FaArrowRight className='my-auto bg-orange-400 text-white text-3xl rounded-full p-1' />
                </div>
            </div>
        </div>
    )
}

export default RegisterAccount