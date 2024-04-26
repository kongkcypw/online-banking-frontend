import { createContext, useState, useEffect } from "react";
import { useDataFetch } from "../hooks/useDataFetch";
const UserContext = createContext();

const UserProvider = ({ children }) => {

    const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();

    const [userEmail, setUserEmail] = useState(null);
    const [userToken, setUserToken] = useState(null);

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
    const storeEmail = (email) => {
        let data = JSON.parse(window.localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_NAME));
        if(data){
            data.email = email;
        }
        else{
            data = {
                email: email,
                token: ''
            }
        }
        window.localStorage.setItem(import.meta.env.VITE_LOCAL_STORAGE_NAME, JSON.stringify(data));
    }

    const value = {
        authTokenInStorage,
        authNewToken,
        checkUserLogin,
        storeToken,
        isLogedIn,
        isAuthPinSuccess,
        setIsAuthPinSuccess,
        storeEmail
    }

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
};

export { UserProvider, UserContext };