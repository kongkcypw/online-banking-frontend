import React, { createContext, useState } from 'react'
const PaymentContext = createContext();

const PaymentProvider = ({ children }) => {

    // URL Param
    const [payType, setPayType] = useState(null);
    const [payDestID, setPayDestID] = useState(null);
    // DB SQL
    const [payDestinationInfo, setDestinationInfo] = useState(null);
    const [payRequireInfo, setPayRequireInfo] = useState(null);
    // User input
    const [payRequireInput, setPayRequireInput] = useState({});
    const [payAmount, setPayAmount] = useState(0.00);
    const [payDescription, setPayDescription] = useState("");

    const value = {
        // URL
        payType,
        payDestID,
        setPayType,
        setPayDestID,
        // DB
        payDestinationInfo,
        payRequireInfo,
        setDestinationInfo,
        setPayRequireInfo,
        // User 
        payRequireInput,
        payAmount,
        payDescription,
        setPayRequireInput,
        setPayAmount,
        setPayDescription
    }

    return (
        <PaymentContext.Provider value={value}>
            {children}
        </PaymentContext.Provider>
    )
}

export { PaymentProvider, PaymentContext }