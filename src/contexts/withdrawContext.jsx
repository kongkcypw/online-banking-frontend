import React, { createContext, useState } from 'react'
const WithDrawContext = createContext();

const WithDrawProvider = ({ children }) => {

    const [wdAmount, setWdAmount] = useState(0);
    const [selectAmountButton, setSelectAmountButton] = useState(null);
    const [selectCustomAmount, setSelectCustomAmount] = useState(false);
    const [atmID, setAtmID] = useState(null);
    const [atmDistance, setAtmDistance] = useState(null);
    const [brName, setBrName] = useState(null);
    const [brID, setBrID] = useState(null);
    const [userLat, setUserLat] = useState();
    const [userLong, setUserLong] = useState();
    

    const value = {
        wdAmount,
        brName,
        brID,
        userLat,
        userLong,
        atmID,
        atmDistance,
        selectAmountButton,
        selectCustomAmount,
        setWdAmount,
        setBrName,
        setBrID,
        setUserLat,
        setUserLong,
        setAtmID,
        setAtmDistance,
        setSelectAmountButton,
        setSelectCustomAmount
    }

    return (
        <WithDrawContext.Provider value={value}>
            {children}
        </WithDrawContext.Provider>
    )
}

export { WithDrawProvider, WithDrawContext }