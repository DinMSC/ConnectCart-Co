import Login from '../components/Login';

const LoginPage = () => {
    return (
        <div className='container mx-auto flex justify-center items-center h-screen'>
            <div className='flex flex-col justify-center p-16'>
                <div className='flex flex-row justify-center overflow-hidden relative 2xl:gap-20'>
                    <div className='relative w-[950px] h-[670px] mx-auto rounded-3xl overflow-hidden'>
                        <img
                            src='/LoginPic.webp'
                            alt='Login'
                            className='absolute inset-0 w-full h-full object-cover object-left transform scale-110'
                        />
                        <div className='absolute inset-0 bg-[#00486A] opacity-40'></div>
                    </div>
                    <div className='absolute top-0 left-0 flex flex-col items-start gap-2 justify-end w-[600px] h-full px-10 pb-8'>
                        <p className='text-white text-3xl w-[210px]'>
                            Falco Linsen - Ihre Partnerschaft für individuelle
                            Sehlösungen!
                        </p>
                        <p className='text-white w-[190px] text-2xs'>
                            Wir verstehen uns als Team mit unseren Kunden und
                            setzen modernste Produktionsverfahren ein, um
                            hochwertige und maßgeschneiderte Lösungen zu
                            schaffen. Unsere Kontaktlinsen erfüllen höchste
                            Ansprüche und werden ausschließlich in der Schweiz
                            hergestellt. Egal ob Standard- oder komplexe
                            Speziallinsen – bei uns steht Ihre Zufriedenheit im
                            Mittelpunkt.
                        </p>
                    </div>
                    <Login />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
