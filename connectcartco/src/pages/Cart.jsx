import { useContext } from 'react';
import { UserContext } from '../context/User.Context';
import CartProduct from '../components/CartProduct';
import { Button } from '@mui/material';

const Cart = () => {
    const { cart, total, user } = useContext(UserContext);
    return (
        <div className='flex flex-col justify-center'>
            <h1 className='text-3xl font-semibold text-center mt-4'>
                Hi {user.username}, your cart has {cart.length} items
            </h1>
            <div className='flex flex-row justify-center'>
                {cart.map((product, index) => (
                    <CartProduct
                        key={index}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        image={product.image}
                    />
                ))}
            </div>
            <div className='flex flex-row justify-center items-center bg-gray-200 p-4 rounded-md shadow-md'>
                <h2 className='text-lg font-semibold'>
                    Total price for items:
                </h2>
                <span className='text-xl font-bold'>${total.toFixed(2)}</span>
                <div className='pl-4'>
                    <Button variant='contained' color='primary'>
                        Checkout
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
