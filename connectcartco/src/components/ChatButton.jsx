const ChatButton = ({ onOpen }) => {
    return (
        <button
            onClick={onOpen}
            className='fixed bottom-3 right-3 bg-blue-500 text-white p-4 rounded-full'
        >
            Chat
        </button>
    );
};

export default ChatButton;
