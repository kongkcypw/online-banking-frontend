import React from "react";
import { GoSearch } from "react-icons/go";


const TopUpChoice = ({ TopUpData }) => {
    const uniqueGroupTypes = Array.from(new Set(TopUpData.map(item => item.TopUpType)));
    return (
        <div className="mt-6">
            <div className="w-auto mx-6 border-2 border-orange-300 rounded-md flex items-center">
                <GoSearch className="text-xl mx-2 text-slate-500" />
                <input placeholder="ค้นหา" className="text-xl w-full focus:outline-none py-1"
                />
            </div>
            <div className="mt-4 w-auto flex-col justify-center mx-4">
                {uniqueGroupTypes.map((group, index) => (
                    <div>
                        <div key={index} className="bg-orange-300 rounded-md">
                            {group}
                        </div>
                        <ul>
                            {TopUpData.filter(item => item.TopUpType === group)
                                .map((item, itemIndex) => (
                                    <div className="text-left flex items-center py-2 border-b border-gray-200 gap-x-4 hover:bg-slate-200">
                                        <div className="border border-slate-300 bg-white h-11 w-11 rounded-full flex justify-center items-center">
                                            <img className="h-auto w-auto rounded-full" src={item.TopUpImage} />
                                        </div>
                                        <div>
                                            <div key={itemIndex} >
                                                {item.TopUpName}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default TopUpChoice;