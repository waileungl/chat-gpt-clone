import { IoMdSend } from 'react-icons/io';
import axios from 'axios';

const Chat = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className='chat-wrapper'>
            <div className='chat-container'>
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
                <form onSubmit={submitHandler} className="chat-typing-area-wrapper">
                    <div className="chat-typing-area">
                        <input
                            className='chat-input'
                        />
                        <button className="send-button">
                            <IoMdSend />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Chat;
