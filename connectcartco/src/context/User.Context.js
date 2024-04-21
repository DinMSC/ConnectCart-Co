import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (product) => {
        const newCart = cart.filter((item) => item.id !== product.id);
        setCart(newCart);
    };

    return (
        <UserContext.Provider
            value={{ user, setUser, cart, addToCart, removeFromCart }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
