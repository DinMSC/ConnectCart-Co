import { useContext } from 'react';
import { CartContext } from '../context/Cart.Context';
import CartProduct from '../components/CartProduct';

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <div>
            <h2>Your Cart</h2>
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
