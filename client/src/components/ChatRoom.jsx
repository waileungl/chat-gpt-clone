import { useState, useEffect, useRef } from 'react';
import { IoMdSend } from 'react-icons/io';
import axios from 'axios';


const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('')

    const appendMessage = (message) => {
        setMessages((messages) => [...messages, message]);
    };

    const lastMessageRef = useRef(null);

    useEffect(() => {
        if (messages.length === 0) return
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (text === '') return;
        axios.post('http://localhost:8000', { prompt: text }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res);
                appendMessage({
                    text: res.data.ai,
                });
            })
            .catch(err => {
                console.log('fail to get response from server', err);
            });

        appendMessage({
            text: text,
        });
        setText('');
    }

    return (
        <div className='chat-wrapper'>
            <div className='chat-container'>
                <div className='chat-area'>
                    {messages.map((message, index) =>
                        <div key={index} className="message-wrapper" ref={index === messages.length - 1 ? lastMessageRef : null}>
                            <div className="message-content">
                                <p className="my-name">Test</p>
                                <div className="my-message">{message.text}</div>
                            </div>
                        </div>
                    )}
                </div>
                <form onSubmit={submitHandler} className="chat-typing-area-wrapper">
                    <div className="chat-typing-area">
                        <input
                            className='chat-input'
                            value={text}
                            placeholder='Ask me anything..'
                            onChange={(e) => setText(e.target.value)}
                        />
                        <button className="send-msg-button">
                            <IoMdSend />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Chat;
