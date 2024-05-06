import { createContext, useState, useEffect } from "react";
import { useDataFetch } from "../hooks/useDataFetch";
const UserContext = createContext();

const UserProvider = ({ children }) => {

    const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();

    const [userEmail, setUserEmail] = useState(null);
    const [userID, setUserID] = useState(null);
    const [userToken, setUserToken] = useState(null);
    const [userAccountInfo, setUserAccountInfo] = useState(null);

    const [isLogedIn, setIsLogedIn] = useState(false);
    const [isAuthPinSuccess, setIsAuthPinSuccess] = useState(null);

    // Check current token is expired
    const authTokenInStorage = async() => {
        const data = JSON.parse(window.localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_NAME));
        console.log(data);
        const bodyParams = {
            token: data.token
        }
        const response = await POST_DATA_WITH_BODYPARAMS('/auth/post', bodyParams);
        console.log(response);
        if(response.status === 200) {
            setIsAuthPinSuccess(true);
        }
        else if(response.status === 201) {
            setIsAuthPinSuccess(false);
        }
        else if (response.status === 202) {
            setIsAuthPinSuccess(false);
        }
    }

    // Get new token after pin accurate
    const authNewToken = async(token) => {
        const bodyParams = {
            token: token
        }
        const response = await POST_DATA_WITH_BODYPARAMS('/auth/post', bodyParams);
        console.log(response);
        if(response.status === 200) {
            setIsAuthPinSuccess(true);
            storeToken(token);
        }
        else if(response.status === 201) {
            setIsAuthPinSuccess(false);
        }
        else if (response.status === 202) {
            setIsAuthPinSuccess(false);
        }
    }

    // Check user login (email exist in local storage)
    const checkUserLogin = () => {
        const data = JSON.parse(window.localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_NAME));
        if (data && data.email.length > 0) {
            setIsLogedIn(true);
        }
        else {
            setIsLogedIn(false);
        }
    }

    // Store token to local storage
    const storeToken = (token) => {
        const data = JSON.parse(window.localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_NAME));
        data.token = token;
        window.localStorage.setItem(import.meta.env.VITE_LOCAL_STORAGE_NAME, JSON.stringify(data));
    }

    // Store email to local storage
    const storeUser = (email, userID) => {
        let data = JSON.parse(window.localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_NAME));
        if(data){
            data.email = email;
            data.userID = userID;
        }
        else{
            data = {
                email: email,
                userID: userID,
                token: ''
            }
        }
        window.localStorage.setItem(import.meta.env.VITE_LOCAL_STORAGE_NAME, JSON.stringify(data));
    }

    // Get email and userID
    const getUserLocalStorage = () => {
        let data = JSON.parse(window.localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_NAME));
        if(data){
            setUserEmail(data.email)
            setUserID(data.userID)
            const email = data.email;
            const uid = data.userID
            return {email, uid }
        }
        else{
            return
        }
    }

    // Get Account info (ex. name, accountNumber, balance)
    const getAccountInfo = async() => {
        const { email, uid } = getUserLocalStorage();
        const bodyParams = {
            userID: uid
        }
        const response = await POST_DATA_WITH_BODYPARAMS('/account/get-info', bodyParams);
        if(response.status === 200){
            setUserAccountInfo(response.accountInfo)
            return
        }
        else{
            setUserAccountInfo(null)
            return
        }
    }

    const value = {
        authTokenInStorage,
        authNewToken,
        checkUserLogin,
        storeToken,
        isLogedIn,
        isAuthPinSuccess,
        setIsAuthPinSuccess,
        storeUser,
        getUserLocalStorage,
        getAccountInfo,
        userEmail,
        userID,
        userAccountInfo
    }

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
};

export { UserProvider, UserContext };