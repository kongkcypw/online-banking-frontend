import React from "react";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";


const TopUpChoice = ({ TopupData }) => {

    const navigate = useNavigate();

    const uniqueGroupTypes = Array.from(new Set(TopupData.map(item => item.Type)));

    const handleClick = (TopupID) => {
        navigate(`/payment/${TopupID}`)
    }

    return (
        <div className="mt-6">
            <div className="w-auto mx-6 border-2 border-orange-300 rounded-md flex items-center">
                <GoSearch className="text-xl mx-2 text-slate-500" />
                <input placeholder="ค้นหา" className="text-xl w-full focus:outline-none py-1"
                />
            </div>
            <div className="mt-4 w-auto flex-col justify-center mx-4">
                {uniqueGroupTypes.map((group, index) => (
                    <div key={index}>
                        <div key={index} className="bg-orange-300 rounded-md">
                            {group}
                        </div>
                        <ul>
                            {TopupData.filter(item => item.Type === group)
                                .map((item, itemIndex) => (
                                    <div key={itemIndex} onClick={() => handleClick(item.TopupID)} className="text-left flex items-center py-2 border-b border-gray-200 gap-x-4 hover:bg-slate-200">
                                        <div className="border border-slate-300 bg-white h-11 w-11 rounded-full flex justify-center items-center">
                                            <img className="h-auto w-auto rounded-full" src={item.Image} />
                                        </div>
                                        <div>
                                            <div key={itemIndex} >
                                                {item.Name}
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