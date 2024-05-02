import * as Yup from 'yup';

const ProductSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),

    price: Yup.number().min(0, 'Price must be a positive number'),

    description: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!'),

    image: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!'),
});

export default ProductSchema;
