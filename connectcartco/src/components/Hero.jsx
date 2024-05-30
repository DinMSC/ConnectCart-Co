const Hero = () => {
    return (
        <div
            className='relative bg-center bg-cover h-auto text-white py-36 px-12'
            style={{
                backgroundImage: `linear-gradient(to bottom, #0a0c2c80 3rem, transparent 10rem), 
                url('https://t4.ftcdn.net/jpg/02/88/65/45/360_F_288654557_h0hiDv7cdEkdfKOIeF9wrSk4P6YH4ZMc.jpg')`,
            }}
        >
            <div className='max-w-7xl mx-auto flex'>
                <span className='max-w-1/2'>
                    <h1
                        className='font-black text-5xl mb-4'
                        style={{
                            fontSize: 'clamp(2rem, 5.5vw, 3.25rem)',
                            lineHeight: 1.2,
                        }}
                    >
                        <span className='text-[#e3b8d2]'>Welcome to </span>
                        ConnectCartCo.
                    </h1>
                    <a
                        href='#'
                        className='btn btn-light bg-white text-black py-2 px-4 rounded'
                    >
                        Contact us!
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Hero;
