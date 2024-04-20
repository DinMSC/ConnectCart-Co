const Input = ({ id, type, placeholder, value, onChange, error }) => {
    return (
        <div className='flex flex-col w-96'>
            <input
                id={id}
                type={type}
                className='border-b'
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <div
                className={`text-red-500 text-xs self-end h-1 ${
                    error ? 'opacity-100' : 'opacity-0'
                }`}
            >
                {error || ' '}
            </div>
        </div>
    );
};

export default Input;
