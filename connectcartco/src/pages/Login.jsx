import { useFormik } from 'formik';
import LoginSchema from '../helpers/formValidation';
import axios from 'axios';
import Input from '../components/Input';

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            axios
                .post('http://localhost:8000/api/login', values)
                .then((response) => {
                    console.log(response);
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
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
