import React from "react";
import Amount from "../Components/Overall/Amount";
import AllTransaction from "../Components/Overall/AllTransaction";
import AlertModal from "../Components/Global/AlertModal";
import useAuth from "../hooks/useAuth";

const Overall = () => {

    const { userAccountInfo } = useAuth();

    return(
        <div className="h-screen">
            <Amount info={userAccountInfo}/>
            <AllTransaction/>
            {/* <AlertModal/> */}
        </div>
    )
}
export default Overall;