import { useFormik } from 'formik';
import LoginSchema from '../helpers/formValidation';
import axios from 'axios';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/User.Context';
import { useContext } from 'react';

const Login = () => {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            const data = {
                username: values.username,
                password: values.password,
            };
            axios
                .post('http://localhost:8080/api/auth/authenticate', data)
                .then((response) => {
                    console.log(response.data);
                    localStorage.setItem('token', response.data.token);
                    const user = {
                        username: response.data.username,
                        role: response.data.role,
                    };
                    setUser(user);
                    navigate('/dashboard');
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    });

    return (
        <div className='flex flex-col justify-center gap-y-28'>
            <div className='flex flex-row justify-center'>
                <img src='FalcoImg.png' alt='FalcoLogo' className='h-10' />
            </div>
            <div>
                <div className='flex flex-col justify-center'>
                    <div className='text-center block pb-12 flex flex-col gap-6'>
                        <h1 className='text-4xl'>Willkommen zurück</h1>
                        <p className='max-w-[70%] mx-auto text-sm'>
                            Geben Sie Ihre E-Mail-Adresse und Ihr Passwort ein,
                            um auf Ihr Konto zuzugreifen
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
                                    id='password'
                                    type='password'
                                    placeholder='Password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.errors.password}
                                />
                            </div>
                            <div className='space-y-6'>
                                <div className='flex items-center justify-between w-full pt-2'>
                                    <p>Passwort vergessen?</p>
                                </div>
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
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='text-sm flex flex-col items-center space-y-1'>
                <div className='flex flex-row justify-center space-x-1'>
                    <span>Haben Sie noch kein Konto?</span>
                    <a className='text-[#07779E]' href='/forgotpassword'>
                        Registrieren Sie sich
                    </a>
                </div>
                <p>info@falco-linsen.com</p>
            </div>
        </div>
    );
};

export default Login;
