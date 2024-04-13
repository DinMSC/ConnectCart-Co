import { useContext } from 'react';
import { CartContext } from '../context/Cart.Context';

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <div>
            <h2>Your Cart</h2>
            {cart.map((product, index) => (
                <div key={index}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{product.price}$</p>
                    <img src={product.image} alt={product.name} />
                </div>
            ))}
        </div>
    );
};

export default Cart;
