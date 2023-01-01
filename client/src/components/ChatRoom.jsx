import send from '../assets/send.svg'


const Chat = () => {
    return (
        <>
            <div className='chat-area'>
                {/* {messages.map((message, index) =>
                    <div key={index} className="message-wrapper" ref={index === messages.length - 1 ? lastMessageRef : null}>
                            <div className="message-content">
                                <p className="name"></p>
                                <div className="message"></div>
                            </div>
                    </div>
                )} */}
            </div>
            <form onSubmit="" className="chat-typing-area-wrapper">
                <div className="chat-typing-area">
                    <input
                        placeholder="Type your message..."
                        className='chat-input'
                    />
                    <button className="send-button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-send"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                    </button>
                </div>
            </form>
        </>
    )
}

export default Chat;
