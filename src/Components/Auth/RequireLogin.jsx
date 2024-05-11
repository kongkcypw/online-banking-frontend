import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import Loading from '../Global/Loading';

const RequireLogin = () => {

    const location = useLocation();
    const { isLogedIn, checkUserLogin } = useAuth();

    const [waitCheckUser, setWaitCheckUser] = useState(false);

    useEffect(() => {
        checkUser();
    }, [])

    const checkUser = async () => {
        await checkUserLogin();
        setWaitCheckUser(true);
    }

    return (
        (waitCheckUser === false)
            ? <Loading />
            : (isLogedIn)
                ? <Outlet />
                : <Navigate to="/welcome" state={{ from: location }} replace />
    );
}

export default RequireLogin