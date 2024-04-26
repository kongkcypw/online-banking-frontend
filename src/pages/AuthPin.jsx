import React, { useState, useEffect, useContext, useLayoutEffect } from 'react'
import { useDataFetch } from '../hooks/useDataFetch';
import { UserContext } from '../contexts/userContext';
import Loading from '../Components/Global/Loading';

const AuthPin = () => {

    const { isAuthPinSuccess, setIsAuthPinSuccess, storeToken, authTokenInStorage, authNewToken } = useContext(UserContext);

    const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();

    const [pin, setPin] = useState('');

    useEffect(() => {
        authTokenInStorage();
    }, [])

    const handleClick = async () => {
        const localStorageData = JSON.parse(window.localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_NAME));

        // Auth Pin
        const bodyParams = {
            email: localStorageData.email,
            pin: pin
        }
        const auth_pin_response = await POST_DATA_WITH_BODYPARAMS('/login/pin', bodyParams);
        console.log(auth_pin_response);

        // Auth token
        authNewToken(auth_pin_response.token);
    }

    return (
        <div className='text-white'>
            {isAuthPinSuccess === null 
            ? <Loading /> 
            : <>
                    <p className="block text-lg text-left font-medium">Pin</p>
                    <input
                        type="text"
                        id="pin"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="ระบุ pin"
                    />
                    <button onClick={handleClick}>ยืนยัน</button>
                </>
            }
        </div>
    )
}

export default AuthPin