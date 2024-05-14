import React from "react";
import Amount from "../Components/Overall/Amount";
import AllTransaction from "../Components/Overall/AllTransaction";
import AlertModal from "../Components/Global/AlertModal";
import useAuth from "../hooks/useAuth";
import Loading from "../Components/Global/Loading";

const Overall = () => {

    const { userAccountInfo } = useAuth();

    return (
        <div className="h-screen">
            {(userAccountInfo)
                ? <div>
                    <Amount info={userAccountInfo} />
                    <AllTransaction />
                </div>
                : <Loading />}
        </div>
    )

}
export default Overall;