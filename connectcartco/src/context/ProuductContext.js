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

            setProducts((prevProducts) => [...prevProducts, product]);
        } catch (error) {
            console.error('Failed to create product:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const deleteProduct = async (id) => {
        try {
            const response = await axios.delete(
                `http://localhost:8080/products/product/${id}`
            );

            setProducts((prevProducts) =>
                prevProducts.filter((product) => product.id !== id)
            );
        } catch (error) {
            console.error('Failed to delete product:', error);
        }
    };

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
            value={{ products, createProduct, fetchProducts, deleteProduct }}
        >
            {children}
        </ProductContext.Provider>
    );
};
