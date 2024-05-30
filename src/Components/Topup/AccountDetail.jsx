import React, { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";

const AccountDetail = ({ info }) => {

    const { userAccountInfo, getAccountInfo } = useContext(UserContext);

    useEffect(() => {
        if (userAccountInfo === null) {
            getAccountInfo();
        }
    }, [userAccountInfo])

    return (
        <div>
            {userAccountInfo ?
                <div><p className='text-orange-400 text-md text-left'>จาก</p>
                    <div className='bg-white rounded-lg px-4 py-4 mt-2'>
                        <p className='text-left font-bold text-lg'>{userAccountInfo.FirstName} {userAccountInfo.LastName}</p>
                        <div className='flex gap-x-2 text-sm'>
                            <p>เลขบัญชี</p>
                            <p>XXX-X-X{userAccountInfo.AccountNumber.slice(5, 9)}-X</p>
                        </div>
                        <p className='mt-2 text-2xl font-bold text-left'>{userAccountInfo.Balance}</p>
                    </div></div>
                : null}

        </div>
    )
}

export default AccountDetail;