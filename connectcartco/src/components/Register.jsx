import { useFormik } from 'formik';
import SignupSchema from '../helpers/formValidation';
import axios from 'axios';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
        <div className='flex flex-col justify-center gap-y-28 px-12'>
            <div className='flex flex-row justify-center text-3xl'>
                ConnectCartCo.
            </div>
            <div>
                <div className='flex flex-col justify-center'>
                    <div className='text-center block pb-12 flex flex-col gap-6'>
                        <h1 className='text-4xl'>Welcome!</h1>
                        <p className='max-w-[70%] mx-auto text-sm'>
                            Enter your details to create your account
                        </p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <form
                            onSubmit={formik.handleSubmit}
                            className='flex flex-col justify-center items-center rounded'
                        >
                            <div className='space-y-6'>
                                <Input
                                    id='username'
                                    type='text'
                                    placeholder='Username'
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    error={formik.errors.username}
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
                            </div>
                            <div className='space-y-6'>
                                <button
                                    type='submit'
                                    className={`w-96 text-white font-bold py-2 px-4 rounded ${
                                        Object.values(formik.values).some(
                                            (value) => !value
                                        ) ||
                                        Object.values(formik.errors).some(
                                            Boolean
                                        )
                                            ? 'bg-gray-200 cursor-not-allowed'
                                            : 'bg-[#07779E] hover:bg-[#0892B2]'
                                    }`}
                                    disabled={
                                        Object.values(formik.values).some(
                                            (value) => !value
                                        ) ||
                                        Object.values(formik.errors).some(
                                            Boolean
                                        )
                                    }
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='text-sm flex flex-col items-center space-y-1'>
                <div className='flex flex-row justify-center space-x-1'>
                    <span>Already have an account?</span>
                    <Link to='/login' className='text-[#07779E]'>
                        Login
                    </Link>
                </div>
                <p>info@connectcart.co</p>
            </div>
        </div>
    );
};

export default Register;
