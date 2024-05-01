import React from "react";
import Amount from "../Components/Overall/Amount";
import AllTransaction from "../Components/Overall/AllTransaction";

const Overall =()=>{
    return(
        <div className="h-screen">
            <Amount/>
            <AllTransaction/>
        </div>
    )
}
export default Overall;