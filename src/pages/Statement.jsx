import React, { useEffect, useState } from "react";
import UserInfoStatement from "../Components/Statement/UserInfoStatement";
import StatmentList from "../Components/Statement/StatementList";
import useAuth from "../hooks/useAuth";
import { useDataFetch } from "../hooks/useDataFetch";
import Loading from "../Components/Global/Loading";

const Statement = () => {

    const { userAccountInfo } = useAuth();
    const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();

    const [transactionData, setTransactionData] = useState();

    useEffect(() => {
        fetchTransactionData();
    }, [])

    const fetchTransactionData = async () => {
        try {
            const bodyParams = {
                accountID: userAccountInfo.AccountID
            }
            const response = await POST_DATA_WITH_BODYPARAMS("/statement/get-by-account", bodyParams);
            setTransactionData(response.statement);
        } catch (error) {

        }

    }

    return (
        <div className="-mt-2">
            {transactionData
                ? <div>
                    <UserInfoStatement info={userAccountInfo}/>
                    <StatmentList transactionData={transactionData}/>
                </div>
                : <Loading />
            }
        </div>
    )
}
export default Statement;