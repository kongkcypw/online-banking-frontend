import React, { createContext, useState } from 'react'
const RegisterContext = createContext();

const RegisterProvider = ({ children }) => {

    // Register First Page (RegisterUser)
    const [regFirstName, setRegFirstName] = useState("");
    const [regLastName, setRegLastName] = useState("");
    const [regPhoneNumber, setRegPhoneNumber] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [regPassword, setPassword] = useState("");
    
    // Register Second Page (RegisterAccount)
    const [regIdCard, setRegIdCard] = useState("");
    const [regBirth, setRegBirth] = useState("");
    const [regAddress, setRegAddress] = useState("");
    const [regBalance, setRegBalance] = useState(500);
    const [regLatitude, setRegLatitude] = useState()
    const [regLongitude, setRegLongitude] = useState()
    const [regBranchNumber, setRegBranchNumber] = useState();
    const [regClosestBranchID, setRegClosestBranchID] = useState();
    const [regSelectCheckbox, setSelectCheckbox] = useState();

    const setStateFirstRegPage = ( data ) => {
        const { firstname, lastname, phoneNumber, email, password} = data
        setRegFirstName(firstname)
        setRegLastName(lastname)
        setRegPhoneNumber(phoneNumber);
        setRegEmail(email)
        setPassword(password)
    }

    const setStateSecondRegPage = ( data ) => {
        const { idCard, birth, address, balance, latitude, longitude, closestBranchID, branchNumber, selectedCheckbox } = data
        setRegIdCard(idCard)
        setRegBirth(birth)
        setRegAddress(address)
        setRegBalance(balance)
        setRegLatitude(latitude)
        setRegLongitude(longitude)
        setRegBranchNumber(branchNumber)
        setRegClosestBranchID(closestBranchID)
        setSelectCheckbox(selectedCheckbox)
    }

    const value = {
        // First Page
        regFirstName,
        regLastName,
        regPhoneNumber,
        regEmail,
        regPassword,
        // Second Page
        regIdCard,
        regBirth,
        regAddress,
        regBalance,
        regLatitude,
        regLongitude,
        regBranchNumber,
        regClosestBranchID,
        regSelectCheckbox,
        // 
        setStateFirstRegPage,
        setStateSecondRegPage
    }

    return (
        <RegisterContext.Provider value={value}>
            {children}
        </RegisterContext.Provider>
    )
}

export { RegisterProvider, RegisterContext };