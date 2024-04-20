import { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const createProduct = async (product) => {
        try {
            // const response = await axios.post('http://localhost:8000/api/products', product);
            // setProducts((prevProducts) => [...prevProducts, response.data]);
            setProducts((prevProducts) => [...prevProducts, product]);
        } catch (error) {
            console.error('Failed to create product:', error);
        }
    };

    return (
        <ProductContext.Provider value={{ products, createProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
