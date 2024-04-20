import { useContext } from 'react';
import { ProductContext } from '../context/ProuductContext';
import ProductCard from '../components/ProductCard';

function Dashboard() {
    const { products } = useContext(ProductContext);

    return (
        <div>
            <h1>Dummy Page</h1>
            <p>This is a dummy page</p>
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
    );
}

export default Dashboard;
