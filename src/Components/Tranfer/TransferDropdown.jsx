import React, { useContext } from "react";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { PaymentContext } from "../../contexts/paymentContext";

const TransferDropdown = ({ bankData }) => {

    const { payDestinationInfo, setDestinationInfo } = useContext(PaymentContext);

    const [isOpen, setIsOpen] = useState(false);
    const [selectOption, setSelectOption] = useState(payDestinationInfo ? payDestinationInfo["BankName"] : null);
    const [selectLogo, setSelectLogo] = useState(payDestinationInfo ? payDestinationInfo["Image"] : null);
    
    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (image, bankName, bankID) => () => {
        setSelectLogo(image)
        setSelectOption(bankName);
        setIsOpen(false);
        setDestinationInfo(prevState => ({
            ...prevState,
            ["Image"]: image,
            ["BankName"]: bankName,
            ["BankID"]: bankID
        }));
    }

    return (
        <div className="relative flex mx-2 w-auto ">
            <button onClick={toggling}
                className="p-2 flex border-2 min-h-14 border-gray-300 rounded-lg justify-between items-center w-full bg-white hover:bg-gray-200 duration-50 ">
                <div className="flex items-center gap-2">
                    <img
                        className="max-h-10 max-w-10 rounded-full"
                        src={selectLogo} />
                    <p className={`${isOpen ? 'text-black': 'text-slate-500'}`}>{selectOption || 'เลือกธนาคาร'}</p>
                </div>
                {!isOpen ? (
                    <MdKeyboardArrowDown className="text-2xl" />
                ) : (
                    <MdKeyboardArrowUp className="text-2xl" />
                )}
            </button>
            {isOpen &&
                <div className=" absolute bg-white top-16 w-full left-0 max-h-60 border-2 overflow-y-auto">
                    {bankData.map((item, index) => (
                        <button key={index} onClick={onOptionClicked(item.Logo,item.Name, item.BankID)}
                            className="flex p-2 justify-between items-center w-full bg-white hover:bg-orange-200 duration-100 rounded-md">
                            <div className="flex items-center gap-2">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src={item.Logo} />
                                <p>{item.Name}</p>
                            </div>
                        </button>
                    ))}
                </div>
            }
        </div>
    )
}
export default TransferDropdown;