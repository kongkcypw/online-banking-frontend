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
    const [previousMonth, setPreviousMonth] = useState();

    useEffect(() => {
        fetchTransactionData();
        getPreviousMonth();
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

    const getThaiMonthName = (month) => {
        const thaiMonths = [
            "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
            "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
        ];
        return thaiMonths[month];
    };

    const getPreviousMonth = () => {
        const currentDate = new Date();
        const latest6Months = [];
        for (let i = 0; i < 6; i++) {
            let month = currentDate.getMonth() - i;
            let year = currentDate.getFullYear();
            if (month < 0) {
                month += 12;
                year--;
            }
            const thaiMonthName = getThaiMonthName(month);
            const yearString = (parseInt(year) + 543).toString().slice(-2);
            const dateString = `${thaiMonthName} ${yearString}`;
            latest6Months.push(dateString);
        }
        setPreviousMonth(latest6Months);
    }

    return (
        <div className="-mt-2">
            {(transactionData && previousMonth)
                ? <div>
                    <UserInfoStatement info={userAccountInfo} />
                    <StatmentList
                        transactionData={transactionData}
                        previousMonth={previousMonth} />
                </div>
                : <Loading />
            }
        </div>
    )
}
export default Statement;