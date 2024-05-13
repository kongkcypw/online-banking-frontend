import React, { useContext, useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { WithDrawContext } from '../../contexts/withdrawContext';

const AtmDropdown = ({ atmData }) => {

    const {
        brName,
        setBrName,
        setBrID,
        setAtmID,
        setAtmDistance
    } = useContext(WithDrawContext);

    const [isOpen, setIsOpen] = useState(false);
    const [selectOption, setSelectOption] = useState(brName === null ? null : `ตู้ ATM ${brName}`);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (atmID, branchID, branchName, distance) => () => {
        setAtmID(atmID);
        setBrID(branchID);
        setBrName(branchName);
        setAtmDistance(distance);
        const selectedName = `ตู้ ATM ${branchName}`;
        setSelectOption(selectedName);
        setIsOpen(false);
    }

    return (
        <div className="relative flex mx-2 w-auto ">
            <button onClick={toggling}
                className="p-2 flex border-2 min-h-14 border-gray-300 rounded-lg justify-between items-center w-full bg-white hover:bg-gray-200 duration-50 ">
                <div className="flex items-center gap-2">
                    <p className={`${isOpen ? 'text-black' : 'text-slate-500'}`}>{selectOption || 'เลือกสาขาตู้ ATM'}</p>
                </div>
                {!isOpen ? (
                    <MdKeyboardArrowDown className="text-2xl" />
                ) : (
                    <MdKeyboardArrowUp className="text-2xl" />
                )}
            </button>
            {isOpen &&
                <div className=" absolute bg-white top-16 w-full left-0 max-h-20 border-2 overflow-y-auto">
                    {atmData.map((item, index) => (
                        <button key={index} onClick={onOptionClicked(item.ATMID, item.BranchID, item.Name, item.Distance)}
                            className="flex p-2 justify-between items-center w-full bg-white hover:bg-orange-200 duration-100 rounded-md">
                            <div className="flex items-center gap-2 text-black">
                                <p>ตู้ ATM {item.Name}</p>
                                <p>({item.Distance} เมตร)</p>
                            </div>
                        </button>
                    ))}
                </div>
            }
        </div>
    )
}

export default AtmDropdown