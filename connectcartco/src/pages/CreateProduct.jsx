// import axios from 'axios';
import Input from '../components/Input';
import { useContext, useState } from 'react';
import { ProductContext } from '../context/ProuductContext';
import ProductCard from '../components/ProductCard';
import { v4 as uuidv4 } from 'uuid';

const CreateProduct = () => {
    const { products } = useContext(ProductContext);
    const [newProduct, setNewProduct] = useState({
        id: '',
        name: '',
        price: '',
        description: '',
        image: '',
    });
    const { createProduct } = useContext(ProductContext);

    const handleCreateProduct = async (e) => {
        e.preventDefault();
        try {
            await createProduct({ ...newProduct, id: uuidv4() });
            setNewProduct({
                id: '',
                name: '',
                price: '',
                description: '',
                image: '',
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='flex justify-center items-center pt-16'>
            <form
                onSubmit={handleCreateProduct}
                className='flex flex-col p-20 justify-center items-center space-y-10 border rounded'
            >
                <Input
                    id='name'
                    type='text'
                    placeholder='Name'
                    value={newProduct.name}
                    onChange={(e) =>
                        setNewProduct({ ...newProduct, name: e.target.value })
                    }
                />
                <Input
                    id='price'
                    type='number'
                    placeholder='Price'
                    value={newProduct.price}
                    onChange={(e) =>
                        setNewProduct({ ...newProduct, price: e.target.value })
                    }
                />
                <Input
                    id='description'
                    type='text'
                    placeholder='Description'
                    value={newProduct.description}
                    onChange={(e) =>
                        setNewProduct({
                            ...newProduct,
                            description: e.target.value,
                        })
                    }
                />
                <Input
                    id='image'
                    type='text'
                    placeholder='Image'
                    value={newProduct.image}
                    onChange={(e) =>
                        setNewProduct({ ...newProduct, image: e.target.value })
                    }
                />
                <button
                    type='submit'
                    className='w-96 text-white font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-700'
                >
                    Create Product
                </button>
            </form>

            <div className='flex flex-wrap justify-center items-center pt-16'>
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        id={product.id}
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

export default CreateProduct;
