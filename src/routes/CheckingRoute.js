import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useCheckAccType from '../hooks/useCheckAccType';
import Spinner from '../components/Spinner/Spinner';
import { AuthContext } from '../contexts/UserContext';

const CheckingRoute = ({ children }) => {
    const { user, loading, logOut } = useContext(AuthContext);
    const [accType, setAccType] = useCheckAccType(user?.email);
    const location = useLocation();

    if (loading || setAccType) {
        return <div className="custom-align"><Spinner></Spinner></div>
    }

    if (user && accType) {
        return children;
    }

    else{
        logOut()
        .then(() => { })
        .catch(e => console.error(e))
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default CheckingRoute;