import {createContext, useState} from 'react'

export const ChatContext = createContext();

const ChatContextProvider = ({children}) =>{

    const [username,setUsername] = useState('');
    const [room,setRoom] = useState('');
    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);

    return(
        <ChatContext.Provider value={
            {
                username,
                setUsername,
                room,
                setRoom,
                message,
                setMessage,
                messages,
                setMessages,
            }}>

            {children}
        </ChatContext.Provider>
    )
}

export default ChatContextProvider;