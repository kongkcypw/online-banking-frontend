import React, { useEffect, useState } from "react";
import { ImTelegram } from "react-icons/im";

import { FiPlus } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import { useDataFetch } from "../../hooks/useDataFetch";
import EmptyFavorite from "./EmptyFavorite";
import Loading from "../Global/Loading";
import { useNavigate } from "react-router-dom";


const FavPreview = () => {

    const navigate = useNavigate();
    const { userAccountInfo } = useAuth();
    const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();

    const [beneficiaryData, setBeneficiaryData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const bodyParams = {
                accountID: userAccountInfo.AccountID
            }
            setIsLoading(true)
            const response = await POST_DATA_WITH_BODYPARAMS("/favorite/get-favorite", bodyParams);
            console.log(response);
            if (response.status === 200) {
                setBeneficiaryData(response.beneficiary);
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
        }
    }

    return (
        <div className="mt-12">
            <div className="flex border-s-4 border-orange-400">
                <h2 className="font-bold ms-2 text-white font-notoTH">รายการโปรด</h2>
            </div>

            {(beneficiaryData && beneficiaryData.length > 0 && isLoading === false)
                ? <div className="carousel rounded-box mt-4 gap-x-4 flex justify-start">
                    <div className="carousel-item flex-col">
                        {beneficiaryData.map((item, index) => (
                            <div key={index} className="carousel-item flex-col text-wrap">
                                <img src={item.Logo}
                                    className="h-14 w-14 rounded-full" />
                                <h1 className="text-white text-sm mt-2 text-wrap font-notoTH">{item.Name}</h1>
                            </div>
                        ))}
                    </div>
                    <div alt="Burger">
                        <button className="h-14 w-14 border-dashed border-2 border-slate-400 rounded-full flex justify-center items-center"
                                onClick={() => navigate("/favorite")}>
                            <FiPlus className="text-slate-400 text-3xl" />
                        </button>
                    </div>
                </div>
                : <EmptyFavorite />}
            
            {isLoading ? <Loading /> : null}
        </div>
    )
}

export default FavPreview;