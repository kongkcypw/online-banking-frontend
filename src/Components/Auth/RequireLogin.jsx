import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import Loading from '../Global/Loading';
import PermissionDenied from '../../pages/PermissionDenied';

const RequireLogin = ({ allowedPermissions }) => {

    const location = useLocation();
    const { isLogedIn, getAccountInfo, checkUserLogin, permissionLevel } = useAuth();

    const [waitCheckUser, setWaitCheckUser] = useState(false);

    useEffect(() => {
        checkUser();
    }, [])

    const checkUser = async () => {
        await checkUserLogin();
        getAccountInfo();
        setWaitCheckUser(true);
    }

    return (
        (waitCheckUser === false)
            ? <Loading />
            : (allowedPermissions.includes(permissionLevel))
                ? <Outlet />
                : (isLogedIn)
                    ? <PermissionDenied />
                    : <Navigate to="/welcome" state={{ from: location }} replace />
    );
}

export default RequireLogin