import Input from '../components/Input';
import { useContext } from 'react';
import { useFormik } from 'formik';
import { ProductContext } from '../context/ProuductContext';
import { v4 as uuidv4 } from 'uuid';
import ProductSchema from '../helpers/createProductValidation';

const CreateProduct = () => {
    const { createProduct } = useContext(ProductContext);

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            description: '',
            image: '',
        },
        validationSchema: ProductSchema,
        onSubmit: async (values) => {
            try {
                await createProduct({ ...values, id: uuidv4() });
                formik.resetForm();
            } catch (error) {
                console.log(error);
            }
        },
    });

    return (
        <div className='flex justify-center items-center bg-gray-100 h-screen'>
            <form
                onSubmit={formik.handleSubmit}
                className='flex flex-col p-10 justify-center items-center space-y-6 border rounded shadow-lg bg-white'
            >
                <h2 className='text-2xl font-semibold mb-5'>Create Product</h2>
                <Input
                    id='name'
                    type='text'
                    placeholder='Name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.errors.name}
                    className='border rounded p-2 w-full'
                />
                <Input
                    id='price'
                    type='number'
                    placeholder='Price'
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    error={formik.errors.price}
                    className='border rounded p-2 w-full'
                />
                <Input
                    id='description'
                    type='text'
                    placeholder='Description'
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.errors.description}
                    className='border rounded p-2 w-full'
                />
                <Input
                    id='image'
                    type='text'
                    placeholder='Image'
                    value={formik.values.image}
                    onChange={formik.handleChange}
                    error={formik.errors.image}
                    className='border rounded p-2 w-full'
                />
                <button
                    type='submit'
                    className={`w-full text-white font-bold py-2 px-4 rounded ${
                        Object.values(formik.values).some((value) => !value) ||
                        Object.values(formik.errors).some(Boolean)
                            ? 'bg-gray-200 cursor-not-allowed'
                            : 'bg-blue-500 hover:bg-blue-700'
                    }`}
                    disabled={
                        Object.values(formik.values).some((value) => !value) ||
                        Object.values(formik.errors).some(Boolean)
                    }
                >
                    Create Product
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;
