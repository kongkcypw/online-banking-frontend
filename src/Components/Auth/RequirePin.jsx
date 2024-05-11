import React, { useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import AuthPin from '../../pages/AuthPin';

const RequirePin = () => {

    const { isAuthPinSuccess, authTokenInStorage } = useAuth();

    useEffect(() => {
        authTokenInStorage();
    }, [])

    return (
        isAuthPinSuccess
            ? <Outlet />
            : <AuthPin />
    );
}

export default RequirePin