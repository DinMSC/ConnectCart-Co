import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/User.Context';
import { useContext } from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Menu = () => {
    const { user } = useContext(UserContext);

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };

    const navigate = useNavigate();
    function openMenu() {
        return () => {
            const menu = document.getElementById('menu');
            if (menu) {
                if (menu.classList.contains('hidden')) {
                    menu.classList.remove('hidden');
                } else {
                    menu.classList.add('hidden');
                }
            }
        };
    }

    return (
        <div className='container px-4 md:px-0 h-full mx-auto flex justify-between items-center'>
            <div className='text-3xl text-white flex flex-row gap-1 items-center'>
                <div
                    onClick={() => navigate('/')}
                    className='flex items-center cursor-pointer'
                >
                    ConnectCartCo.
                    <CiShoppingCart />
                </div>
            </div>

            <ul
                id='menu'
                className='hidden fixed top-0 right-0 px-10 py-16 bg-gray-800 z-50
                md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6'
            >
                {user ? (
                    user.role === 'ADMIN' ? (
                        <>
                            <li
                                onClick={() => {
                                    console.log('Admin:', user);
                                }}
                            >
                                <div
                                    onClick={handleLogout}
                                    className='text-white opacity-70 hover:opacity-100 duration-300 cursor-pointer'
                                >
                                    Logout
                                </div>
                            </li>
                            <li onClick={() => navigate('/createProduct')}>
                                <div className='cursor-pointer text-white opacity-70 hover:opacity-100 duration-300'>
                                    Create Product
                                </div>
                            </li>
                        </>
                    ) : (
                        <>
                            <li onClick={() => navigate('/cart')}>
                                <ShoppingCartIcon className='cursor-pointer' />
                            </li>
                            <li>
                                <div
                                    className='cursor-pointer text-white opacity-70 hover:opacity-100 duration-300'
                                    onClick={() => navigate('/dashboard')}
                                >
                                    Dashboard
                                </div>
                            </li>

                            <li
                                onClick={() => {
                                    console.log('User:', user);
                                }}
                            >
                                <div
                                    onClick={handleLogout}
                                    className='text-white opacity-70 hover:opacity-100 duration-300 cursor-pointer'
                                >
                                    Logout
                                </div>
                            </li>
                        </>
                    )
                ) : (
                    <>
                        <li>
                            <div
                                className='text-white opacity-70 hover:opacity-100 duration-300'
                                href='/login'
                            >
                                Login
                            </div>
                        </li>
                        <li>
                            <div
                                className='text-white opacity-70 hover:opacity-100 duration-300'
                                href='/register'
                            >
                                Sign up
                            </div>
                        </li>
                    </>
                )}
            </ul>

            <div className='flex items-center md:hidden'>
                <button
                    className='text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300'
                    onClick={openMenu()}
                >
                    &#9776;
                </button>
            </div>
        </div>
    );
};

export default Menu;
