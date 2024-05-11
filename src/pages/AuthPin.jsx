import React, { useState, useEffect, useContext } from 'react'
import { useDataFetch } from '../hooks/useDataFetch';
import { UserContext } from '../contexts/userContext';
import Loading from '../Components/Global/Loading';
import Numpad from '../Components/Pin/Numpad';
import PinCounter from '../Components/Pin/PinCounter';
import AlertModal from '../Components/Global/AlertModal';
import ForgotPin from '../Components/Pin/ForgotPin';

const AuthPin = () => {

    const { isAuthPinSuccess, authTokenInStorage, authNewToken } = useContext(UserContext);

    const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();

    const [pin, setPin] = useState('');
    const [warning, setWarning] = useState(false);
    const [warningMessage, setWarningMessage] = useState('');

    useEffect(() => {
        authTokenInStorage();
    }, [])

    const handleAuthPin = async () => {
        const localStorageData = JSON.parse(window.localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_NAME));

        // Auth Pin
        const bodyParams = {
            email: localStorageData.email,
            pin: pin
        }
        const auth_pin_response = await POST_DATA_WITH_BODYPARAMS('/login/pin', bodyParams);

        if (auth_pin_response.status === 200) {
            // Auth token
            authNewToken(auth_pin_response.token);
            setWarning(false);
        }
        else if (auth_pin_response.status === 201) {
            setWarningMessage('กรุณาเข้าสู่ระบบด้วยอีเมลก่อน');
            setWarning(true)
            setPin('');
        }
        else if (auth_pin_response.status === 202) {
            setWarningMessage('กรุณากรอก PIN ให้ครบ');
            setWarning(true)
            setPin('');
        }
        else if (auth_pin_response.status === 203) {
            setWarningMessage('PIN ไม่ถูกต้อง');
            setWarning(true)
            setPin('');
        }
    }

    const handleNumpadClick = (number) => {
        if (number !== 10) {
            const totalPin = pin + JSON.stringify(number);
            setPin(totalPin)
        }
        else {
            if (pin.length > 0) {
                const totalPin = pin.replace(/.$/, '');;
                setPin(totalPin);
            }
        }
    }

    useEffect(() => {
        if (pin && pin.length >= 6) {
            handleAuthPin();
        }
    }, [pin])

    return (
        <div className='text-white'>
            {isAuthPinSuccess === null
                ? <Loading />
                : <>
                    <p className="text-center text-2xl font-medium pt-14">กรุณาใส่รหัสผ่าน</p>
                    <PinCounter fillAmount={pin.length} />
                    <Numpad handleNumpadClick={handleNumpadClick} />
                    <ForgotPin />
                </>
            }
            {warning === true ?
                <AlertModal
                    isDisplay={warning}
                    headerMessage={`ขออภัย ${warningMessage}`}
                    bodyMassage={"โปรดระบุ PIN ของท่านอีกครั้ง"}
                    handleCancle={() => setWarning(false)}
                    handleOk={() => setWarning(false)} 
                    className="text-black"/>
                : null}
        </div>
    )
}

export default AuthPin