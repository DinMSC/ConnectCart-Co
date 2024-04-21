import { useFormik } from 'formik';
import SignupSchema from '../helpers/formValidation';
import axios from 'axios';
import '../index.css';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            phone: '',
            email: '',
            password: '',
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            axios
                .post('http://localhost:8080/api/auth/register', values, {
                    headers: {
                        'Route-Header': 'http://localhost:3000/register/user',
                    },
                })
                .then((response) => {
                    console.log(response.data);
                    localStorage.setItem('token', response.data.token);
                    navigate('/');
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    });

    return (
        <div className='flex justify-center items-center pt-16'>
            <form
                onSubmit={formik.handleSubmit}
                className='flex flex-col p-20 justify-center items-center space-y-10 border rounded'
            >
                <Input
                    id='username'
                    type='text'
                    placeholder='Name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.errors.name}
                />
                <Input
                    id='phone'
                    type='number'
                    placeholder='Phone'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.errors.phone}
                />
                <Input
                    id='email'
                    type='email'
                    placeholder='Email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                />
                <Input
                    id='password'
                    type='password'
                    placeholder='Password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.errors.password}
                />
                <button
                    type='submit'
                    className={`w-96 text-white font-bold py-2 px-4 rounded ${
                        Object.values(formik.values).some((value) => !value) ||
                        Object.values(formik.errors).some(Boolean)
                            ? 'bg-blue-200 cursor-not-allowed'
                            : 'bg-blue-500 hover:bg-blue-700'
                    }`}
                    disabled={
                        Object.values(formik.values).some((value) => !value) ||
                        Object.values(formik.errors).some(Boolean)
                    }
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
