import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),

    phone: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),

    email: Yup.string().matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        'Invalid email'
    ),

    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .matches(
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
            'Special Character'
        ),
});

export default SignupSchema;
