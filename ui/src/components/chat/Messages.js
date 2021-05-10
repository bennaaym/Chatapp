import {useEffect,useRef,useContext} from 'react'
import {ChatContext} from '../../context/ChatContext';
import Message from './Message';
const Messages = () => {

    const {username, messages} = useContext(ChatContext);
    const messagesEndRef = useRef(null);
    
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(()=>
    {
        scrollToBottom();
    },[messages]);
    
    return(
        <div 
            className ="messages h-4/5 overflow-auto text-sm text-gray-50 font-light">      
              
                    {
                         messages.map((message,index)=>{
                            return <Message key={index} message={message} currentUser={username}/>
                        })
                    }

                    <div ref ={messagesEndRef}></div>
        </div>
    );
    
}
 
export default Messages
