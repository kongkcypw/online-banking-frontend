import { useContext, useEffect } from "react"
import { UserContext } from "../../contexts/userContext"

const UserInfo = () => {

    const { userAccountInfo, getAccountInfo } = useContext(UserContext)

    useEffect(() => {
        if (userAccountInfo === null) {
            getAccountInfo();
        }
    }, [userAccountInfo])

    return (
        <div>
            {userAccountInfo ?
                <div className='text-black text-left'>
                    <p className='border-2 rounded bg-white border-white px-4 py-4'>
                        <p className=' text-lg font-bold'> {userAccountInfo.FirstName} {userAccountInfo.LastName} </p>
                        <p className='text-sm'>XXX-X-X{userAccountInfo.AccountNumber.slice(5, 9)} </p>
                        <p className='text-2xl font-bold mt-2'> {userAccountInfo.Balance} บาท</p>
                    </p>
                </div>
                : null}
        </div>

    )
}

export default UserInfo