import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/User.Context';

const PrivateRoute = ({ children, isAdminRoute = false }) => {
    const { user } = useContext(UserContext);
    const location = useLocation();
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to='/login' replace state={{ from: location }} />;
    }

    console.log('User:', user); // Check the user object
    console.log('Role:', user.role); // Check the user role
    console.log('Is Admin Route:', isAdminRoute); // Check if the route should be an admin route

    if (isAdminRoute && user.role !== 'ADMIN') {
        return <Navigate to='/login' replace state={{ from: location }} />;
    }

    return children;
};

export default PrivateRoute;
