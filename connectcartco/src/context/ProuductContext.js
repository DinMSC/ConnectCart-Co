import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const createProduct = async (product) => {
        try {
            const response = await axios.post(
                'http://localhost:8080/products',
                product
            );
            console.log(response);
            setProducts((prevProducts) => [...prevProducts, product]);
        } catch (error) {
            console.error('Failed to create product:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    };

    return (
        <ProductContext.Provider
            value={{ products, createProduct, fetchProducts }}
        >
            {children}
        </ProductContext.Provider>
    );
};
