import Register from '../components/Register';

const RegisterPage = () => {
    return (
        <div className='container mx-auto flex justify-center items-center h-screen'>
            <div className='flex flex-col justify-center p-16'>
                <div className='flex flex-row justify-center overflow-hidden relative 2xl:gap-20'>
                    <div className='relative w-[850px] h-[670px] mx-auto rounded-3xl overflow-hidden'>
                        <img
                            src='/LoginPic.webp'
                            alt='Login'
                            className='absolute inset-0 w-full h-full object-cover object-left transform scale-110'
                        />
                        <div className='absolute inset-0 bg-[#00486A] opacity-40'></div>
                    </div>
                    <div className='absolute top-0 left-0 flex flex-col items-start gap-2 justify-end w-[600px] h-full px-10 pb-8'>
                        <p className='text-white text-3xl w-[210px]'>
                            Welcome to Connect Cart Co.
                        </p>
                        <p className='text-white w-[190px] text-2xs'>
                            At ConnectCart Co., we bring you a seamless online
                            marketplace where your preferences meet endless
                            possibilities. Whether you're searching for the
                            latest gadgets, fashion essentials, or unique gifts,
                            our AI assistant is here to streamline your journey.
                            Join us and explore a world where you can buy
                            whatever you like, effortlessly. Let's connect and
                            shop smarter together!
                        </p>
                    </div>
                    <Register />
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
