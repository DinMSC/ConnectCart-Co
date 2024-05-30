import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProuductContext';
import ProductCard from '../components/ProductCard';
import Hero from '../components/Hero';
import ConnectCartFooter from '../components/Footer';
import ChatButton from '../components/ChatButton';
import ChatModal from '../components/ChatModal';

const Home = () => {
    const { products, fetchProducts, deleteProduct } =
        useContext(ProductContext);

    useEffect(() => {
        fetchProducts();
    }, []);

    const [isChatOpen, setIsChatOpen] = useState(false);

    const handleChatOpen = () => {
        setIsChatOpen(true);
    };

    const handleChatClose = () => {
        setIsChatOpen(false);
    };

    return (
        <div className='flex flex-col justify-center p-4 '>
            <Hero />

            <div className='flex flex-row justify-center items-center text-3xl pt-6'>
                Latest Products
            </div>

            <div className='flex flex-wrap justify-center items-center'>
                {products.map((product, index) => (
                    <ProductCard
                        deleteProduct={deleteProduct}
                        key={index}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        image={product.image}
                    />
                ))}
            </div>
            <ConnectCartFooter />
            <ChatButton onOpen={handleChatOpen} />
            {isChatOpen && <ChatModal onClose={handleChatClose} />}
        </div>
    );
};

export default Home;
