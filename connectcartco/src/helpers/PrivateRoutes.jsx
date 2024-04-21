import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/User.Context';

const PrivateRoute = ({ children, isAdminRoute = false }) => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    if (!user) {
        navigate('/login');
        return null;
    }

    console.log('User:', user); // Check the user object
    console.log('Role:', user.role); // Check the user role
    console.log('Is Admin Route:', isAdminRoute); // Check if the route should be an admin route

    if (isAdminRoute && user.role !== 'ADMIN') {
        navigate('/login');
        return null;
    }

    return children;
};

export default PrivateRoute;
