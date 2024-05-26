import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from 'react';

function getThaiDateTime() {

    const thaiDate = new Date().toLocaleDateString("th-TH", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });

    const thaiTime = new Date().toLocaleTimeString("th-TH", {
        hour12: false,
        hour: "numeric",
        minute: "numeric"
    });
    const formatDate = thaiDate.replace(/[0-9]+/, (match) => parseInt(match)) + " " + thaiTime + " น.";
    console.log(formatDate)
    return formatDate;
}

const NotifyComponent = ({ AccountNumber, Amount, datetime }) => {
    return (
        <div className='flex items-center gap-x-2 '>
            <img className='h-12 rounded-lg' src="https://i.ibb.co/C1c2QcN/Krungthon-Previous.png" />
            <div className='text-left'>
                <p className='text-sm font-bold'>รายการเงินออก</p>
                <p className='text-sm'>บัญชี XXX-X-X{AccountNumber.slice(5, 9)}-X จำนวนเงิน {Amount} บาท วันที่ {datetime}</p>
            </div>
        </div>
    )
}

const Notify = ({ AccountNumber, Amount }) => {
    useEffect(() => {
        const date = getThaiDateTime()
        showToastMessage(AccountNumber, Amount, date)
    }, [])

    const showToastMessage = (AccountNumber, Amount, Date) => {
        toast(<NotifyComponent AccountNumber={AccountNumber} Amount={Amount} datetime={Date} />,
            {
                position: "top-center",
                hideProgressBar: true,
                autoClose: 2000,
                pauseOnHover: false,
                draggable: true,
                draggableDirection: "y",
                icon: false,
                closeButton: false,
                background: "black"
            });
    };
    return (
        <div>
            <ToastContainer />
        </div>
    )
}
export default Notify;