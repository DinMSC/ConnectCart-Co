import { useContext } from 'react';
import { UserContext } from '../context/User.Context';
import CartProduct from '../components/CartProduct';

const Cart = () => {
    const { cart } = useContext(UserContext);

    return (
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
    );
};

export default Cart;
