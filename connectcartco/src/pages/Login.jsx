import { useFormik } from 'formik';
import LoginSchema from '../helpers/formValidation';
import axios from 'axios';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            console.log(values);
            axios
                .post('http://localhost:8080/api/authenticate', values)
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
                    Login
                </button>
                <div className='text-sm'>
                    Forgot Password?{' '}
                    <a className='text-blue-500' href='/forgotpassword'>
                        Click here!
                    </a>
                </div>
            </form>
        </div>
    );
};

export default Login;
