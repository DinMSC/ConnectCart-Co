import { useState } from 'react';

const ChatModal = ({ onClose }) => {
    const [query, setQuery] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(
            'http://localhost:8080/api/chat/searchChatGPT',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query }),
            }
        );
        const data = await response.text();
        setMessage(data);
        console.log(data);
        setQuery('');
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
            <div className='bg-white p-8 rounded shadow-lg w-[450px] h-[300px]'>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={query}
                        onChange={handleInputChange}
                        placeholder='Enter your query...'
                    />
                    <button
                        className='bg-blue-200 p-1 rounded-full ml-2'
                        type='submit'
                    >
                        Submit
                    </button>
                </form>
                <p>{message}</p>
                <button className='bg-red-400 p-1' onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default ChatModal;
