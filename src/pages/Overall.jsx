import React from "react";
import Amount from "../Components/Overall/Amount";
import AllTransaction from "../Components/Overall/AllTransaction";
import AlertModal from "../Components/Global/AlertModal";

const Overall =()=>{
    return(
        <div className="h-screen">
            <Amount/>
            <AllTransaction/>
            {/* <AlertModal/> */}
        </div>
    )
}
export default Overall;