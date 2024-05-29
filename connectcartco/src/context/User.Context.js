import React, { createContext, useState, useMemo, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    useEffect(() => {
        const userFromStorage = localStorage.getItem('user');
        if (userFromStorage) {
            setUser(JSON.parse(userFromStorage));
        }
    }, []);

    const removeFromCart = (productToRemove) => {
        let productFound = false;
        const newCart = cart.filter((product) => {
            if (product.id === productToRemove.id && !productFound) {
                productFound = true;
                return false;
            } else {
                return true;
            }
        });
        setCart(newCart);
    };

    const total = useMemo(() => {
        return cart.reduce((total, product) => total + product.price, 0);
    }, [cart]);

    return (
        <UserContext.Provider
            value={{ user, setUser, cart, addToCart, removeFromCart, total }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
