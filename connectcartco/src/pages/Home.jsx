import { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProuductContext';
import ProductCard from '../components/ProductCard';
import { UserContext } from '../context/User.Context';

const Home = () => {
    const { user } = useContext(UserContext);

    const { products, fetchProducts } = useContext(ProductContext);

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className='flex flex-col justify-center p-4'>
            <h1>HI {user.username}</h1>

            <div className='flex flex-row justify-center items-center text-3xl'>
                Latest Products
            </div>

            <div className='flex flex-wrap justify-center items-center'>
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
