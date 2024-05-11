import React from "react";
import UserInfoStatement from "../Components/Statement/UserInfoStatement";
import StatmentList from "../Components/Statement/StatementList";

const Statement =()=>{
    return(
        <div className="-mt-2">
            <UserInfoStatement/>
            <StatmentList/>
        </div>
    )
}
export default Statement;