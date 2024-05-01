import React from "react";

import { GoSearch } from "react-icons/go";

const TopUpChoice = () => {
    return (
        <div className="mt-6">
            <div className="w-auto mx-6 border-2 border-orange-300 rounded-md flex items-center">
                <GoSearch className="text-xl mx-2 text-slate-500"/>
                <input placeholder="ค้นหา" className="text-xl w-full focus:outline-none py-1" 
                />
            </div>
            <div className="mt-4 w-auto flex-col justify-center mx-4">
                <div className="bg-orange-200 rounded-md">
                    e-wallet
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
export default TopUpChoice;