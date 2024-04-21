import { useContext } from 'react';
import { ProductContext } from '../context/ProuductContext';
import ProductCard from '../components/ProductCard';
import { UserContext } from '../context/User.Context';

function Dashboard() {
    const { user } = useContext(UserContext);

    const { products } = useContext(ProductContext);

    return (
        <div>
            <h1>HI {user.username}</h1>
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
