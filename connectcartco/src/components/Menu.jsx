import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
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
            <div>
                <a href='/'>
                    <img src='ConnectCartLogo.jpg' alt='VXI' className='h-12' />
                </a>
            </div>

            <ul
                id='menu'
                className='hidden fixed top-0 right-0 px-10 py-16 bg-gray-800 z-50
                md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6'
            >
                <li className='md:hidden z-90 fixed top-4 right-6'>
                    <a
                        className='text-right text-white text-4xl'
                        onClick={openMenu()}
                    >
                        &times;
                    </a>
                </li>

                <li>
                    <a
                        className='text-white opacity-70 hover:opacity-100 duration-300'
                        href='/login'
                    >
                        Login
                    </a>
                </li>
                <li>
                    <a
                        className='text-white opacity-70 hover:opacity-100 duration-300'
                        href='/signup'
                    >
                        Sign up
                    </a>
                </li>

                <li onClick={() => navigate('/cart')}>
                    <ShoppingCartIcon className='cursor-pointer' />
                </li>
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
